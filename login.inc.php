<?php
require_once 'function.inc.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = sanitize($_POST['email']);
    $password = $_POST['password'];
    
    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch();
    
    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['user_role'] = $user['role'];
        $_SESSION['user_name'] = $user['full_name'];
        
        setFlash('success', 'Welcome back, ' . $user['full_name'] . '!');
        
        if ($user['role'] === 'admin') {
            redirect('dashboard.php');
        } elseif ($user['role'] === 'staff') {
            redirect('dashboard.php');
        } else {
            redirect('home.html');
        }
    } else {
        setFlash('error', 'Invalid email or password');
        redirect('login.html');
    }
}
?>