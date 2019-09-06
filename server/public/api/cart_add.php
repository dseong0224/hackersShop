<?php

require_once('functions.php');
if(!INTERNAL) {
    print("Direct access not allowed");
    exit();
}

$jsonBody = getBodyData();

if($jsonBody['id']) {
    echo($jsonBody['id']);
    $id = $jsonBody['id'];
    if(intval($id) < 1) {
        throw new Exception('id must be greater than 0');
    }
    if(gettype($id) !== "integer") {
        throw new Exception('id must be a number');
    }
} else {
    echo('no id in jsonBody');
    throw new Exception('id required to add to cart');
} 


if(empty($_SESSION['cartId'])) {
    echo('cartID empty');
    $cartID = false;
} else {
    echo('cartID not empty');
    $cartID = $_SESSION['cartId'];
}

$query = "SELECT products.price 
          FROM products 
          WHERE products.id = {$id}"; //make query
$result = mysqli_query($conn, $query);
if(!$result) { // make sure result is valid
  throw new Exception('error with query: '. mysqli_error($conn));
}      
$productData = [];
while($row = mysqli_fetch_assoc($result)) { //send query to db
    $productData[] = $row;    
    $price = $productData[0]['price'];  
}
if(count($productData) === 0) { //check valid id
  throw new Exception('Invalid ID');
}
$transActionQuery = 'START TRANSACTION';
$transaction = mysqli_query($conn, $transActionQuery);
if(!$transaction) {
    throw new Exception('Failed transaction: '. mysqli_error($conn)); //error when transaction fails
}      
if($cartID === false) { //if there is no cart 
    echo('if there is no cart id');
  $insertQuery = "INSERT INTO cart 
                  SET cart.created = NOW()"; //make cart
  $cart = mysqli_query($conn, $insertQuery);
  if(!$cart) {
      throw new Exception('Failed to create cart: '. mysqli_error($conn));
  }
  if(mysqli_affected_rows($conn) !== 1) {
      throw new Exception('Made changes to more than one row');
  }
  $cartID = mysqli_insert_id($conn);
  $_SESSION['cartId'] = $cartID; //store it into both cartId and $_SESSION[‘cartId’]
}
$cartItemQuery = "INSERT INTO cartItems 
                  SET cartItems.count = 1,
                      cartItems.productID = {$id}, 
                      cartItems.price = {$price}, 
                      cartItems.added = NOW(), 
                      cartItems.cartID = {$cartID} 
                  ON DUPLICATE KEY UPDATE cartItems.count = cartItems.count + 1"; //query to add items
$cartItem = mysqli_query($conn, $cartItemQuery);
if(!$cartItem) {
    throw new Exception('error with cartItem: '. mysqli_error($conn)); //check if item was added
}
if(mysqli_affected_rows($conn) < 1) {
    $rollback = 'ROLLBACK';
    mysqli_query($conn, $rollback);
    throw new Exception('Normal');
} else {
    $commit = 'COMMIT';
    mysqli_query($conn, $commit);
}

?>