<?php

require_once('functions.php');

set_exception_handler('handleError');
// if (empty($_GET['id'])) {
//   readfile('dummy-products-list.json');
// } else {
//   readfile('dummy-product-details.json');
// }
startUp();

require_once('db_connection.php');

if(!empty($_GET["id"])){
  $id = $_GET["id"];
  if(!is_numeric($id)){
    throw new Exception('id needs to be a number');
  }
  $query = "SELECT * FROM `products` WHERE `id`=".$id;
} else {
  $query = "SELECT id, name, price, image, shortDescription FROM `products`";
}

$result = mysqli_query($conn, $query);

if(!$result){
  throw new Exception('error with query: '.mysqli_error($conn));
}

$ouput = [];
while($row = mysqli_fetch_assoc($result)){
  $output[] = $row;
}

print(json_encode($output));
?>
