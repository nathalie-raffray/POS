<?php
require('../../config/config.php');
require('../../config/db.php');

if(isset($_POST['save'])){
  $code = $_POST['code'];
  $description= mysqli_real_escape_string($conn, $_POST['description']);
  list($artist, $album) = explode(' - ', $description);
  $label = $_POST['label'];
  $upc = $_POST['upc'];
  $press_info = $_POST['pressInfo'];
  $country = $_POST['country'];
  $catalogueNo = $_POST['catalogueNo'];
  $altCatalogueNo = $_POST['altCatalogueNo'];
  $fileUnder = $_POST['fileUnder'];
  $infoSup = $_POST['extraInfo'];
  // $numWall = $_POST['numWall'];
    //still need to fix genre and condition

  $query = '';

  if($code[1] == 'N'){
    $code[0] = 0;
    $code[1] = 0;

    $query = "UPDATE `new` SET
              ln_artist='$artist',
              ln_album='$album',
              ln_label='$label',
              ln_file_under='$fileUnder',
              ln_pressing_info='$press_info',
              ln_info_supp='$infoSup'
                WHERE ln_id={$code}";

  } else if($code[1] == 'P'){
    $code[0] = 0;
    $code[1] = 0;

    $query = "UPDATE `used` SET
              lp_artist='$artist',
              lp_album='$album',
              lp_country='$country',
              lp_catalog='$catalogueNo',
              lp_altcatalog='$altCatalogueNo',
              lp_label='$label',
              lp_file_under='$fileUnder',
              lp_pressing_info='$press_info',
              lp_info_supp='$infoSup'
                WHERE lp_id={$code}";

  }

  if(mysqli_query($conn, $query)){
     header('Location: productsPopUp.html');
  }else{
    echo 'ERROR'.mysqli_error($conn);
  }

  // //get id
  // $id = mysqli_real_escape_string($conn, $_GET['id']);
  //
  // //Create Query
  // $query = 'SELECT * FROM posts WHERE id=' .$id;
  //
  // //Get Result
  // $result = mysqli_query($conn, $query);
  //
  // //Fetch Data
  // $post = mysqli_fetch_assoc($result);
  // //this is gonna give back the data in an associate array
  // // var_dump($posts);
  //
  // //Free Result
  // mysqli_free_result($result);
  //
  // //Close Connection
  // mysqli_close($conn);





}

// $update_id = mysqli_real_escape_string($conn, $_POST['update_id']);
// $title = mysqli_real_escape_string($conn, $_POST['title']);
// $body = mysqli_real_escape_string($conn, $_POST['body']);
// $author = mysqli_real_escape_string($conn, $_POST['author']);
//
// $query = "UPDATE posts SET
//           title='$title',
//           author='$author',
//           body='$body'
//             WHERE id={$update_id}";
//
// if(mysqli_query($conn, $query)){
//   header('Location: '.ROOT_URL.'');
// }else{
//   echo 'ERROR'.mysqli_error($conn);
// }
// }




 ?>
