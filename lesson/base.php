<?php

if (!empty($_POST['url']) && intval($_POST['url']) >= 1) {
    $url = intval($_POST['url']);
    include "./lesson" . $url . ".php";
} else {
    include "./lesson1.php";
}
