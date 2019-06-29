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
  $genre = $_POST['genre'];
  $numOnWall = $_POST['numOnWall'];
  $vcond = $_POST['vinylCon'];
  $scond = $_POST['sleeveCon'];
  // $numWall = $_POST['numWall'];
    //still need to fix genre and condition

  $query = '';

  if($code[1] == 'N'){
    $code[0] = 0;
    $code[1] = 0;

    $query = "UPDATE `ln` SET
              description = '{$description}'
              ln_artist='{$artist}',
              ln_album='{$album}',
              family='{$label}',
              fileunder='{$fileUnder}',
              pressinfo='{$press_info}',
              class = '{$genre}'
              -- upc = {$upc}
                WHERE id={$code}";

  } else if($code[1] == 'P'){
    $code[0] = 0;
    $code[1] = 0;

    $query = "UPDATE `lp` SET
              lp_artist='{$artist}',
              lp_album='{$album}',
              country='{$country}',
              catno='{$catalogueNo}',
              altcatno='{$altCatalogueNo}',
              family='{$label}',
              fileunder='{$fileUnder}',
              pressinfo='{$press_info}',
              class = '{$genre}',
              scond='{$scond}',
              vcond='{$vcond}'
                WHERE id={$code}";

  }else if($code[1] == 'D'){ //we are dealing with CDs
    $code[0] = 0;
    $code[1] = 0;

    $query = "UPDATE `cd` SET
              cd_artist='{$artist}',
              cd_album='{$album}',
              -- catno='{$catalogueNo}',
              -- altcatno='{$altCatalogueNo}',
              fileunder='{$fileUnder}',
              -- pressinfo='{$press_info}',
              class = '{$genre}',
              upc = {$upc}
                WHERE id={$code}";
  }

  if(mysqli_query($conn, $query)){
     header('Location: productsPopUp.html');
  }else{
    echo 'ERROR'.mysqli_error($conn);
  }
  mysqli_close($conn);

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
