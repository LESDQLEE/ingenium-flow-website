const navToggle = document.getElementById('nav-toggle');
const navContent = document.getElementById('nav-content');
const body = document.body;
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');

navToggle.addEventListener('click', function() {
    navContent.classList.toggle('active');
    body.classList.toggle('menu-open');
});

// Close menu when clicking outside (on overlay or main content wrapper)
mobileMenuOverlay.addEventListener('click', function() {
    navContent.classList.remove('active');
    body.classList.remove('menu-open');
});

// Close menu when a navigation link is clicked
navContent.querySelectorAll('a').forEach(link => {
    link.onclick = function() {
        navContent.classList.remove('active');
        body.classList.remove('menu-open');
    }
});