<?php

require_once('functions.php');
if(empty(INTERNAL)){
  print("NO DIRECT ACCESS");
  exit();
} 

if(empty($_SESSION['cartId'])) {
  print_r(getBodyData([]));
  print("No cart for user");
  exit();
} else {
  $cartId = intval($_SESSION['cartId']);
}

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

print(json_encode($data));


?>