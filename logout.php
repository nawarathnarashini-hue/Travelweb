<?php
require_once 'function.inc.php';
if (session_status() === PHP_SESSION_NONE) session_start();
session_unset();
session_destroy();
redirect('login.php');
?>
