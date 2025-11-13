// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLeft = document.querySelector('.nav-left');
const navRight = document.querySelector('.nav-right');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        if (navLeft) navLeft.classList.toggle('active');
        if (navRight) navRight.classList.toggle('active');
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-left a, .nav-right a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navLeft) navLeft.classList.remove('active');
            if (navRight) navRight.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLeft?.contains(e.target) &&
            !navRight?.contains(e.target) &&
            !menuToggle.contains(e.target)) {
            if (navLeft) navLeft.classList.remove('active');
            if (navRight) navRight.classList.remove('active');
        }
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
