<?php

if (empty($_POST['url'])) {
    include "./www/index.html";
} else {
    $url = str_replace('/lesson/', '', $_POST['url']);
    $url = intval($url);
    include "./lesson" . $url . ".php";
}
