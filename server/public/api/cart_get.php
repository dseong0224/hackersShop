<?php
require_once('functions.php');
// if(!INTERNAL){
//   print("NO DIRECT ACCESS");
//   exit();
// } 

if(empty($_SESSION['cartId'])) {
  exit();
} else {
  $cartId = intval($_SESSION['cartId']);
}

if (empty($_GET["id"])) {
  $query = "SELECT cartItems.price AS price, 
                  cartItems.count, 
                  products.name AS name, 
                  products.image AS image, 
                  products.id AS id 
            FROM cartItems
            INNER JOIN products ON cartItems.productID = products.id";

  $result = mysqli_query($conn, $query);
  $output = [];
  while($row = mysqli_fetch_assoc($result)) {  
      $output[] = $row;                           
  }

  if(count($output) === 0) {
    print("[]");
    exit();
  } 
  
  print(json_encode($output));
} else {
  // print('an id has been selected');
  $id = $_GET["id"];
  if(!is_numeric($id)){
    throw new Exception('id needs to be a number');
  }
  $query = "SELECT count 
            FROM `cartItems` 
            WHERE productID = {$id} AND cartID = {$cartId}";
  $result = mysqli_query($conn, $query);
  $output = [];
  while($row = mysqli_fetch_assoc($result)) {  
      $output[] = $row;                           
  }  
  print(json_encode($output));
}
?>