<?php

if(!function_exists('handleError')){
  function handleError($error){
    http_response_code(500);
    $output = [
      'success' => false,
      'error' => $error->getMessage()
    ];
    $json_output = json_encode($output);
    print($json_output);
  }
}
function startup(){
  header('Content-Type: application/json');
}
function getBodyData(){
  // $input = json_decode("[{'id':'1','name':'Cooler Master Sk621','price':'11999','shortDescription':'60% Mechanical Keyboard with Cherry MX Low Profile Switches and Brushed Aluminum Design','image':'https:\/\/images-na.ssl-images-amazon.com\/images\/I\/61gIn%2Bsi2XL._SL1200_.jpg'}]");
  $input = json_decode(file_get_contents('php://input'));

  print_r($input);
  return $input;
}

?>