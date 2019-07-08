<?php
require('config/config.php');
require('config/db.php');

if(isset($_POST['id']) && isset($_POST['database'])){
  $table = '';
  $id = $_POST['id'];

  $columns = '';
  switch($_POST['database']){
    case 'Products':
      if($id[0] == 'L' && $id[1] == 'P'){
        $table = 'lp';
      }else if($id[0] == 'L' && $id[1] == 'N'){
        $table = 'ln';
      }else if($id[0] == 'C' && $id[1] == 'D'){
        $table = 'cd';
      }

      $id[0] = 0;
      $id[1] = 0;
      $id = (int) $id;
      if($table == 'lp'){
        $columns = 'description, vcond, scond, inv_floor, reserved, inv_basement, family, class, fileunder, sell, pressinfo,
                    catno, country, upc'; //eventually also discogs link
      }else if($table == 'ln'){
        $columns = 'description, inv_floor, inv_basement, reserved, inv_cstock, inv_ccustomers, family, class, fileunder, sell, pressinfo,
                    catno, upc'; //eventually also discogs link
      }else if($table == 'cd'){
        $columns = 'description, inv_floor, reserved, inv_basement, class, sell, catno, upc'; //eventually also discogs link
      }
      break;
    case 'Customers':
      $table = 'customers';
      $columns = 'firstname, lastname, mainphone, email, discount, points, address1, address2, city, postalcode, province, country';
      break;
  }



  $query = "SELECT $columns FROM $table WHERE id = $id";
  //echo $query;
  $result = mysqli_query($conn, $query);
  //echo $result;

  $post = mysqli_fetch_all($result, MYSQLI_ASSOC);
  mysqli_free_result($result);
  mysqli_close($conn);
  echo json_encode($post);



}


 ?>
