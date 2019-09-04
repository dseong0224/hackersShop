<?php

// define("INTERNAL",true); 
// to check if cart add is being called from whoever defined INTERNAL constant

require_once('functions.php');
set_exception_handler('handleError');
// set_error_handler('handleError');
// session_start();

startup();
require_once('db_connection.php');

$method = $_SERVER['REQUEST_METHOD'];


if ($method == 'GET') {
  http_response_code(200);
  require_once('cart_get.php');
} else if ($method == 'POST') {

  http_response_code(201);
  require_once('cart_add.php');
  // print($item);
} else if ($method == 'PUT') {
  require_once('cart_update.php');
} else if ($method == 'DELETE') {
  require_once('cart_delete.php');
} else {
  http_response_code(404);
  print(json_encode([
    'error' => 'Not Found',
    'message' => "Cannot $method /api/cart.php"
  ]));
}


?>
