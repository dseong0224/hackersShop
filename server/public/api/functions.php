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
if(!function_exists('startup')){
  function startup(){
    header('Content-Type: application/json');
  }
}
if(!function_exists('getBodyData')){
  function getBodyData(){
    $input = json_decode(file_get_contents('php://input'), true);

    print_r($input);
    return $input;
  }
}

?>