document.getElementById('mobile-menu').addEventListener('click', function() {
    var nav = document.getElementById('nav-menu');
    nav.classList.toggle('active');
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
