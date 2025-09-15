/* ANS Hirings - JavaScript Functions */

// Mobile menu toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header background change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollTop = window.pageYOffset;
    
    if (scrollTop > 100) {
        header.style.background = 'rgba(102, 126, 234, 0.95)';
        header.style.backdropFilter = 'blur(20px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        header.style.backdropFilter = 'blur(10px)';
    }
    
    // Show/hide scroll to top button
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (scrollTop > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections for animations
document.querySelectorAll('.section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Observe service cards and testimonials
document.querySelectorAll('.service-card, .testimonial, .stat').forEach(item => {
    item.classList.add('fade-in');
    observer.observe(item);
});

// Test WhatsApp function
function testWhatsApp() {
    const testMessage = `Hi ANS Hirings!%0A%0AThis is a test message from your website contact form.`;
    const whatsappUrl = `https://wa.me/919569884340?text=${testMessage}`;
    console.log('Test WhatsApp URL:', whatsappUrl);
    window.open(whatsappUrl, '_blank');
}

// Form submission handler
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Create WhatsApp message
    const message = `Hi ANS Hirings!%0A%0AName: ${data.name}%0AEmail: ${data.email}%0APhone: ${data.phone}%0AExperience: ${data.experience}%0AMessage: ${data.message || 'No additional message'}`;
    
    // Open WhatsApp with the message (replace 919XXXXXXXXX with your actual WhatsApp number)
    window.open(`https://wa.me/919XXXXXXXXX?text=${message}`, '_blank');
    
    // Show success message
    alert('Thank you for your interest! You will be redirected to WhatsApp to complete your inquiry.');
    
    // Reset form
    event.target.reset();
    
    // Optional: Also log the data for your records
    console.log('Form submitted with data:', data);
}

// Add typing animation to hero text
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero h1');
    const originalText = heroTitle.textContent;
    setTimeout(() => {
        typeWriter(heroTitle, originalText, 100);
    }, 500);
});

// Add counter animation to stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + (element.textContent.includes('%') ? '%' : '+');
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + (element.textContent.includes('%') ? '%' : '+');
        }
    }
    updateCounter();
}

// Animate counters when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                if (number > 0) {
                    animateCounter(stat, number);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
});

const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    const speed = 0.5;
    
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * speed}px)`;
    }
});

// Add hover effects to service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(-10px) scale(1)';
    });
});

// Form validation
document.getElementById('name').addEventListener('input', function() {
    this.style.borderColor = this.value.length >= 2 ? '#667eea' : '#e53e3e';
});

document.getElementById('email').addEventListener('input', function() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.style.borderColor = emailRegex.test(this.value) ? '#667eea' : '#e53e3e';
});

document.getElementById('phone').addEventListener('input', function() {
    const phoneRegex = /^[+]?[\d\s-()]{10,}$/;
    this.style.borderColor = phoneRegex.test(this.value) ? '#667eea' : '#e53e3e';
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add search functionality (for future enhancement)
function addSearchFunctionality() {
    // This can be implemented later for searching through services or testimonials
    console.log('Search functionality ready for implementation');
}

// Add dark mode toggle (for future enhancement)
function toggleDarkMode() {
    // This can be implemented later
    console.log('Dark mode toggle ready for implementation');
}

// Initialize all functions
document.addEventListener('DOMContentLoaded', function() {
    addSearchFunctionality();
    console.log('ANS Hirings website loaded successfully!');
});