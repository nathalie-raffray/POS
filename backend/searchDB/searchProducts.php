<?php
require('../../config/config.php');
require('../../config/db.php');

if(isset($_POST['entered']) && isset($_POST['filter']) && isset($_POST['searchIndex']) && isset($_POST['offset'])&& isset($_POST['count'])){
  ini_set('memory_limit','125M');

  $search = mysqli_real_escape_string($conn, $_POST['entered']);
  $offset = $_POST['offset'];
  $count = $_POST['count'];


  $orderClause = '';
  if(isset($_POST['orderby']) && isset($_POST['ascdesc'])){
    $orderby = $_POST['orderby'];
    $ascdesc = $_POST['ascdesc'];
  }
  if($orderby != ''){
    $orderClause = " ORDER BY {$orderby} {$ascdesc}";
  }

  $sendBack = new \stdClass(); //this the class we will convert to JSON to send back to the client
  $sendBack->error = 'None';

  //$limitClause = " LIMIT {$offset}, {$count}"; NEED TO GET RID OF LIMIT
  $whereClause = ''; //this will hold the 'WHERE ....' part of the query
  $query = '';  //this will hold the whole mySQL query

  switch($_POST['filter']){
    case "Product Code":
      $table='';
      $valid = true; //Will keep track whether or not the product code entered is valid

      if(strlen($search) > 10) //INCORRECT AMOUNT OF CHARS/NUMBERS ENTERED IN SEARCH
      {
        $valid = false;
      }
      else{ //CORRECT AMOUNT OF CHARS/NUMBERS ENTERED IN SEARCH
        if($search[0] == 'l' || $search[0] == 'L'){
          if($search[1] == 'p' || $search[1] == 'P'){
            $table='lp';
          } elseif($search[1] == 'n' || $search[1] == 'N'){
            $table='ln';
          }

        }elseif(($search[0] == 'c' || $search[0] == 'C') && ($search[1] == 'd' || $search[1] == 'D') ){
          $table='cd';
        }
        //here we have the case if someone enters a code without specifying LN or LP or CD
        elseif(strlen($search)<=8){ //the only draw back to this is that if someone enters 00000000000001, nothing will be returned.
          $numDigits = strlen($search);
          if(! (is_numeric($search)) ){
            $valid = false;
          }

          if($valid){
            if(strlen($search)==8){
              $whereClause = "WHERE id=".$search;
            }
            else{
              $min = powerTo($search, (8-$numDigits));
              $max = $min + powerTo(1, (8-$numDigits));
              //if someone searches lp001, instead of searching for
              //lp00000001, it will search for lp00100000 - lp00199999
              $whereClause = "WHERE id>=".$min." AND id<".$max;
            }
            //if LP/LN/CD arent specified we must look through each database
            $query = "SELECT id, type, description, sell, qty,
                               class, fileunder, vcond, scond, family, inv_floor
                      FROM `ln` ".$whereClause."
                      UNION ALL
                      SELECT id, type, description, sell, qty,
                                         class, fileunder, vcond, scond, family, inv_floor
                                FROM `lp` ".$whereClause."
                      UNION ALL
                      SELECT id, type, description, sell, qty,
                                         class, fileunder, vcond, scond, family, inv_floor
                                FROM `cd` ".$whereClause.$orderClause;

          }
        }else if(strlen($search)==9 || strlen($search)==10){ //this is the case where a user has entered 9 or 10 digits
                                                              //that do not start with LN/LP/CD
          $valid = false;
        }
        if($table != ''){

          $search[0] = 0;
          $search[1] = 0;
          $numDigits = strlen($search) -2;
          //HERE IT SHOULD ALSO BE TRY $search = (int)$search
          //what if someone inputs cd00tyt123
          if(! (is_numeric($search)) ){
            $valid = false;
          }
          else{
            $search = (int)$search;

            //Create Query
            if($numDigits == 8){
              // $query = "SELECT id, type, description, sell, qty,
              //                    class, fileunder, vcond, scond, family
              //           FROM `{$table}` WHERE id=".$search;
              $whereClause = "WHERE id=".$search;
            }
            else{
              $min = powerTo($search, (8-$numDigits));
              $max = $min + powerTo(1, (8-$numDigits));
              //if someone searches lp001, instead of searching for
              //lp00000001, it will search for lp00100000 - lp00199999
              $whereClause = "WHERE id>=".$min." AND id<".$max;

              // $query = "SELECT id, type, description, sell, qty,
              //                    class, fileunder, vcond, scond, family
              //           FROM `{$table}` WHERE id>=".$min." AND id<".$max;
            }
            $query = "SELECT id, type, description, sell, qty,
                               class, fileunder, vcond, scond, family, inv_floor
                      FROM `{$table}` ".$whereClause.$orderClause;
          }



        }

      }

      if(!$valid){
        $sendBack->error = 'Please enter a valid product code.';
        $sendBack->data = '';
        echo json_encode($sendBack);
        break;
      }
      //echo $query;
      //Get Result
      $result = mysqli_query($conn, $query);

      if($result == false){ //if query failed, the query entered was invalid, something we need to fix
        $sendBack->error = 'Invalid Query.';
        $sendBack->data = '';
        echo json_encode($sendBack);
        break;
      }
      //Fetch Data
      $post = mysqli_fetch_all($result, MYSQLI_ASSOC);

      if($post == NULL){ //if query returns no rows
        $sendBack->error = 'No results found.';
        $sendBack->data = '';
        echo json_encode($sendBack);
        break;
      }

      //Free Result
      mysqli_free_result($result);

      //Close Connection
      mysqli_close($conn);

      // echo $post;

      $sendBack->data = json_encode($post);
      echo json_encode($sendBack);
      break;

    case "Description":
      $searcharr = explode(' ', $search);
      $string='';
      for($i=1; $i<sizeof($searcharr); $i++){
        $string = $string."AND description LIKE '%{$searcharr[$i]}%'";
      }
      $query = "SELECT id, type, description, sell, qty,
                         class, fileunder, vcond, scond, family, inv_floor
                FROM `lp` WHERE description LIKE '%{$searcharr[0]}%' {$string}
                UNION ALL
                SELECT id, type, description, sell, qty,
                                   class, fileunder, vcond, scond, family, inv_floor
                FROM `cd`  WHERE description LIKE '%{$searcharr[0]}%' {$string}
                ".$orderClause;


      //echo $query;
       $result = mysqli_query($conn, $query);
       // $responseClient=array();

       if($result == false){ //if query failed
         $sendBack->error = 'Invalid Query.';
         $sendBack->data = '';
         echo json_encode($sendBack);
         mysqli_close($conn);
         break;
       }
       $post = mysqli_fetch_all($result, MYSQLI_ASSOC); //, MYSQLI_ASSOC

       if($post == NULL){
         $sendBack->error = 'No results found.';
         $sendBack->data = '';
         echo json_encode($sendBack);
         mysqli_free_result($result);
         mysqli_close($conn);
         break;
       }

       mysqli_free_result($result);
       mysqli_close($conn);

       $sendBack = new \stdClass();
       $sendBack->error = 'None';
       $sendBack->data = json_encode($post);

       echo json_encode($sendBack);


      break;

    case "Artist":
    $query = "SELECT lp_id, type, lp_artist, lp_album, lp_price, lp_inv_floor,
                       lp_inv_basement, lp_genre, lp_file_under, lp_condition, lp_label
              FROM `used` WHERE lp_artist LIKE '%{$search}%'
               UNION
               SELECT ln_id, type, ln_artist, ln_album, ln_price, ln_inv_floor,
                                ln_inv_basement, ln_genre, ln_file_under, ln_pressing_info, ln_label
                        FROM `new` WHERE ln_artist
                           LIKE '%{$search}%' ";
     $result = mysqli_query($conn, $query);

     if($result == false){ //if query failed
       $sendBack->error = 'Invalid Query.';
       $sendBack->data = '';
       echo json_encode($sendBack);
       break;
     }
     $post = mysqli_fetch_all($result); //, MYSQLI_ASSOC
     if($post == NULL){
       $sendBack->error = 'No results found.';
       $sendBack->data = '';
       echo json_encode($sendBack);
       break;
     }
     mysqli_free_result($result);
     mysqli_close($conn);
     echo json_encode($post);
      break;

    case "Album":
    $query = "SELECT lp_id, type, lp_artist, lp_album, lp_price, lp_inv_floor,
                       lp_inv_basement, lp_genre, lp_file_under, lp_condition, lp_label
              FROM `used` WHERE lp_album LIKE '%{$search}%'
               UNION
               SELECT ln_id, type, ln_artist, ln_album, ln_price, ln_inv_floor,
                                ln_inv_basement, ln_genre, ln_file_under, ln_pressing_info, ln_label
                        FROM `new` WHERE ln_album LIKE '%{$search}%' ";
     $result = mysqli_query($conn, $query);

     if($result == false){ //if query failed
       $sendBack->error = 'Invalid Query.';
       $sendBack->data = '';
       echo json_encode($sendBack);
       break;
     }
     $post = mysqli_fetch_all($result); //, MYSQLI_ASSOC
     if($post == NULL){
       $sendBack->error = 'No results found.';
       $sendBack->data = '';
       echo json_encode($sendBack);
       break;
     }
     mysqli_free_result($result);
     mysqli_close($conn);
     echo json_encode($post);
      break;

    case "Genre":
      break;

    case "Label":
      break;

    case "All":
      break;
  }
}

function powerTo($x, $n){ //returns x*(10^n) recursively
  if($n == 0){
    return $x;
  }
  return powerTo( (10 * $x), ($n - 1) );
}

//DO IS VALID HELPER FUNCTIONs
//EG productCodeIsValid returns boolean


 ?>
