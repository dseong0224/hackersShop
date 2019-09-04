<?php
try{
  if (!function_exists('session_start')){
    throw new Exception('no session start');
  }
  session_start();
  print_r($_SERVER);
} catch( Exception $e){
  print('got error'); exit();
}
print("sdkfjhsd");
?>