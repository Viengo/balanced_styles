<?php
print_r($_POST);
die();
if (!empty($_POST['url'])) {
    $url = str_replace('/lesson/', '', $_POST['url']);
    $url = intval($url);
    include "./lesson" . $url . ".php";
}else{
    include "./lesson1.php";
}
