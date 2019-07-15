<?php

header('Content-Type: application/json');
require('functions.php');

set_exception_handler('handleError');
// if (empty($_GET['id'])) {
//   readfile('dummy-products-list.json');
// } else {
//   readfile('dummy-product-details.json');
// }
startUp();

require_once('db_connection.php');

$query = "SELECT * FROM products";

$result = mysqli_query($conn, $query);

if(!$result){
  throw new Exception('error with query: '.mysqli_error($conn));
}

$ouput = [];
while($row = mysqli_fetch_assoc($result)){
  $output[] = $row;
}

print(json_encode($output));
throw new Exception('there was an error');
?>
