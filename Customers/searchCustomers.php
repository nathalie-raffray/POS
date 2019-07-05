<?php
require('../config/config.php');
require('../config/db.php');

if(isset($_POST['entered']) && isset($_POST['filter']) && isset($_POST['searchIndex']) && isset($_POST['offset'])&& isset($_POST['count'])){
  ini_set('memory_limit','125M');

  $search = mysqli_real_escape_string($conn, $_POST['entered']);
  // $offset = $_POST['offset'];
  // $count = $_POST['count'];


  $orderClause = '';
  if(isset($_POST['orderby']) && isset($_POST['ascdesc'])){
    $orderby = $_POST['orderby'];
    $ascdesc = $_POST['ascdesc'];
  }
  if($orderby != ''){
    $orderClause = " ORDER BY $orderby $ascdesc";
  }

  $sendBack = new \stdClass(); //this the class we will convert to JSON to send back to the client
  $sendBack->error = 'None';

  //$limitClause = " LIMIT {$offset}, {$count}"; NEED TO GET RID OF LIMIT
  $whereClause = ''; //this will hold the 'WHERE ....' part of the query
  $query = '';  //this will hold the whole mySQL query

  switch($_POST['filter']){
    case "customer":
      $valid = true; //Will keep track whether or not the product code entered is valid

      $searcharr = explode(' ', $search);
      $string="(firstname LIKE '%{$searcharr[0]}%' OR lastname LIKE '%{$searcharr[0]}%')";
      for($i=1; $i<sizeof($searcharr); $i++){
        $string = $string."AND (firstname LIKE '%{$searcharr[$i]}%' OR lastname LIKE '%{$searcharr[$i]}%')";
      }

      $query = "SELECT id, firstname, lastname, mainphone, email, points, discount, postalcode, city FROM `customers`
              WHERE $string $orderClause";

      if(!$valid){
        $sendBack->error = 'Please enter a valid customer code.';
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

    case "phone number":
      $search = str_replace(' ', '', $search);
      $search = str_replace('-', '', $search);
      $search = str_replace(')', '', $search);
      $search = str_replace('(', '', $search);
      $string = "phone1 LIKE '%{$search}%' OR phone2
                        LIKE '%{$search}%' OR phone3 LIKE '%{$search}%'";
      doCustomerQuery($string, $sendBack, $orderClause, $conn);
      //doQuery($search, 'description', $orderClause, $sendBack, $conn);
      break;

    case "email":
      $string = "email LIKE '%{$search}%'";
      doCustomerQuery($string, $sendBack, $orderClause, $conn);
      //doQuery($search, 'artiste', $orderClause, $sendBack, $conn);
      break;

    case "city":
      $string = "city LIKE '%{$search}%'";
      doCustomerQuery($string, $sendBack, $orderClause, $conn);
      break;

    case "postal code":
      $string = "postalcode LIKE '%{$search}%'";
      doCustomerQuery($string, $sendBack, $orderClause, $conn);
      break;

    case "discount":
      $string = "discount LIKE '%{$search}%'";
      doCustomerQuery($string, $sendBack, $orderClause, $conn);
      break;

    case "All":
      $searcharr = explode(' ', $search);
      $string="(firstname LIKE '%{$searcharr[0]}%' OR lastname LIKE '%{$searcharr[0]}%
                OR phone1 LIKE '%{$searcharr[0]}%' OR phone2 LIKE '%{$searcharr[0]}%'
                OR phone3 LIKE '%{$searcharr[0]}%' OR email LIKE '%{$searcharr[0]}%'
                OR city LIKE '%{$searcharr[0]}%' or postalcode LIKE '%{$searcharr[0]}%'
                OR discount LIKE '%{$searcharr[0]}%')";
      for($i=1; $i<sizeof($searcharr); $i++){
        $string = $string."AND (firstname LIKE '%{$searcharr[$i]}%' OR lastname LIKE '%{$searcharr[$i]}%
                  OR phone1 LIKE '%{$searcharr[$i]}%' OR phone2 LIKE '%{$searcharr[$i]}%'
                  OR phone3 LIKE '%{$searcharr[$i]}%' OR email LIKE '%{$searcharr[$i]}%'
                  OR city LIKE '%{$searcharr[$i]}%' or postalcode LIKE '%{$searcharr[$i]}%'
                  OR discount LIKE '%{$searcharr[$i]}%')";
      }
      doCustomerQuery($string, $sendBack, $orderClause, $conn);
      break;
  }
}

// function powerTo($x, $n){ //returns x*(10^n) recursively
//   if($n == 0){
//     return $x;
//   }
//   return powerTo( (10 * $x), ($n - 1) );
// }


function doCustomerQuery($string, $sendBack, $orderClause, $conn){
  $query = "SELECT id, firstname, lastname, mainphone, points, email, discount, postalcode, city FROM `customers`
          WHERE $string $orderClause";
  $result = mysqli_query($conn, $query);
  // $responseClient=array();

  if($result == false){ //if query failed
    $sendBack->error = 'Invalid Query.';
    $sendBack->data = '';
    echo json_encode($sendBack);
    mysqli_close($conn);
    return;
  }
  $post = mysqli_fetch_all($result, MYSQLI_ASSOC); //, MYSQLI_ASSOC

  if($post == NULL){
    $sendBack->error = 'No results found.';
    $sendBack->data = '';
    echo json_encode($sendBack);
    mysqli_free_result($result);
    mysqli_close($conn);
    return;
  }

  mysqli_free_result($result);
  mysqli_close($conn);

  $sendBack = new \stdClass();
  $sendBack->error = 'None';
  $sendBack->data = json_encode($post);

  echo json_encode($sendBack);
}




 ?>
