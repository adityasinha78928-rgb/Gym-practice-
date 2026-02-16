// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
        header.style.borderBottomColor = 'rgba(191, 255, 0, 0.3)';
    } else {
        header.style.padding = '20px 0';
        header.style.backgroundColor = 'rgba(10, 10, 10, 0.8)';
        header.style.borderBottomColor = 'rgba(255, 255, 255, 0.1)';
    }
});

// Interactive counters for stats
const stats = document.querySelectorAll('.status-card h3');
const animateStats = () => {
    stats.forEach(stat => {
        const target = parseInt(stat.innerText);
        if (isNaN(target)) return;
        
        let count = 0;
        const speed = target / 50;
        
        const update = () => {
            if (count < target) {
                count += speed;
                stat.innerText = Math.ceil(count) + (stat.innerText.includes('+') ? '+' : '');
                setTimeout(update, 20);
            } else {
                stat.innerText = target + (stat.innerHTML.includes('+') ? '+' : '');
            }
        };
        update();
    });
};

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('hero-status-cards')) {
                // Animate stats once visible
                // animateStats();
            }
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize elements for animation
document.querySelectorAll('.feature-card, .class-card, .pricing-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(el);
});

// Form submission prevent default
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = newsletterForm.querySelector('input');
        if (input.value) {
            alert('Thank you for subscribing! Elevate your game.');
            input.value = '';
        }
    });
}
