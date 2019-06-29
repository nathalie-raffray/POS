<?php
require('../../config/config.php');
require('../../config/db.php');

if(isset($_POST['id'])){
  $sendBack = new \stdClass();

  $table = '';
  $id = $_POST['id'];
  if($id[0] == 'L' && $id[1] == 'N'){
    $table = 'ln';
  }else if($id[0] == 'L' && $id[1] == 'P'){
    $table = 'lp';
  }else if($id[0] == 'C' && $id[1] == 'D'){
    $table = 'cd';
  }
  $id[0] = 0;
  $id[1] = 0;
  $id = (int) $id;

//SET points = points + 1
  $qty = mysqli_real_escape_string($conn, $_POST['qty']);
  if($qty == ''){
    $sendBack->error ='Nothing happened.';
    echo json_encode($sendBack);
  }else{
    if($_POST['action'] == 'adjust'){
      $inv = $_POST['floorbasement'];

      if($_POST['totalAdd'] == 'total'){
        $set = "SET $inv = $qty";
      }else if($_POST['totalAdd'] == 'add'){
        $set = "SET $inv = $inv + $qty";
      }


    }else if($_POST['action'] == 'transfer'){
      $inv1 = $_POST['transferFrom'];
      $inv2 = $_POST['transferTo'];

      $set = "SET $inv1 = $inv1 - $qty,
                  $inv2 = $inv2 + $qty";

    }

    $query="UPDATE $table
            $set
            WHERE id = $id";

    $query1 = "SELECT inv_floor FROM $table WHERE id=$id";
    $query2 = "SELECT inv_basement FROM $table WHERE id=$id";
    $query3 = "SELECT reserved FROM $table WHERE id=$id";
    // if($table != ''){
    //   $query="UPDATE $table
    //           SET $inv = $num
    //           WHERE id = $id";
    // }
    // if($_POST['adjust'] == 'total'){
    //   $num = $_POST['totalAdjustBy'];
    // }else if($_POST['adjust'] == 'add'){
    //   $num = $_POST['addAdjustBy'];
    // }
    $result = mysqli_query($conn, $query);
    $result1 = mysqli_query($conn, $query1);
    $post1 = mysqli_fetch_all($result1);
    $result2 = mysqli_query($conn, $query2);
    $post2 = mysqli_fetch_all($result2);
    $result3 = mysqli_query($conn, $query3);
    $post3 = mysqli_fetch_all($result3);
    if($result == false || $result1 == false || $result2 == false || $result3 == false){ //if query failed
      $sendBack->error= 'Invalid Query';
      echo json_encode($sendBack);
    }else{
      $sendBack->inv_floor = $post1;
      $sendBack->inv_basement = $post2;
      $sendBack->reserved = $post3;
      $sendBack->error = 'None';
      echo json_encode($sendBack);
    }

    //mysqli_free_result($result);
    mysqli_free_result($result1);
    mysqli_free_result($result2);
    mysqli_free_result($result3);

  }




  // if(mysqli_query($conn, $query)){
  //    //header('Location: productsPopUp.html');
  // }else{
  //   echo 'ERROR'.mysqli_error($conn);
  // }
  mysqli_close($conn);

}






 ?>
