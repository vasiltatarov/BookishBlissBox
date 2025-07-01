// Intersection Observer за fade-in анимации
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Наблюдение на всички елементи с класа fade-in
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Smooth scroll за навигацията
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

// Динамично оцветяване на CTA бутоните при hover
document.querySelectorAll('.cta-button, .box-card').forEach(element => {
    element.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.05)';
    });

    element.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });
});

// Добавяне на малко интерактивност към testimonials
document.querySelectorAll('.testimonial').forEach(testimonial => {
    testimonial.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.3s ease';
    });

    testimonial.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });
});