<?php
// session_start();
// require_once 'db.inc.php';
// require_once 'function.inc.php';
// 
// if (!isset($_SESSION['user_id'])) {
//     header('Location: login.html');
//     exit();
// }
// 
// $role = $_SESSION['user_role'] ?? 'customer';
// $name = $_SESSION['user_name'] ?? 'User';
// 
// For now, simulate with localStorage in JS, but PHP should handle real auth
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard - GlobeTrek Adventures</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="stylesheet.css">
</head>
<body>

    <nav class="navbar">
        <div class="nav-container">
            <a href="home.html" class="logo"><i class="fas fa-globe-americas"></i> GlobeTrek Adventures</a>
            <ul class="nav-links" id="navLinks">
                <li><a href="home.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="packages.html">Packages</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
            <div class="nav-auth" id="navUser" style="display:flex;">
                <span id="userName" style="margin-right:10px; font-weight:600;"></span>
                <button class="btn btn-outline" onclick="logout()">Logout</button>
            </div>
            <div class="mobile-toggle" onclick="toggleMobile()"><i class="fas fa-bars"></i></div>
        </div>
    </nav>

    <!-- CUSTOMER DASHBOARD -->
    <section id="customer-dashboard" class="dashboard-layout" style="display:none;">
        <div class="sidebar">
            <div class="sidebar-user">
                <div class="sidebar-avatar"><i class="fas fa-user"></i></div>
                <h4 id="custName">Customer</h4>
                <p style="opacity:0.7; font-size:0.9rem;">Traveler</p>
            </div>
            <ul class="sidebar-menu">
                <li><a href="#" class="active" onclick="showDashTab('cust-overview', this)"><i class="fas fa-home"></i> Overview</a></li>
                <li><a href="#" onclick="showDashTab('cust-bookings', this)"><i class="fas fa-suitcase"></i> My Bookings</a></li>
                <li><a href="#" onclick="showDashTab('cust-inquiries', this)"><i class="fas fa-envelope"></i> Inquiries</a></li>
                <li><a href="#" onclick="showDashTab('cust-profile', this)"><i class="fas fa-user-cog"></i> Profile</a></li>
            </ul>
        </div>
        <div class="main-content">
            <div class="dashboard-header">
                <h2>Customer Dashboard</h2>
                <a href="packages.html" class="btn btn-primary"><i class="fas fa-plus"></i> New Booking</a>
            </div>
            
            <div id="cust-overview" class="dash-tab active">
                <div class="stats-cards">
                    <div class="stat-card">
                        <div class="stat-icon blue"><i class="fas fa-suitcase"></i></div>
                        <div class="stat-info"><h4>3</h4><p>Total Bookings</p></div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon green"><i class="fas fa-check-circle"></i></div>
                        <div class="stat-info"><h4>2</h4><p>Confirmed</p></div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon orange"><i class="fas fa-clock"></i></div>
                        <div class="stat-info"><h4>1</h4><p>Pending</p></div>
                    </div>
                </div>
                <div class="content-card">
                    <div class="content-card-header"><h3>Recent Bookings</h3></div>
                    <div class="content-card-body">
                        <div class="table-responsive">
                            <table class="table">
                                <thead><tr><th>Ref</th><th>Package</th><th>Date</th><th>Travelers</th><th>Status</th><th>Total</th></tr></thead>
                                <tbody>
                                    <tr><td>#GT-24001</td><td>Bali Adventure</td><td>2025-07-15</td><td>2</td><td><span class="status-badge status-confirmed">Confirmed</span></td><td>$1,998</td></tr>
                                    <tr><td>#GT-24015</td><td>Maldives Escape</td><td>2025-08-20</td><td>2</td><td><span class="status-badge status-pending">Pending</span></td><td>$2,400</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="cust-bookings" class="dash-tab" style="display:none;">
                <div class="content-card">
                    <div class="content-card-header"><h3>All Bookings</h3></div>
                    <div class="content-card-body">
                        <div class="table-responsive">
                            <table class="table">
                                <thead><tr><th>Ref</th><th>Package</th><th>Travel Date</th><th>Status</th><th>Actions</th></tr></thead>
                                <tbody id="custBookingsTable"></tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="cust-inquiries" class="dash-tab" style="display:none;">
                <div class="content-card">
                    <div class="content-card-header"><h3>Inquiry History</h3></div>
                    <div class="content-card-body">
                        <div class="table-responsive">
                            <table class="table">
                                <thead><tr><th>Date</th><th>Subject</th><th>Status</th></tr></thead>
                                <tbody>
                                    <tr><td>2025-05-20</td><td>Custom Bali Itinerary</td><td><span class="status-badge status-confirmed">Replied</span></td></tr>
                                    <tr><td>2025-04-10</td><td>Group Discount Query</td><td><span class="status-badge status-pending">Pending</span></td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="cust-profile" class="dash-tab" style="display:none;">
                <div class="content-card">
                    <div class="content-card-header"><h3>Profile Settings</h3></div>
                    <div class="content-card-body">
                        <form onsubmit="event.preventDefault(); showToast('Profile updated!');">
                            <div class="form-row">
                                <label>Full Name</label>
                                <input type="text" class="form-control" value="John Doe">
                            </div>
                            <div class="form-row">
                                <label>Email</label>
                                <input type="email" class="form-control" value="john@example.com">
                            </div>
                            <div class="form-row">
                                <label>Phone</label>
                                <input type="tel" class="form-control" value="+94 77 123 4567">
                            </div>
                            <button type="submit" class="btn btn-primary">Update Profile</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- STAFF DASHBOARD -->
    <section id="staff-dashboard" class="dashboard-layout" style="display:none;">
        <div class="sidebar">
            <div class="sidebar-user">
                <div class="sidebar-avatar" style="background:var(--warning);"><i class="fas fa-briefcase"></i></div>
                <h4>Staff Member</h4>
                <p style="opacity:0.7; font-size:0.9rem;">Travel Agent</p>
            </div>
            <ul class="sidebar-menu">
                <li><a href="#" class="active" onclick="showDashTab('staff-overview', this)"><i class="fas fa-home"></i> Dashboard</a></li>
                <li><a href="#" onclick="showDashTab('staff-bookings', this)"><i class="fas fa-suitcase"></i> Bookings</a></li>
                <li><a href="#" onclick="showDashTab('staff-inquiries', this)"><i class="fas fa-envelope"></i> Inquiries</a></li>
                <li><a href="#" onclick="showDashTab('staff-packages', this)"><i class="fas fa-box"></i> Packages</a></li>
            </ul>
        </div>
        <div class="main-content">
            <div class="dashboard-header">
                <h2>Staff Dashboard</h2>
                <span style="color:var(--gray);">Today: June 9, 2025</span>
            </div>
            
            <div id="staff-overview" class="dash-tab active">
                <div class="stats-cards">
                    <div class="stat-card">
                        <div class="stat-icon blue"><i class="fas fa-suitcase"></i></div>
                        <div class="stat-info"><h4>156</h4><p>Total Bookings</p></div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon orange"><i class="fas fa-clock"></i></div>
                        <div class="stat-info"><h4>23</h4><p>Pending</p></div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon green"><i class="fas fa-check-circle"></i></div>
                        <div class="stat-info"><h4>128</h4><p>Confirmed</p></div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon red"><i class="fas fa-envelope"></i></div>
                        <div class="stat-info"><h4>45</h4><p>New Inquiries</p></div>
                    </div>
                </div>
                <div class="content-card">
                    <div class="content-card-header"><h3>Pending Bookings</h3></div>
                    <div class="content-card-body">
                        <div class="table-responsive">
                            <table class="table">
                                <thead><tr><th>Ref</th><th>Customer</th><th>Package</th><th>Date</th><th>Amount</th><th>Actions</th></tr></thead>
                                <tbody>
                                    <tr><td>#GT-24015</td><td>Jane Smith</td><td>Maldives Escape</td><td>2025-08-20</td><td>$2,400</td><td><button class="btn btn-success btn-sm" onclick="showToast('Booking confirmed!')">Confirm</button></td></tr>
                                    <tr><td>#GT-24018</td><td>Robert Brown</td><td>Dubai Luxury</td><td>2025-09-10</td><td>$3,500</td><td><button class="btn btn-success btn-sm" onclick="showToast('Booking confirmed!')">Confirm</button></td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="staff-bookings" class="dash-tab" style="display:none;">
                <div class="content-card">
                    <div class="content-card-header"><h3>All Bookings</h3></div>
                    <div class="content-card-body">
                        <div class="table-responsive">
                            <table class="table">
                                <thead><tr><th>Ref</th><th>Customer</th><th>Package</th><th>Status</th><th>Actions</th></tr></thead>
                                <tbody id="staffBookingsTable"></tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="staff-inquiries" class="dash-tab" style="display:none;">
                <div class="content-card">
                    <div class="content-card-header"><h3>Customer Inquiries</h3></div>
                    <div class="content-card-body">
                        <div class="table-responsive">
                            <table class="table">
                                <thead><tr><th>Name</th><th>Subject</th><th>Date</th><th>Status</th><th>Actions</th></tr></thead>
                                <tbody>
                                    <tr><td>Alice Johnson</td><td>Custom Tour Request</td><td>2025-06-08</td><td><span class="status-badge status-pending">New</span></td><td><button class="btn btn-primary btn-sm">Reply</button></td></tr>
                                    <tr><td>Mark Wilson</td><td>Price Inquiry</td><td>2025-06-07</td><td><span class="status-badge status-pending">New</span></td><td><button class="btn btn-primary btn-sm">Reply</button></td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="staff-packages" class="dash-tab" style="display:none;">
                <div class="content-card">
                    <div class="content-card-header"><h3>Manage Packages</h3><button class="btn btn-primary btn-sm">Add Package</button></div>
                    <div class="content-card-body">
                        <div class="table-responsive">
                            <table class="table">
                                <thead><tr><th>Package</th><th>Destination</th><th>Price</th><th>Status</th><th>Actions</th></tr></thead>
                                <tbody id="staffPackagesTable"></tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ADMIN DASHBOARD -->
    <section id="admin-dashboard" class="dashboard-layout" style="display:none;">
        <div class="sidebar">
            <div class="sidebar-user">
                <div class="sidebar-avatar" style="background:var(--danger);"><i class="fas fa-user-shield"></i></div>
                <h4>Administrator</h4>
                <p style="opacity:0.7; font-size:0.9rem;">System Admin</p>
            </div>
            <ul class="sidebar-menu">
                <li><a href="#" class="active" onclick="showDashTab('admin-overview', this)"><i class="fas fa-chart-line"></i> Analytics</a></li>
                <li><a href="#" onclick="showDashTab('admin-users', this)"><i class="fas fa-users"></i> Users</a></li>
                <li><a href="#" onclick="showDashTab('admin-staff', this)"><i class="fas fa-user-tie"></i> Staff</a></li>
                <li><a href="#" onclick="showDashTab('admin-reports', this)"><i class="fas fa-file-alt"></i> Reports</a></li>
            </ul>
        </div>
        <div class="main-content">
            <div class="dashboard-header">
                <h2>Admin Dashboard</h2>
                <span style="color:var(--gray);">System Overview</span>
            </div>
            
            <div id="admin-overview" class="dash-tab active">
                <div class="stats-cards">
                    <div class="stat-card">
                        <div class="stat-icon blue"><i class="fas fa-users"></i></div>
                        <div class="stat-info"><h4>1,245</h4><p>Total Users</p></div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon green"><i class="fas fa-user-tie"></i></div>
                        <div class="stat-info"><h4>12</h4><p>Staff Members</p></div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon orange"><i class="fas fa-suitcase"></i></div>
                        <div class="stat-info"><h4>856</h4><p>Total Bookings</p></div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon red"><i class="fas fa-envelope"></i></div>
                        <div class="stat-info"><h4>234</h4><p>Total Inquiries</p></div>
                    </div>
                </div>
                <div class="content-card">
                    <div class="content-card-header"><h3>Recent Activity</h3></div>
                    <div class="content-card-body">
                        <div class="table-responsive">
                            <table class="table">
                                <thead><tr><th>Time</th><th>Activity</th><th>User</th><th>Details</th></tr></thead>
                                <tbody>
                                    <tr><td>10:45 AM</td><td>New Booking</td><td>john@example.com</td><td>Bali Adventure - $999</td></tr>
                                    <tr><td>09:30 AM</td><td>New Inquiry</td><td>sarah@example.com</td><td>Custom tour request</td></tr>
                                    <tr><td>Yesterday</td><td>User Registration</td><td>mike@example.com</td><td>New customer account</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="admin-users" class="dash-tab" style="display:none;">
                <div class="content-card">
                    <div class="content-card-header"><h3>Manage Customers</h3></div>
                    <div class="content-card-body">
                        <div class="table-responsive">
                            <table class="table">
                                <thead><tr><th>Name</th><th>Email</th><th>Bookings</th><th>Joined</th><th>Actions</th></tr></thead>
                                <tbody>
                                    <tr><td>John Doe</td><td>john@example.com</td><td>3</td><td>2024-01-15</td><td><button class="btn btn-danger btn-sm" onclick="showToast('User deleted')">Delete</button></td></tr>
                                    <tr><td>Jane Smith</td><td>jane@example.com</td><td>5</td><td>2023-08-20</td><td><button class="btn btn-danger btn-sm" onclick="showToast('User deleted')">Delete</button></td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="admin-staff" class="dash-tab" style="display:none;">
                <div class="content-card">
                    <div class="content-card-header"><h3>Manage Staff</h3><button class="btn btn-primary btn-sm">Add Staff</button></div>
                    <div class="content-card-body">
                        <div class="table-responsive">
                            <table class="table">
                                <thead><tr><th>Name</th><th>Role</th><th>Email</th><th>Status</th><th>Actions</th></tr></thead>
                                <tbody>
                                    <tr><td>Amal Perera</td><td>Senior Agent</td><td>amal@globetrek.lk</td><td><span class="status-badge status-confirmed">Active</span></td><td><button class="btn btn-outline btn-sm">Edit</button></td></tr>
                                    <tr><td>Nimali Silva</td><td>Booking Manager</td><td>nimali@globetrek.lk</td><td><span class="status-badge status-confirmed">Active</span></td><td><button class="btn btn-outline btn-sm">Edit</button></td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="admin-reports" class="dash-tab" style="display:none;">
                <div class="content-card">
                    <div class="content-card-header"><h3>Booking Reports</h3></div>
                    <div class="content-card-body">
                        <div class="table-responsive">
                            <table class="table">
                                <thead><tr><th>Month</th><th>Bookings</th><th>Revenue</th><th>Growth</th></tr></thead>
                                <tbody>
                                    <tr><td>June 2025</td><td>142</td><td>$128,400</td><td style="color:var(--success);">+12%</td></tr>
                                    <tr><td>May 2025</td><td>128</td><td>$115,200</td><td style="color:var(--success);">+8%</td></tr>
                                    <tr><td>April 2025</td><td>118</td><td>$98,600</td><td style="color:var(--danger);">-3%</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="toast" id="toast"></div>
    <script src="main.js"></script>
    <script>
        // Show correct dashboard based on localStorage role (for demo)
        // In production, PHP should handle this server-side
        document.addEventListener('DOMContentLoaded', () => {
            const user = localStorage.getItem('globetrek_user');
            let role = 'customer';
            if(user) {
                const u = JSON.parse(user);
                role = u.role || 'customer';
            }
            
            document.getElementById('customer-dashboard').style.display = role === 'customer' ? 'grid' : 'none';
            document.getElementById('staff-dashboard').style.display = role === 'staff' ? 'grid' : 'none';
            document.getElementById('admin-dashboard').style.display = role === 'admin' ? 'grid' : 'none';
        });
    </script>
</body>
</html>