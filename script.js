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

// Header background change on scroll - UPDATED FOR DARK THEME
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollTop = window.pageYOffset;
    
    if (scrollTop > 100) {
        header.style.background = 'rgba(42, 42, 42, 0.95)'; // Dark gray with transparency
        header.style.backdropFilter = 'blur(20px)';
    } else {
        header.style.background = '#2a2a2a'; // Solid dark gray
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


document.getElementById('email').addEventListener('input', function() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.style.borderColor = emailRegex.test(this.value) ? '#ff7f50' : '#e53e3e';
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



// ===== Contact Form -> Google Sheets (Email + Message only) =====
const GAS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxSIIV1BB_cqRP-jfVs0nNmcurSkfQB5qqiV9KztONSMQp0cKsPlvCDBqzFDVywZLJ8VQ/exec'; // <-- paste your Apps Script Web App URL

(function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const statusEl  = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');

  // helpers
  const $ = (id) => document.getElementById(id);
  const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  function setFieldState(input, valid, msg = '') {
    input.classList.toggle('invalid', !valid);
    input.classList.toggle('valid',   valid);
    const e = form.querySelector(`.error[data-for="${input.id}"]`);
    if (e) e.textContent = msg;
  }

  // live validation for email + message only
  ['email','message'].forEach(id => {
    const el = $(id);
    if (!el) return;
    el.addEventListener('input', () => {
      const v = el.value.trim();
      if (id === 'email') setFieldState(el, emailOk(v), emailOk(v) ? '' : 'Enter a valid email.');
      else setFieldState(el, v.length >= 2, v.length >= 2 ? '' : 'Please write a message.');
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // honeypot
    const hp = form.querySelector('#company');
    if (hp && hp.value.trim() !== '') return;

    const email   = form.email.value.trim();
    const message = form.message.value.trim();

    // gate keepers
    const checks = [
      [ $('email'),   emailOk(email),       'Enter a valid email.' ],
      [ $('message'), message.length >= 2,  'Please write a message.' ],
    ];

    let firstInvalid = null;
    for (const [el, ok, msg] of checks) {
      setFieldState(el, ok, ok ? '' : msg);
      if (!ok && !firstInvalid) firstInvalid = el;
    }
    if (firstInvalid) { firstInvalid.focus(); return; }

    setLoading(true);
    setStatus('Sending…', null);

    try {
   const payload = { email, message, sourcePage: location.href };

// BEFORE (sending payload=JSON)  ❌
// body: new URLSearchParams({ payload: JSON.stringify(payload) }).toString()

// AFTER (send fields directly)  ✅
const res = await fetch(GAS_WEB_APP_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
  body: new URLSearchParams({
    email,
    message,
    sourcePage: location.href
  }).toString()
});


      let ok = false, data = null;
      try {
        const txt = await res.text();
        console.log('GAS response:', txt);
        data = JSON.parse(txt);
        ok = !!(data && data.ok);
      } catch {
        ok = res.ok;
      }

      if (ok) {
        setStatus('Thank you! Your message has been sent.', 'success');
        form.reset();
        ['email','message'].forEach(id => {
          const el = $(id); el.classList.remove('valid','invalid');
          const errEl = form.querySelector(`.error[data-for="${id}"]`);
          if (errEl) errEl.textContent = '';
        });
      } else {
        setStatus(data?.error || 'Submission failed. Please try again.', 'error');
      }
    } catch (err) {
      console.error(err);
      setStatus('Sorry, something went wrong. Please try again later.', 'error');
    } finally {
      setLoading(false);
    }
  });

  function setLoading(isLoading) {
    if (!submitBtn) return;
    submitBtn.disabled = isLoading;
    submitBtn.textContent = isLoading ? 'Sending…' : 'Send Message';
  }

  function setStatus(msg, type) {
    if (!statusEl) return;
    statusEl.textContent = msg || '';
    statusEl.classList.remove('success','error');
    if (type) statusEl.classList.add(type);
  }
})();


