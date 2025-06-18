const togglebtn = document.querySelector('.side-btn');
const sidebar = document.getElementById('sidebar');

// Create sidebar toggle button for mobile
function createMobileToggle() {
    if (window.innerWidth <= 1024) {
        const mobileToggle = document.createElement('button');
        mobileToggle.className = 'sidebar-toggle';
        mobileToggle.innerHTML = '☰';
        mobileToggle.onclick = toggleMobileSidebar;
        document.body.appendChild(mobileToggle);
        
        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'sidebar-overlay';
        overlay.onclick = closeMobileSidebar;
        document.body.appendChild(overlay);
    }
}

function toggleMobileSidebar() {
    sidebar.classList.toggle('active');
    document.querySelector('.sidebar-overlay').classList.toggle('active');
}

function closeMobileSidebar() {
    sidebar.classList.remove('active');
    document.querySelector('.sidebar-overlay').classList.remove('active');
}

function togglesidebar() {
    if (window.innerWidth > 1024) {
        // Desktop behavior
        sidebar.classList.toggle('close');
        togglebtn.classList.toggle('rotate');
    } else {
        // Mobile behavior
        toggleMobileSidebar();
    }
}

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        // Remove mobile elements on desktop
        const mobileToggle = document.querySelector('.sidebar-toggle');
        const overlay = document.querySelector('.sidebar-overlay');
        if (mobileToggle) mobileToggle.remove();
        if (overlay) overlay.remove();
        sidebar.classList.remove('active');
    } else {
        // Add mobile elements on mobile
        if (!document.querySelector('.sidebar-toggle')) {
            createMobileToggle();
        }
    }
});

// Initialize mobile toggle on load
document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 1024) {
        createMobileToggle();
    }
});

// Active links for sidebar
const navLinks = document.querySelectorAll("#sidebar ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(nav => nav.parentElement.classList.remove("active"));
        link.parentElement.classList.add("active");
        
        // Close mobile sidebar when link is clicked
        if (window.innerWidth <= 1024) {
            closeMobileSidebar();
        }
    });
});



