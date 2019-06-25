<?php

  //Create Connection
  $conn = mysqli_connect(DB_HOST,
  DB_USER, DB_PASS, 'products');

  //Check Connection
  if(mysqli_connect_error()){
    //Connection Failed
    echo 'failed to connect to MYSQL' .
    mysqli_connect_errno();
  }
 ?>
