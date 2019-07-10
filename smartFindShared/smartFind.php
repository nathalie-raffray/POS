<?php
require('../config/config.php');
require('../config/db.php');

if(isset($_POST['query'])){ //&& isset($_POST['offset'])&& isset($_POST['count'])
  //$query = mysqli_real_escape_string($conn, $_POST['query']);
  $orderClause = '';
  if(isset($_POST['orderby']) && isset($_POST['ascdesc'])){
    $orderby = $_POST['orderby'];
    $ascdesc = $_POST['ascdesc'];
  }
  if($orderby != ''){
    $orderClause = " ORDER BY {$orderby} {$ascdesc}";
  }

  $query = $_POST['query'];
  $query = $query.$orderClause;
  $sendBack = new \stdClass(); //this the class we will convert to JSON to send back to the client
  $sendBack->error = 'None';

  //$limitClause = " LIMIT {$offset}, {$count}"; NEED TO GET RID OF LIMIT
  $orderClause = " ORDER BY ";

  $result = mysqli_query($conn, $query);
  // $responseClient=array();
  if($result != false){
    $post = mysqli_fetch_all($result, MYSQLI_ASSOC); //, MYSQLI_ASSOC
  }

  if($result == false){ //if query failed
    $sendBack->error = 'Invalid Query.';
    $sendBack->data = '';
  }

  else if($post == NULL){
    $sendBack->error = 'No results found.';
    $sendBack->data = '';
    mysqli_free_result($result);
  }

  else if($post != NULL && $result!= false){ //else
    $sendBack->data = json_encode($post);
    mysqli_free_result($result);
  }

  mysqli_close($conn);
  echo json_encode($sendBack);


}


 ?>
