<?php

require('config/config.php');
require('config/db.php');

/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
/* check if server is alive */
if (mysqli_ping($conn)) {
    printf ("Our connection is ok!\n");
} else {
    printf ("Error: %s\n", mysqli_error($conn));
}
// necessary if a large csv file
set_time_limit(0);
ini_set('memory_limit', '2048M');

// $link = mysqli_connect('localhost', 'root', 'asdfgh', 'Test');


$csv = array();
$err = array();

// function checkIfProdExist($id) {
//    $exist = 0;
//
//    $rxlt = mysqli_query($link, “SELECT `id` FROM `Steve` WHERE `id` LIKE ‘” . $id . “’;“);
//    $prodcheck = mysqli_fetch_object($rxlt);
//
//    foreach ($prodcheck as $k => $v) {
//        if (intval($v[‘id’]) > 0)
//            $exist = 1;
//    }
//
//    return $exist;
// }

if (isset($_FILES['csv'])) {
    $name = $_FILES['csv']['name'];
    $ext = explode('.', $_FILES['csv']['name']);
    $ext = strtolower(end($ext));
    $type = $_FILES['csv']['type'];
    $tmpName = $_FILES['csv']['tmp_name'];

// check the file is a csv
    if ($ext === 'csv') {
        if (($file = fopen($tmpName, 'r')) !== FALSE) {
            $row = 0;

            // while (($data = fgetcsv($file)) !== FALSE) {
            //     $csv[] = $data;
            // }


             while(($data = fgetcsv($file, 8000, ',')) !== FALSE) {
              // number of fields in the csv
              // $col_count = count($data);

              // get the values from the csv
              $csv[] = $data;

              // inc the row
              $row++;
              }
              // var_dump ($csv);
            fclose($file);
        }
    }
}

function clean_datas_prior_insert($row) {

   foreach ($row as $k => $val){
       $row[$k] = clean_data_prior_insert($val);
       echo 'k: '.$k.'<br';
       echo 'val: '.$val.'<br';
     }

   return $row;
}

function clean_data_prior_insert($val) {

   $val[0] = trim($val[0]);
   $temp = str_replace('"', '', $val[0]);
   // $temp = trim($val[0], ";");
   // $temp = trim($temp, '"');

   // echo 'temp!: '.$temp;
   $arr = explode(';', $temp);
   // if (!is_numeric($val))
   //     $val[0] = mysqli_real_escape_string($conn, $val[0]);

   return $arr;
}

$count = 0;
// Main import logic
foreach ($csv as $row => $value) {
      var_dump($value);

    // $value = clean_data_prior_insert($value);

    // $artist_album = explode(' - ', $value[2]);
    // $floor = $value[17];
    // $basement = 0;
    // if($value[17] > 1){
    //   $floor = 1;
    //   $basement = $value[17] -1;
    // }
    // $table = 'none';
    // if($value[1][0] == 'L' && $value[1][1] == 'P') $table = 'lp';
    // else if($value[1][0] == 'C' && $value[1][1] == 'D') $table = 'cd';
    // else $table = 'unused';

    //if($table != 'none'){
      $query = "INSERT INTO `customers` SET `id`= 0 ,
      `address1`= '{$value[0]}' ,
      `city`= '{$value[1]}' ,
      `province`= '{$value[2]}' ,
      `postalcode`= '{$value[3]}' ,
      `mainphone`= '{$value[4]}' ,
      `website`= '{$value[5]}' ,
      `phone2`= '{$value[6]}' ,
      `phone1`= '{$value[7]}' ,
      `lastname`= '{$value[8]}' ,
      `firstname`= '{$value[9]}' ,
      `email`= '{$value[10]}' ,
      `company`= '{$value[11]}' ,
      `discount`= '{$value[12]}' ,
      `country`= '{$value[13]}';";

      // $query = "INSERT INTO `{$table}` SET `id`= 0 ,
      // `original_prodcode`= '{$value[1]}' ,
      // `description`= '{$value[2]}' ,
      // `{$table}_artist` = '{$artist_album[0]}',
      // `{$table}_album` = '{$artist_album[1]}',
      // `vcond`= '{$value[3]}' ,
      // `scond`= '{$value[4]}' ,
      // `pressinfo`= '{$value[5]}' ,
      // `catno`= '{$value[6]}' ,
      // `country`= '{$value[7]}' ,
      // `class`= '{$value[8]}' ,
      // `sell`= '{$value[9]}' ,
      // `family`= '{$value[10]}' ,
      // `fileunder`= '{$value[11]}' ,
      // `altcatno`= '{$value[12]}' ,
      // `cost`= '{$value[13]}' ,
      // `stars`= '{$value[14]}' ,
      // `upc`= '{$value[15]}' ,
      // `artist`= '{$value[16]}' ,
      // `qty`= '{$value[17]}' ,
      // `inv_floor` = '{$floor}',
      // `inv_basement` = '{$basement}',
      // `pid`= '{$value[18]}' ,
      // `lastsale`= '{$value[19]}' ,
      // `modif`= '{$value[20]}' ,
      // `liquidation`= '{$value[21]}' ,
      // `grade`= '{$value[22]}' ,
      // `lien`= '{$value[23]}' ,
      // `annee`= '{$value[24]}' ,
      // `date`= '{$value[25]}' ,
      // `stock`= '{$value[26]}' ,
      // `reserved`= '{$value[27]}' ,
      // `date_lastreserved`= '{$value[28]}' ,
      // `date_firstreceived`= '{$value[29]}' ,
      // `date_lastreceived`= '{$value[30]}' ,
      // `jours_vente`= '{$value[31]}' ,
      // `derniere_vente`= '{$value[32]}' ,
      // `qty_jan2017`= '{$value[33]}' ,
      // `sales`= '{$value[34]}' ,
      // `dnr`= '{$value[35]}' ,
      // `skull`= '{$value[36]}' ,
      // `special_req`= '{$value[37]}' ,
      // `derniereupdate`= '{$value[38]}' ;";

      // echo 'query: '.$query.'<br><br><br>';

      if (!mysqli_query($conn, $query))  $err[] = $value;
   }


    // echo "<br>[$query]";
    // echo 'row: '.$row.'<br>';
    // echo 'id: '.$value[1].'<br><br>';
    // echo 'prodcode: '.$value[2].'<br><br>';
    // echo 'description: '.$value[3].'<br><br>';
//}
if (count($err) > 0) {
    echo "<h2>Voici les erreurs : </h2>";
    echo "<pre>" . print_r($err, true) . "</pre>";
    echo mysqli_error($conn);
}
?>
<form action="enterdb.php" method="post" enctype="multipart/form-data">
    <input type="file" name="csv" value="" />
    <input type="submit" name="submit" value="Save" />
</form>
