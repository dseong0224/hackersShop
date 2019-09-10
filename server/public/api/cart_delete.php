<?php
require_once('functions.php');
// if(!INTERNAL) {
//     print("Direct access not allowed");
//     exit();
// }

$jsonBody = getBodyData();

if($jsonBody['id']) {
    $id = $jsonBody['id'];
    if(intval($id) < 1) {
        throw new Exception('id must be greater than 0');
    }
    if(gettype($id) !== "integer") {
        throw new Exception('id must be a number');
    }
} else {
    throw new Exception('id required to add to cart');
} 
if(empty($_SESSION['cartId'])) {
    // print_r(getBodyData([]));
    exit();
} else {
    $cartId = intval($_SESSION['cartId']);
}
$query = "DELETE from `cartItems` WHERE `cartItems`.`productID` = {$id}";
$result = mysqli_query($conn, $query);
if(!$result) {
    throw new Exception('error with query: '. mysqli_error($conn));
}     
?>