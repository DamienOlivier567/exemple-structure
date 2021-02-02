<?php

define('ERROR', 0);
define('SUCCESS', 1);

/**
 * Display a simple message en top
 * @param $message
 * @param string $type
 */
function displayMessage($message, $type =SUCCESS){
    if (isset($message)){
        $message = strip_tags(base64_decode($message));
        if ($message){
            $class = $type === ERROR ? 'error' : 'success';
            echo '<div> class ="'.$class.'">'.$message.'</div>';
        }
    }
}
