<?php
require('../../config/config.php');
require('../../config/db.php');

if(isset($_POST['id'])){

  $sendBack = new \stdClass(); //this the class we will convert to JSON to send back to the client
  $sendBack->error = 'None';
  $sendBack->data = '';
  $id = mysqli_real_escape_string($conn, $_POST['id']);
  $query = '';

  $query = "SELECT id, firstname, lastname, phone1, phone2, phone3, company, website, mainphone, points, address1, address2, email, province, country, notes, discount, postalcode, city
            FROM `customers` WHERE id = $id";

  //Get Result
  $result = mysqli_query($conn, $query);

  if($result == false){ //if query failed
    $sendBack->error= 'Invalid Query';
    mysqli_close($conn);
    echo json_encode($sendBack);
  }else{
    //Fetch Data
    $post = mysqli_fetch_all($result, MYSQLI_ASSOC);
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
