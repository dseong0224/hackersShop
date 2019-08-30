<?php

define("INTERNAL",true);
require_once('functions.php');
session_start();
set_exception_handler('handleError');
startUp();
require_once('db_connection.php');

$method = $_SERVER['REQUEST_METHOD'];

switch($method){
case 'GET': 
http_response_code(200);
require_once('cart_get.php');
break;
case 'POST': 
http_response_code(201);
require_once('cart_post.php');
break;
case 'PUT': 
require_once('cart_update.php');
break;
case 'DELETE': 
require_once('cart_delete.php');
break;
default:
http_response_code(404);
  print(json_encode([
    'error' => 'Not Found',
    'message' => "Cannot $method /api/cart.php"
  ]));
};



?>
