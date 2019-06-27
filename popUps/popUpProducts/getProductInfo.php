<?php
require('../../config/config.php');
require('../../config/db.php');

if(isset($_POST['id'])){

  $sendBack = new \stdClass(); //this the class we will convert to JSON to send back to the client
  $sendBack->error = 'None';
  $sendBack->data = '';
  $id = mysqli_real_escape_string($conn, $_POST['id']);
  $query = '';

  switch($id[0].$id[1]){
    case "LN":
      $id[0]=0;
      $id[1]=0;
      $id = (int)$id;
      $query = "SELECT id, type, description, sell, family, class, upc, fileunder, pressinfo,
                      inv_floor, inv_basement, inv_ccustomers, inv_cstock, reserved FROM `ln` WHERE id={$id}";
      break;

    case "LP":
      $id[0]=0;
      $id[1]=0;
      $id = (int)$id;
      $query = "SELECT id, type, description, sell, country, family, class, upc, scond, vcond, catno, altcatno, fileunder, pressinfo,
                      inv_floor, inv_basement, reserved FROM `lp` WHERE id={$id}";
      break;

    case "CD":
      $id[0]=0;
      $id[1]=0;
      $id = (int)$id;
      $query = "SELECT id, type, description, sell, country, family, class, catno, altcatno, fileunder,
                      inv_floor, inv_basement, reserved FROM `cd` WHERE id={$id}";
      break;
  }

  // echo $query;


  //Get Result
  $result = mysqli_query($conn, $query);

  if($result == false){ //if query failed
    $sendBack->error= 'Invalid Query';
    mysqli_close($conn);
    echo json_encode($sendBack);
  }else{
    //Fetch Data
    $post = mysqli_fetch_all($result, MYSQLI_ASSOC);
    //echo $post;
    //Free Result
    mysqli_free_result($result);
    //Close Connection
    mysqli_close($conn);
    if($post == NULL){ //if query returns no rows
      $sendBack->error= 'No results found.';
    }else{
      $sendBack->data = json_encode($post);
    }
    echo json_encode($sendBack);
  }

}

 ?>
