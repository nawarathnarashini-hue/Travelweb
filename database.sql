
# try root with the password you set
mysql -u root -p
# enter: Rashini@1

CREATE DATABASE IF NOT EXISTS globetrek_db CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

-- create a dedicated DB user
CREATE USER IF NOT EXISTS 'sitetravel'@'localhost' IDENTIFIED BY 'Rashini@1';
GRANT ALL PRIVILEGES ON globetrek_db.* TO 'sitetravel'@'localhost';
FLUSH PRIVILEGES;

# from folder where database.sql exists, or give full path
mysql -u sitetravel -p globetrek_db < database.sql
# enter: Rashini@1
-- GlobeTrek Adventures Database
CREATE DATABASE IF NOT EXISTS globetrek_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE globetrek_db;

-- Users Table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(20),
    password VARCHAR(255) NOT NULL,
    role ENUM('customer','staff','admin') DEFAULT 'customer',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Packages Table
CREATE TABLE packages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    destination VARCHAR(100) NOT NULL,
    duration INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    original_price DECIMAL(10,2),
    rating DECIMAL(2,1) DEFAULT 4.5,
    reviews INT DEFAULT 0,
    image VARCHAR(255),
    badge VARCHAR(50),
    description TEXT,
    hotel TEXT,
    transport TEXT,
    activities TEXT,
    status ENUM('active','inactive') DEFAULT 'active'
);

-- Bookings Table
CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    ref VARCHAR(20) UNIQUE,
    package_name VARCHAR(100),
    destination VARCHAR(100),
    travel_date DATE,
    travelers INT,
    total DECIMAL(10,2),
    status ENUM('pending','confirmed','cancelled','completed') DEFAULT 'pending',
    requests TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Inquiries Table
CREATE TABLE inquiries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    subject VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    status ENUM('new','replied','pending') DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample packages
INSERT INTO packages (name, destination, duration, price, original_price, rating, reviews, image, badge, description, hotel, transport, activities) VALUES
('Bali Adventure', 'Bali, Indonesia', 7, 999.00, 1299.00, 4.8, 234, 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800', 'Popular', 'Experience the magic of Bali with temple visits, rice terrace walks, and beach relaxation.', '4-star resorts in Ubud and Seminyak', 'Private AC vehicle, fast boat to Nusa Penida', 'Temple visits, cooking class, snorkeling, spa'),
('Maldives Escape', 'Malé, Maldives', 5, 1200.00, 1500.00, 4.9, 189, 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800', 'Luxury', 'Ultimate luxury island getaway with overwater villa stay and world-class diving.', '5-star Overwater Villa Resort', 'Speedboat transfers', 'Snorkeling, diving, spa, sunset cruise'),
('Dubai Luxury Tour', 'Dubai, UAE', 5, 1800.00, 2200.00, 4.7, 312, 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800', 'Premium', 'Experience the glamour of Dubai with desert safari, Burj Khalifa, and luxury shopping.', '5-star Downtown Dubai Hotel', 'Luxury private vehicle', 'Desert safari, city tour, mosque visit, shopping'),
('Sri Lanka Heritage Tour', 'Colombo, Sri Lanka', 10, 850.00, 1100.00, 4.8, 456, 'https://images.unsplash.com/photo-1588258525935-4b626b604b6e?w=800', 'Best Value', 'Discover ancient cities, tea plantations, wildlife, and pristine beaches.', 'Boutique hotels and eco-lodges', 'Private vehicle with driver-guide', 'Safari, hiking, cultural sites, whale watching'),
('Thailand Beach Holiday', 'Phuket, Thailand', 7, 750.00, 950.00, 4.6, 378, 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800', 'Trending', 'Island hopping in Phuket with Phi Phi islands, James Bond island, and vibrant nightlife.', '4-star Beach Resort', 'Speedboat, private vehicle', 'Island hopping, snorkeling, elephant sanctuary, food tour');