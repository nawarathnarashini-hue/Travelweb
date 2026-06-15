// DATA
const packages = [
    {
        id: 1,
        name: "Bali Adventure",
        destination: "Bali, Indonesia",
        duration: 7,
        price: 999,
        originalPrice: 1299,
        rating: 4.8,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
        badge: "Popular",
        description: "Experience the magic of Bali with temple visits, rice terrace walks, and beach relaxation.",
        itinerary: [
            {day: "Day 1", title: "Arrival in Denpasar", desc: "Airport pickup, transfer to Ubud, welcome dinner"},
            {day: "Day 2", title: "Ubud Exploration", desc: "Monkey Forest, Tegalalang Rice Terrace, traditional dance"},
            {day: "Day 3", title: "Temple Tour", desc: "Tirta Empul, Besakih Temple, holy spring purification"},
            {day: "Day 4", title: "Beach Day", desc: "Transfer to Seminyak, sunset at Tanah Lot"},
            {day: "Day 5", title: "Nusa Penida", desc: "Day trip to Kelingking Beach and Angel's Billabong"},
            {day: "Day 6", title: "Cooking Class", desc: "Traditional Balinese cooking experience"},
            {day: "Day 7", title: "Departure", desc: "Spa treatment, airport transfer"}
        ],
        hotel: "4-star resorts in Ubud and Seminyak",
        transport: "Private AC vehicle, fast boat to Nusa Penida",
        activities: "Temple visits, cooking class, snorkeling, spa"
    },
    {
        id: 2,
        name: "Maldives Escape",
        destination: "Malé, Maldives",
        duration: 5,
        price: 1200,
        originalPrice: 1500,
        rating: 4.9,
        reviews: 189,
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800",
        badge: "Luxury",
        description: "Ultimate luxury island getaway with overwater villa stay and world-class diving.",
        itinerary: [
            {day: "Day 1", title: "Arrival", desc: "Speedboat transfer to resort, check-in to overwater villa"},
            {day: "Day 2", title: "Marine Life", desc: "Guided snorkeling tour, dolphin watching cruise"},
            {day: "Day 3", title: "Island Hopping", desc: "Visit local island, cultural experience, sandbank picnic"},
            {day: "Day 4", title: "Wellness", desc: "Spa treatment, yoga session, sunset cruise"},
            {day: "Day 5", title: "Departure", desc: "Breakfast, departure transfer"}
        ],
        hotel: "5-star Overwater Villa Resort",
        transport: "Speedboat transfers",
        activities: "Snorkeling, diving, spa, sunset cruise"
    },
    {
        id: 3,
        name: "Dubai Luxury Tour",
        destination: "Dubai, UAE",
        duration: 5,
        price: 1800,
        originalPrice: 2200,
        rating: 4.7,
        reviews: 312,
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
        badge: "Premium",
        description: "Experience the glamour of Dubai with desert safari, Burj Khalifa, and luxury shopping.",
        itinerary: [
            {day: "Day 1", title: "Arrival", desc: "Airport pickup, Dubai Marina dinner cruise"},
            {day: "Day 2", title: "City Tour", desc: "Burj Khalifa, Dubai Mall, fountain show"},
            {day: "Day 3", title: "Desert Safari", desc: "Dune bashing, camel ride, Bedouin camp dinner"},
            {day: "Day 4", title: "Abu Dhabi", desc: "Sheikh Zayed Mosque, Louvre Abu Dhabi"},
            {day: "Day 5", title: "Departure", desc: "Gold Souk visit, airport transfer"}
        ],
        hotel: "5-star Downtown Dubai Hotel",
        transport: "Luxury private vehicle",
        activities: "Desert safari, city tour, mosque visit, shopping"
    },
    {
        id: 4,
        name: "Sri Lanka Heritage Tour",
        destination: "Colombo, Sri Lanka",
        duration: 10,
        price: 850,
        originalPrice: 1100,
        rating: 4.8,
        reviews: 456,
        image: "https://images.unsplash.com/photo-1588258525935-4b626b604b6e?w=800",
        badge: "Best Value",
        description: "Discover ancient cities, tea plantations, wildlife, and pristine beaches.",
        itinerary: [
            {day: "Day 1", title: "Negombo", desc: "Arrival, beach relaxation, fish market visit"},
            {day: "Day 2", title: "Sigiriya", desc: "Climb Lion Rock, village experience"},
            {day: "Day 3", title: "Polonnaruwa", desc: "Ancient city ruins, cycling tour"},
            {day: "Day 4", title: "Kandy", desc: "Temple of the Tooth, cultural dance"},
            {day: "Day 5", title: "Nuwara Eliya", desc: "Tea plantation visit, scenic train ride"},
            {day: "Day 6", title: "Ella", desc: "Nine Arch Bridge, Little Adam's Peak hike"},
            {day: "Day 7", title: "Yala Safari", desc: "Jeep safari, leopard spotting"},
            {day: "Day 8", title: "Mirissa", desc: "Whale watching, beach time"},
            {day: "Day 9", title: "Galle", desc: "Fort walking tour, turtle hatchery"},
            {day: "Day 10", title: "Departure", desc: "Colombo city tour, airport transfer"}
        ],
        hotel: "Boutique hotels and eco-lodges",
        transport: "Private vehicle with driver-guide",
        activities: "Safari, hiking, cultural sites, whale watching"
    },
    {
        id: 5,
        name: "Thailand Beach Holiday",
        destination: "Phuket, Thailand",
        duration: 7,
        price: 750,
        originalPrice: 950,
        rating: 4.6,
        reviews: 378,
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800",
        badge: "Trending",
        description: "Island hopping in Phuket with Phi Phi islands, James Bond island, and vibrant nightlife.",
        itinerary: [
            {day: "Day 1", title: "Phuket", desc: "Arrival, Patong Beach exploration"},
            {day: "Day 2", title: "Phi Phi Islands", desc: "Speedboat tour, Maya Bay, snorkeling"},
            {day: "Day 3", title: "James Bond Island", desc: "Kayaking in Phang Nga Bay"},
            {day: "Day 4", title: "Elephant Sanctuary", desc: "Ethical elephant experience, Big Buddha"},
            {day: "Day 5", title: "Old Phuket", desc: "Old Town food tour, weekend market"},
            {day: "Day 6", title: "Free Day", desc: "Beach relaxation or optional spa day"},
            {day: "Day 7", title: "Departure", desc: "Airport transfer"}
        ],
        hotel: "4-star Beach Resort",
        transport: "Speedboat, private vehicle",
        activities: "Island hopping, snorkeling, elephant sanctuary, food tour"
    }
];

