<?php

require_once('functions.php');

set_exception_handler('handleError');

startup();

require_once('db_connection.php');
// print_r($_GET);

if (empty($_GET["id"])) {
  // print_r($_GET["id"]);

$query = "SELECT id, name, price, shortDescription, image FROM products";

$result = mysqli_query($conn, $query);

  if (!$result) {
    throw new Exception('error with query: '.mysqli_error($conn));
  }

  $output = [];

  while ($row = mysqli_fetch_assoc($result)) {
  $output[] = $row;
  }

} else {

$id = $_GET["id"];
  
  if(!is_numeric($id)){
    throw new Exception('id needs to be a number');
  }
  
  $query = "SELECT p.id, 
                   p.name AS name, 
                   p.price, 
                   p.shortDescription, 
                   p.longDescription, 
                   GROUP_CONCAT(i.image) AS images 
              FROM images AS i 
              JOIN products AS p 
                ON p.id = i.product_id 
             WHERE p.id= {$id}  
          GROUP BY p.id"; 

$result = mysqli_query($conn, $query);

  if (!$result) {
    throw new Exception('error with query: '.mysqli_error($conn));
  }

  $output = [];

  while ($row = mysqli_fetch_assoc($result)) {
  $row["images"] = explode(",", $row["images"]);
  $output[] = $row;
  }
}

  if(count($output)===0){
    throw new Exception('Invalid ID:'. $id);
  }

  // print( json_encode($output));

  if(count($output) === 1) {
    print(json_encode($output[0])); 
    // index 0 because this returns an array with one object inside
  } else {
    print( json_encode($output));
  }
?>


