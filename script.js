// Toggle Menu
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x'); // Change icon to 'X' when the menu is active
});

// Typed.js for Home Section
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Graphics Designer', 'Web Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Scroll Reveal Animation
ScrollReveal().reveal('.home-content, .heading', {
    origin: 'top',
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content h1, .about-img', {
    origin: 'left',
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content p, .about-content', {
    origin: 'right',
    distance: '80px',
    duration: 2000,
    delay: 200
});

// Navbar Link Activation on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});
