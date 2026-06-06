// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  });

  // Close menu when a link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.style.display = 'none';
    });
  });
}

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = {
      name: contactForm.querySelector('input[type="text"]').value,
      email: contactForm.querySelector('input[type="email"]').value,
      service: contactForm.querySelector('select').value,
      message: contactForm.querySelector('textarea').value,
    };

    // Here you would typically send this data to a server
    console.log('Form submitted:', data);
    
    // Show success message
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '✓ Message sent!';
    submitBtn.style.background = 'linear-gradient(135deg, #2d7a7a 0%, #1e4d52 100%)';
    
    // Reset form
    contactForm.reset();
    
    // Revert button after 3 seconds
    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.style.background = '';
    }, 3000);
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    navbar.style.boxShadow = '0 2px 12px rgba(15, 20, 25, 0.1)';
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    navbar.style.boxShadow = '';
  }
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll(
  '.service-card, .industry-card, .usp-card, .step, ' +
  '.testimonial-card, .team-member, .pricing-card, .stat'
).forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
  observer.observe(el);
});

// Button hover effects
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-4px)';
  });
  
  btn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// Service card hover effects
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-8px)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// Responsive menu
const navLinksMenu = document.querySelector('.nav-links');
if (navLinksMenu) {
  // Add flex display on small screens
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  
  function handleMediaChange(e) {
    if (e.matches) {
      // Mobile view
      navLinksMenu.style.display = 'none';
      navLinksMenu.style.position = 'absolute';
      navLinksMenu.style.top = '100%';
      navLinksMenu.style.left = '0';
      navLinksMenu.style.right = '0';
      navLinksMenu.style.backgroundColor = 'white';
      navLinksMenu.style.flexDirection = 'column';
      navLinksMenu.style.gap = '0';
      navLinksMenu.style.padding = '16px 0';
    } else {
      // Desktop view
      navLinksMenu.style.display = 'flex';
      navLinksMenu.style.position = 'static';
      navLinksMenu.style.backgroundColor = 'transparent';
      navLinksMenu.style.flexDirection = 'row';
    }
  }
  
  mediaQuery.addListener(handleMediaChange);
  handleMediaChange(mediaQuery);
}

// Counter animation for statistics
function animateValue(element, start, end, duration) {
  let startTimestamp = null;
  
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    
    element.textContent = value + (element.textContent.includes('+') ? '+' : '');
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  
  window.requestAnimationFrame(step);
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.animated) {
      const statNumber = entry.target.querySelector('.stat-number');
      const text = statNumber.textContent;
      const match = text.match(/(\d+)/);
      
      if (match) {
        entry.target.dataset.animated = 'true';
        animateValue(statNumber, 0, parseInt(match[1]), 2000);
      }
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat').forEach(stat => {
  statsObserver.observe(stat);
});

// Parallax effect on hero section
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero-background');
  if (hero) {
    const scrollPosition = window.scrollY;
    hero.style.transform = `translateY(${scrollPosition * 0.5}px)`;
  }
});

// Cursor-tracking animation for hero section
const canvas = document.getElementById('cursorCanvas');
const heroSection = document.querySelector('.hero');

if (canvas && heroSection && window.innerWidth >= 1024) {
  const ctx = canvas.getContext('2d');
  let mouseX = 0;
  let mouseY = 0;
  let isInHero = false;
  let lastMouseMoveTime = 0;

  // Set canvas size
  function resizeCanvas() {
    const rect = heroSection.getBoundingClientRect();

    canvas.width = Math.round(rect.width);
    canvas.height = Math.round(rect.height);
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
  }
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Track mouse movement
  document.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
    isInHero = e.clientX >= rect.left && e.clientX <= rect.right && 
               e.clientY >= rect.top && e.clientY <= rect.bottom;
    lastMouseMoveTime = performance.now();
  });

  // Particle system
  const particles = [];

  class Particle {
    constructor(x, y) {
      this.x = x + (Math.random() - 0.5) * 100;
      this.y = y + (Math.random() - 0.5) * 100;
      this.vx = (Math.random() - 0.5) * 2;
      this.vy = (Math.random() - 0.5) * 2;
      this.radius = Math.random() * 2 + 1;
      this.life = 1;
      this.maxLife = Math.random() * 100 + 200;
      this.age = 0;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.vx *= 0.98;
      this.vy *= 0.98;
      this.age++;
      this.life = 1 - (this.age / this.maxLife);
    }

    draw(ctx) {
      const alpha = Math.max(this.life * 0.6, 0);
      const radius = Math.max(this.radius * this.life, 0);
      if (radius <= 0 || alpha <= 0) return;
      ctx.globalAlpha = alpha;
      ctx.fillStyle = '#1e7a8f';
      ctx.beginPath();
      ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Animation loop
  function animate() {
    if (!ctx || canvas.width === 0 || canvas.height === 0) {
      requestAnimationFrame(animate);
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;

    if (isInHero) {
      // Create new particles while the cursor is actively moving, and keep the particle count capped.
      const canSpawn = performance.now() - lastMouseMoveTime < 180;
      if (canSpawn && particles.length < 90 && Math.random() < 0.18) {
        particles.push(new Particle(mouseX, mouseY));
      }

      // Draw connection lines
      ctx.strokeStyle = `rgba(30, 122, 143, 0.15)`;
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.globalAlpha = (1 - distance / 100) * 0.2;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      ctx.globalAlpha = 1;
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw(ctx);
      }

      // Remove dead particles and keep the array bounded
      for (let i = particles.length - 1; i >= 0; i--) {
        if (particles[i].life <= 0) {
          particles.splice(i, 1);
        }
      }
      if (particles.length > 100) {
        particles.splice(0, particles.length - 100);
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

// Add loading state to form
if (contactForm) {
  contactForm.addEventListener('submit', function() {
    const submitBtn = this.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.6';
  });
}

console.log('Greymatter website loaded successfully ✓');
