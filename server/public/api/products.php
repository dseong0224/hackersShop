<?php

require_once('functions.php');

set_exception_handler('handleError');

startUp();

require_once('db_connection.php');

if(!empty($_GET["id"])){
  $id = $_GET["id"];
  if(!is_numeric($id)){
    throw new Exception('id needs to be a number');
  }
  $query = "SELECT p.id, p.name AS productName, p.price, p.shortDescription, p.longDescription, GROUP_CONCAT(i.image) AS images 
  FROM `images` AS i 
  JOIN `products` AS p 
    ON p.`id` = i.`product_id` 
  WHERE p.`id`= $id  
  GROUP BY p.`id`"; 
} else {
  $query = "SELECT id, name, price, shortDescription, image FROM `products`";
}

$result = mysqli_query($conn, $query);

if(!$result){
  throw new Exception('error with query: '.mysqli_error($conn));
}

if(!empty($id)){
  $row = mysqli_fetch_assoc($result);
  $row["images"] = explode(",", $row["images"]);
  $output=$row;
  } else {
    $output = [];
    while($row = mysqli_fetch_assoc($result)){
    $output[] = $row;
    }
  }
  
print(json_encode($output));
?>


