<?php
require('../../config/config.php');
require('../../config/db.php');

if(isset($_GET['id'])){

  $id = mysqli_real_escape_string($conn, $_GET['id']);
  $query = '';

  switch($id[0].$id[1]){
    case "LN":
      $id[0]=0;
      $id[1]=0;
      $id = (int)$id;
      $query = "SELECT * FROM `new` WHERE ln_id={$id}";
      break;

    case "LP":
      $id[0]=0;
      $id[1]=0;
      $id = (int)$id;
      $query = "SELECT * FROM `used` WHERE lp_id={$id}";
      break;
  }

  // echo $query;


  //Get Result
  $result = mysqli_query($conn, $query);

  if($result == false){ //if query failed
    echo 'query failed1';

  }
  //Fetch Data
  $post = mysqli_fetch_all($result);

  if($post == NULL){ //if query returns no rows
    echo 'query failed2';

  }

  //Free Result
  mysqli_free_result($result);

  //Close Connection
  mysqli_close($conn);

  // echo $post;
  echo json_encode($post);
}

 ?>
