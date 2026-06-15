<?php
require_once 'function.inc.php';
if (isLoggedIn()) {
    redirect('dashboard.php');
}
$flash = getFlash();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register - GlobeTrek Adventures</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="stylesheet.css">
    <style>.flash{padding:12px;border-radius:6px;margin-bottom:15px}</style>
</head>
<body>

    <nav class="navbar">
        <div class="nav-container">
            <a href="home.html" class="logo"><i class="fas fa-globe-americas"></i> GlobeTrek Adventures</a>
            <ul class="nav-links" id="navLinks">
                <li><a href="home.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="packages.html">Packages</a></li>
                <li><a href="travel-guides.html">Travel Guides</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
            <div class="mobile-toggle" onclick="toggleMobile()"><i class="fas fa-bars"></i></div>
        </div>
    </nav>

    <div class="auth-page">
        <div class="auth-card">
            <h2>Create Account</h2>
            <?php if ($flash): ?>
                <div class="flash" style="background:<?php echo $flash['type']==='error' ? '#fdecea' : '#e6ffed'; ?>; color:<?php echo $flash['type']==='error' ? '#b71c1c' : '#1b5e20'; ?>">
                    <?php echo $flash['message']; ?>
                </div>
            <?php endif; ?>
            <form method="post" action="registration.php">
                <div class="form-row">
                    <label>Full Name *</label>
                    <input type="text" class="form-control" id="regName" name="name" required>
                </div>
                <div class="form-row">
                    <label>Email *</label>
                    <input type="email" class="form-control" id="regEmail" name="email" required>
                </div>
                <div class="form-row">
                    <label>Phone Number</label>
                    <input type="tel" class="form-control" id="regPhone" name="phone">
                </div>
                <div class="form-row">
                    <label>Password *</label>
                    <input type="password" class="form-control" id="regPassword" name="password" required>
                </div>
                <div class="form-row">
                    <label>Confirm Password *</label>
                    <input type="password" class="form-control" id="regConfirm" name="confirm" required>
                </div>
                <button type="submit" class="btn btn-primary" style="width:100%;">Register</button>
            </form>
            <div class="auth-footer">
                Already have an account? <a href="login.php">Login</a>
            </div>
        </div>
    </div>

    <div class="toast" id="toast"></div>
    <script src="main.js"></script>
</body>
</html>
