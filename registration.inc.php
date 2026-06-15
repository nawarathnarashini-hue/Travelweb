<?php
require_once 'function.inc.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = sanitize($_POST['name']);
    $email = sanitize($_POST['email']);
    $phone = sanitize($_POST['phone']);
    $password = $_POST['password'];
    $confirm = $_POST['confirm'];
    
    $errors = [];
    
    if (empty($name) || strlen($name) < 3) {
        $errors[] = "Name must be at least 3 characters";
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Please enter a valid email";
    }
    if (strlen($password) < 6) {
        $errors[] = "Password must be at least 6 characters";
    }
    if ($password !== $confirm) {
        $errors[] = "Passwords do not match";
    }
    
    $stmt = $pdo->prepare("SELECT id FROM users WHERE email = ?");
    $stmt->execute([$email]);
    if ($stmt->fetch()) {
        $errors[] = "Email already registered";
    }
    
    if (!empty($errors)) {
        setFlash('error', implode('<br>', $errors));
        redirect('registration.html');
    }
    
    $hash = password_hash($password, PASSWORD_DEFAULT);
    $stmt = $pdo->prepare("INSERT INTO users (full_name, email, phone, password, role) VALUES (?, ?, ?, ?, 'customer')");
    
    if ($stmt->execute([$name, $email, $phone, $hash])) {
        setFlash('success', 'Account created! Please login.');
        redirect('login.html');
    } else {
        setFlash('error', 'Registration failed. Try again.');
        redirect('registration.html');
    }
}
?>