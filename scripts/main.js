document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    // Toggle Mobile Menu
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Simple animation for bars
        const bars = mobileMenu.querySelectorAll('.bar');
        bars[0].style.transform = navLinks.classList.contains('active') ? 'rotate(-45deg) translate(-5px, 6px)' : 'none';
        bars[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
        bars[2].style.transform = navLinks.classList.contains('active') ? 'rotate(45deg) translate(-5px, -6px)' : 'none';
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                
                const bars = mobileMenu.querySelectorAll('.bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    });

    // Smooth scroll for hero buttons (optional as CSS handles it, but good for manual control)
    const heroBtns = document.querySelectorAll('.hero-btns a');
    heroBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetId = btn.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Compensate for header height
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
