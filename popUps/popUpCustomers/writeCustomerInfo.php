<?php
require('../../config/config.php');
require('../../config/db.php');

// echo $_POST['mainphone'];
$mainphone = $_POST['phone'.$_POST['mainphone']];
// echo $mainphone;

$query = "UPDATE `customers` SET
          firstname='{$_POST['firstname']}',
          lastname='{$_POST['lastname']}',
          country='{$_POST['country']}',
          province='{$_POST['province']}',
          city='{$_POST['city']}',
          postalcode='{$_POST['postalcode']}',
          address1='{$_POST['address1']}',
          address2='{$_POST['address2']}',
          website='{$_POST['website']}',
          discount='{$_POST['discount']}',
          phone1='{$_POST['phone1']}',
          phone2='{$_POST['phone2']}',
          phone3='{$_POST['phone3']}',
          mainphone='$mainphone',
          company='{$_POST['company']}'
          WHERE id= {$_POST['id']} ";


    if(mysqli_query($conn, $query)){
       header('Location: customersPopUp.html');
    }else{
      echo 'ERROR'.mysqli_error($conn);
    }
    mysqli_close($conn);
    //echo $query;

 ?>
