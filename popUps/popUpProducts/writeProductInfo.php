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
              artiste='{$artist}',
              album='{$album}',
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
              artiste='{$artist}',
              album='{$album}',
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
              artiste='{$artist}',
              album='{$album}',
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


 ?>
