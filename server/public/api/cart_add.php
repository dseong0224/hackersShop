<?php
require_once('functions.php');
if(empty(INTERNAL)){
  print("NO DIRECT ACCESS");
  exit();
} 

$item = file_get_contents('php://input');

$jsonBody = getBodyData($item);

if($jsonBody -> id){
  $id = $jsonBody->id;
  if(intval($id) < 0){
    throw new Exception('ID MUST BE GREATER THAN 0');
  }

}

if(!empty($_SESSION['cartId'])) {
  $cartID = $_SESSION['cartId'];
} else {
  $cartID = false;
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
    // $price = $productData[0]['price'];  
}
if(count($productData) === 0) { //check valid id
  throw new Exception('Invalid ID');
}

$transactionQuery = 'START TRANSACTION';
$transaction = mysqli_query($conn, $transActionQuery);
if(!$transaction) {
    throw new Exception('Failed transaction: '. mysqli_error($conn)); //error when transaction fails
}      

if($cartID === false) { //if there is no cart 
  $insertQuery = "INSERT INTO cart 
                  SET cart.`created` = NOW()"; //make cart

  $cart = mysqli_query($conn, $insertQuery);
  if(!$cart) {
      throw new Exception('Failed to create cart: '. mysqli_error($conn));
  }
  if(mysqli_affected_rows($conn) !== 1) {
      throw new Exception('Made changes to more than one row');
  }
  $cartID = mysqli_insert_id($conn);
  $_SESSION['cartId'] = mysqli_insert_id($conn); //store it into both cartId and $_SESSION[‘cartId’]
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
    throw new Exceptioin('Normal');
} else {
    $commit = 'COMMIT';
    mysqli_query($conn, $commit);
}

?>