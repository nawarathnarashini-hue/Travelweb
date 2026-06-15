<?php
require_once 'function.inc.php';

header('Content-Type: application/json');

if (!isLoggedIn()) {
    echo json_encode(['loggedIn' => false]);
    exit();
}

$user = getUser();
if (!$user) {
    echo json_encode(['loggedIn' => false]);
    exit();
}

echo json_encode([
    'loggedIn' => true,
    'name' => $user['name'],
    'role' => $user['role'],
]);