const destinations = [
    {name: "Bali", country: "Indonesia", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600", tours: 12},
    {name: "Maldives", country: "Maldives", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600", tours: 8},
    {name: "Dubai", country: "UAE", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600", tours: 6},
    {name: "Sri Lanka", country: "Sri Lanka", image: "https://images.unsplash.com/photo-1588258525935-4b626b604b6e?w=600", tours: 15},
    {name: "Thailand", country: "Thailand", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600", tours: 10},
    {name: "Singapore", country: "Singapore", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600", tours: 5}
];

let selectedPackage = null;
let currentSlide = 0;

// Loader
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if(loader) loader.classList.add('hidden');
});

// Mobile Nav
function toggleMobile() {
    document.getElementById('navLinks')?.classList.toggle('active');
}

// Toast
function showToast(msg) {
    const toast = document.getElementById('toast');
    if(!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// Scroll
window.onscroll = function() {
    const btn = document.getElementById('backToTop');
    if(!btn) return;
    if (window.pageYOffset > 300) btn.classList.add('visible');
    else btn.classList.remove('visible');
};
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Render Destinations
function renderDestinations() {
    const grid = document.getElementById('destinationsGrid');
    if(!grid) return;
    grid.innerHTML = destinations.map(d => `
        <div class="destination-card" onclick="window.location.href='packages.html'">
            <img src="${d.image}" alt="${d.name}" loading="lazy">
            <div class="destination-overlay">
                <h3>${d.name}</h3>
                <p>${d.country} • ${d.tours} Tours</p>
            </div>
        </div>
    `).join('');
}

// Package Card
function createPackageCard(p) {
    return `
        <div class="package-card" onclick="openPackageModal(${p.id})">
            <div class="package-image" style="background-image:url('${p.image}')">
                <span class="package-badge">${p.badge}</span>
            </div>
            <div class="package-content">
                <div class="package-meta">
                    <span><i class="fas fa-map-marker-alt"></i> ${p.destination}</span>
                    <span><i class="fas fa-clock"></i> ${p.duration} Days</span>
                </div>
                <h3 class="package-title">${p.name}</h3>
                <p style="color:var(--gray); font-size:0.9rem; margin-bottom:10px;">${p.description.substring(0, 80)}...</p>
                <div class="package-price">
                    <span class="price-tag">$${p.price}</span>
                    <span class="price-original">$${p.originalPrice}</span>
                </div>
                <div class="package-footer">
                    <span class="rating">${'★'.repeat(Math.floor(p.rating))}${p.rating % 1 ? '½' : ''} <small>(${p.reviews})</small></span>
                    <button class="btn btn-primary btn-sm">View Details</button>
                </div>
            </div>
        </div>
    `;
}

function renderFeaturedPackages() {
    const grid = document.getElementById('featuredPackages');
    if(!grid) return;
    grid.innerHTML = packages.slice(0, 3).map(p => createPackageCard(p)).join('');
}

function renderAllPackages() {
    const grid = document.getElementById('allPackages');
    if(!grid) return;
    grid.innerHTML = packages.map(p => createPackageCard(p)).join('');
}

// Filters
function filterPackages() {
    const dest = document.getElementById('filterDest')?.value.toLowerCase() || '';
    const dur = document.getElementById('filterDuration')?.value || '';
    const price = document.getElementById('filterPrice')?.value || '';
    
    const filtered = packages.filter(p => {
        const matchDest = !dest || p.destination.toLowerCase().includes(dest) || p.name.toLowerCase().includes(dest);
        const matchDur = !dur || p.duration == dur;
        const matchPrice = !price || p.price <= parseInt(price);
        return matchDest && matchDur && matchPrice;
    });
    
    const grid = document.getElementById('allPackages');
    if(!grid) return;
    
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-state" style="grid-column:1/-1;">
                <i class="fas fa-search" style="font-size:3rem; margin-bottom:20px; color:#dee2e6;"></i>
                <h3>No packages found</h3>
                <p>Try adjusting your search criteria</p>
            </div>
        `;
    } else {
        grid.innerHTML = filtered.map(p => createPackageCard(p)).join('');
    }
}

function resetFilters() {
    const fd = document.getElementById('filterDest');
    const fdu = document.getElementById('filterDuration');
    const fp = document.getElementById('filterPrice');
    if(fd) fd.value = '';
    if(fdu) fdu.value = '';
    if(fp) fp.value = '';
    renderAllPackages();
}

function heroSearch() {
    const dest = document.getElementById('heroDest')?.value || '';
    const dur = document.getElementById('heroDuration')?.value || '';
    const price = document.getElementById('heroPrice')?.value || '';
    
    localStorage.setItem('hero_filter_dest', dest);
    localStorage.setItem('hero_filter_dur', dur);
    localStorage.setItem('hero_filter_price', price);
    window.location.href = 'packages.html';
}

// Package Details Modal
function openPackageModal(id) {
    selectedPackage = packages.find(p => p.id === id);
    if(!selectedPackage) return;
    
    const modal = document.getElementById('packageModal');
    const hero = document.getElementById('pkgModalHero');
    const header = document.getElementById('pkgModalHeader');
    const main = document.getElementById('pkgModalMain');
    const booking = document.getElementById('pkgModalBooking');
    
    if(!modal) return;
    
    hero.style.backgroundImage = `linear-gradient(to top, rgba(0,0,0,0.7), transparent), url('${selectedPackage.image}')`;
    header.innerHTML = `
        <span class="package-badge" style="position:static; display:inline-block; margin-bottom:10px;">${selectedPackage.badge}</span>
        <h1 style="font-size:2rem; color:#fff; margin-bottom:10px;">${selectedPackage.name}</h1>
        <p style="color:#fff;"><i class="fas fa-map-marker-alt"></i> ${selectedPackage.destination} • <i class="fas fa-clock"></i> ${selectedPackage.duration} Days • <span style="color:var(--warning);">${'★'.repeat(Math.floor(selectedPackage.rating))}</span> ${selectedPackage.rating}</p>
    `;
    
    main.innerHTML = `
        <h3 style="font-size:1.3rem; margin-bottom:15px; padding-bottom:10px; border-bottom:2px solid var(--primary); display:inline-block;">Overview</h3>
        <p style="margin-bottom:25px; line-height:1.8; color:var(--gray);">${selectedPackage.description}</p>
        
        <h3 style="font-size:1.3rem; margin-bottom:15px; padding-bottom:10px; border-bottom:2px solid var(--primary); display:inline-block;">Travel Itinerary</h3>
        ${selectedPackage.itinerary.map(day => `
            <div class="itinerary-item" style="display:flex; gap:20px; margin-bottom:20px; padding-left:20px; border-left:2px solid #e9ecef; position:relative;">
                <div style="position:absolute; left:-6px; top:0; width:10px; height:10px; border-radius:50%; background:var(--primary);"></div>
                <div>
                    <div style="font-weight:700; color:var(--primary); margin-bottom:5px;">${day.day}</div>
                    <h4 style="margin-bottom:5px; font-size:1.1rem;">${day.title}</h4>
                    <p style="color:var(--gray); font-size:0.95rem;">${day.desc}</p>
                </div>
            </div>
        `).join('')}
        
        <h3 style="font-size:1.3rem; margin-top:25px; margin-bottom:15px; padding-bottom:10px; border-bottom:2px solid var(--primary); display:inline-block;">What's Included</h3>
        <div class="features-grid" style="margin-top:15px; grid-template-columns:repeat(auto-fill, minmax(200px, 1fr));">
            <div class="feature-card" style="text-align:left; padding:20px;">
                <h4><i class="fas fa-hotel" style="color:var(--primary); margin-right:10px;"></i>Hotel</h4>
                <p style="margin-top:10px; color:var(--gray); font-size:0.9rem;">${selectedPackage.hotel}</p>
            </div>
            <div class="feature-card" style="text-align:left; padding:20px;">
                <h4><i class="fas fa-bus" style="color:var(--primary); margin-right:10px;"></i>Transport</h4>
                <p style="margin-top:10px; color:var(--gray); font-size:0.9rem;">${selectedPackage.transport}</p>
            </div>
            <div class="feature-card" style="text-align:left; padding:20px;">
                <h4><i class="fas fa-hiking" style="color:var(--primary); margin-right:10px;"></i>Activities</h4>
                <p style="margin-top:10px; color:var(--gray); font-size:0.9rem;">${selectedPackage.activities}</p>
            </div>
        </div>
    `;
    
    booking.innerHTML = `
        <div class="price-row" style="display:flex; justify-content:space-between; margin-bottom:12px; padding-bottom:12px; border-bottom:1px solid #eee;">
            <span>Package Price (per person)</span><span>$${selectedPackage.price}</span>
        </div>
        <div class="price-row" style="display:flex; justify-content:space-between; margin-bottom:12px; padding-bottom:12px; border-bottom:1px solid #eee;">
            <span>Duration</span><span>${selectedPackage.duration} Days</span>
        </div>
        <div class="price-row" style="display:flex; justify-content:space-between; margin-bottom:12px; padding-bottom:12px; border-bottom:1px solid #eee;">
            <span>Original Price</span><span style="text-decoration:line-through;">$${selectedPackage.originalPrice}</span>
        </div>
        <div class="price-row" style="border-top:2px solid #eee; padding-top:15px; display:flex; justify-content:space-between; align-items:center;">
            <span class="price-total" style="font-size:1.3rem; font-weight:700; color:var(--primary);">From $${selectedPackage.price}</span>
            <span style="font-size:0.9rem; color:var(--gray);">per person</span>
        </div>
        <button class="btn btn-primary" style="width:100%; margin-top:20px;" onclick="openBookingModal()">Book Now</button>
    `;
    
    modal.style.display = 'block';
    document.getElementById('modalOverlay')?.classList.add('active');
}

// Modals
function closeModal() {
    document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
    document.getElementById('modalOverlay')?.classList.remove('active');
}

function openBookingModal() {
    document.getElementById('packageModal') && (document.getElementById('packageModal').style.display = 'none');
    
    const modal = document.getElementById('bookingModal');
    if(!modal) return;
    
    const user = localStorage.getItem('globetrek_user');
    if(!user) {
        window.location.href = 'login.html';
        return;
    }
    
    const u = JSON.parse(user);
    document.getElementById('bookPackage').value = selectedPackage ? selectedPackage.name : '';
    document.getElementById('bookName').value = u.name || '';
    document.getElementById('bookEmail').value = u.email || '';
    calcTotal();
    
    modal.style.display = 'block';
    document.getElementById('modalOverlay')?.classList.add('active');
}

function calcTotal() {
    const travelers = parseInt(document.getElementById('bookTravelers')?.value) || 1;
    const price = selectedPackage ? selectedPackage.price : 0;
    const totalEl = document.getElementById('bookTotal');
    if(totalEl) totalEl.textContent = '$' + (travelers * price);
}

function handleBooking(e) {
    e.preventDefault();
    const ref = 'GT-' + Math.floor(10000 + Math.random() * 90000);
    const success = document.getElementById('bookingSuccess');
    const refEl = document.getElementById('bookingRef');
    if(success) success.style.display = 'block';
    if(refEl) refEl.textContent = ref;
    
    setTimeout(() => {
        closeModal();
        showToast('Booking confirmed! Reference: ' + ref);
    }, 2000);
}

// Contact
function handleContact(e) {
    e.preventDefault();
    const success = document.getElementById('contactSuccess');
    if(success) success.style.display = 'block';
    const form = document.getElementById('contactForm');
    if(form) form.reset();
    setTimeout(() => {
        if(success) success.style.display = 'none';
    }, 3000);
}

// Auth
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const pass = document.getElementById('loginPassword').value;
    const isStaff = document.getElementById('roleSelect')?.checked || false;
    
    if (!email.includes('@') || pass.length < 4) {
        alert('Invalid email or password');
        return false;
    }
    
    let role = 'customer';
    if (email.includes('admin')) role = 'admin';
    else if (isStaff || email.includes('staff')) role = 'staff';
    
    const user = {name: email.split('@')[0], email: email, role: role};
    localStorage.setItem('globetrek_user', JSON.stringify(user));
    
    showToast('Welcome back, ' + user.name + '!');
    
    if (role === 'admin') window.location.href = 'admin-dashboard.html';
    else if (role === 'staff') window.location.href = 'staff-dashboard.html';
    else window.location.href = 'index.html';
}

function handleRegister(e) {
    e.preventDefault();
    const pass = document.getElementById('regPassword').value;
    const confirm = document.getElementById('regConfirm').value;
    const email = document.getElementById('regEmail').value;
    
    if (!email.includes('@')) {
        alert('Please enter a valid email');
        return false;
    }
    if (pass.length < 6) {
        alert('Password must be at least 6 characters');
        return false;
    }
    if (pass !== confirm) {
        alert('Passwords do not match');
        return false;
    }
    
    showToast('Account created! Please login.');
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 1500);
}

function logout() {
    localStorage.removeItem('globetrek_user');
    window.location.href = 'index.html';
    showToast('Logged out successfully');
}

// Dashboard Tabs
function showDashTab(tabId, el) {
    document.querySelectorAll('.dash-tab').forEach(t => t.style.display = 'none');
    const target = document.getElementById(tabId);
    if(target) target.style.display = 'block';
    
    document.querySelectorAll('.sidebar-menu a').forEach(a => a.classList.remove('active'));
    if(el) el.classList.add('active');
}

// Testimonials
function moveSlide(dir) {
    const slider = document.getElementById('testimonialSlider');
    if(!slider) return;
    const cards = slider.children;
    currentSlide = (currentSlide + dir + cards.length) % cards.length;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Auto slide testimonials
setInterval(() => {
    if(document.getElementById('testimonialSlider')) moveSlide(1);
}, 5000);

// Init on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    // Update nav auth state
    const user = localStorage.getItem('globetrek_user');
    const navAuth = document.getElementById('navAuth');
    const navUser = document.getElementById('navUser');
    const navDashboard = document.getElementById('navDashboard');
    const userName = document.getElementById('userName');
    const custName = document.getElementById('custName');
    
    if(user && navAuth && navUser) {
        const u = JSON.parse(user);
        navAuth.style.display = 'none';
        navUser.style.display = 'flex';
        if(userName) userName.textContent = u.name;
        if(navDashboard) navDashboard.style.display = 'block';
        if(custName) custName.textContent = u.name;
    }
    
    // Page specific inits
    if(document.getElementById('destinationsGrid')) {
        renderDestinations();
        renderFeaturedPackages();
    }
    if(document.getElementById('allPackages')) {
        renderAllPackages();
        const dest = localStorage.getItem('hero_filter_dest');
        const dur = localStorage.getItem('hero_filter_dur');
        const price = localStorage.getItem('hero_filter_price');
        if(dest && document.getElementById('filterDest')) document.getElementById('filterDest').value = dest;
        if(dur && document.getElementById('filterDuration')) document.getElementById('filterDuration').value = dur;
        if(price && document.getElementById('filterPrice')) document.getElementById('filterPrice').value = price;
        if(dest || dur || price) filterPackages();
        localStorage.removeItem('hero_filter_dest');
        localStorage.removeItem('hero_filter_dur');
        localStorage.removeItem('hero_filter_price');
    }
    if(document.getElementById('recDestinations')) {
        document.getElementById('recDestinations').innerHTML = destinations.map(d => `
            <div class="destination-card" style="height:200px;" onclick="window.location.href='packages.html'">
                <img src="${d.image}" alt="${d.name}">
                <div class="destination-overlay">
                    <h3>${d.name}</h3>
                    <p>${d.country}</p>
                </div>
            </div>
        `).join('');
    }
    
    // Set min date for booking
    const bookDate = document.getElementById('bookDate');
    if(bookDate) {
        const today = new Date().toISOString().split('T')[0];
        bookDate.min = today;
    }
    
    // Populate dashboard tables
    const custTable = document.getElementById('custBookingsTable');
    if(custTable) {
        custTable.innerHTML = `
            <tr><td>#GT-24001</td><td>Bali Adventure</td><td>2025-07-15</td><td><span class="status-badge status-confirmed">Confirmed</span></td><td><button class="btn btn-outline btn-sm">View</button></td></tr>
            <tr><td>#GT-24015</td><td>Maldives Escape</td><td>2025-08-20</td><td><span class="status-badge status-pending">Pending</span></td><td><button class="btn btn-outline btn-sm">View</button></td></tr>
            <tr><td>#GT-23089</td><td>Sri Lanka Heritage</td><td>2024-12-10</td><td><span class="status-badge status-confirmed">Completed</span></td><td><button class="btn btn-outline btn-sm">View</button></td></tr>
        `;
    }
    
    const staffBook = document.getElementById('staffBookingsTable');
    if(staffBook) {
        staffBook.innerHTML = packages.slice(0,3).map((p,i) => `
            <tr><td>#GT-240${i+1}</td><td>Customer ${i+1}</td><td>${p.name}</td><td><span class="status-badge ${i===1?'status-pending':'status-confirmed'}">${i===1?'Pending':'Confirmed'}</span></td><td><button class="btn btn-outline btn-sm">View</button></td></tr>
        `).join('');
    }
    
    const staffPkg = document.getElementById('staffPackagesTable');
    if(staffPkg) {
        staffPkg.innerHTML = packages.map(p => `
            <tr><td>${p.name}</td><td>${p.destination}</td><td>$${p.price}</td><td><span class="status-badge status-confirmed">Active</span></td><td><button class="btn btn-outline btn-sm">Edit</button></td></tr>
        `).join('');
    }
    
    // FAQ
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => {
            q.parentElement.classList.toggle('active');
        });
    });
    
    // Modal overlay click
    const overlay = document.getElementById('modalOverlay');
    if(overlay) {
        overlay.addEventListener('click', function(e) {
            if (e.target === this) closeModal();
        });
    }
});