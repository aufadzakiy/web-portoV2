'use client';

// Interactive Features and Animations
export class PortfolioInteractions {
  constructor() {
    this.init();
  }

  init() {
    this.setupCursorEffects();
    this.setupScrollAnimations();
    this.setupParticleSystem();
    this.setupSmoothScrolling();
    this.setupFormInteractions();
    this.setupThemeTransitions();
    this.setupLoadingAnimations();
  }

  // Cursor Effects
  setupCursorEffects() {
    if (typeof window === 'undefined') return;

    // Icon sources from public/ (choose common tech icons present in the repo)
    const iconSources = [
      '/js-icon.svg',
      '/typescript-icon.svg',
      '/laravel.svg',
      '/next.svg',
      '/python-icon.svg',
      '/tailwind-icon.svg',
      '/flutter-icon.svg',
      '/dart-icon.svg'
    ];

    let lastX = 0;
    let lastY = 0;

    // Lightweight pool to avoid huge DOM growth
    const activeIcons: HTMLElement[] = [];
  // Toggle to enable/disable icon spawning (used when hovering interactive elements)
  let iconsEnabled = true;

    function spawnIcon(x: number, y: number, vx: number, vy: number) {
      if (!iconsEnabled) return;
      const img = document.createElement('img');
      img.src = iconSources[Math.floor(Math.random() * iconSources.length)];
      img.className = 'cursor-icon pointer-events-none';
      img.style.position = 'fixed';
      img.style.left = x + 'px';
      img.style.top = y + 'px';
      img.style.width = '28px';
      img.style.height = '28px';
      img.style.transform = 'translate(-50%, -50%) scale(1)';
      img.style.opacity = '1';
      img.style.zIndex = '9999';
      img.style.transition = 'opacity 400ms linear, transform 600ms cubic-bezier(.2,.8,.2,1)';

      document.body.appendChild(img);
      activeIcons.push(img);

      const lifetime = 900 + Math.random() * 600; // ms
      const start = performance.now();

      function animate(time: number) {
        const t = time - start;
        const progress = Math.min(1, t / lifetime);

        // simple linear movement with slight gravity
        const nx = x + vx * (t / 16);
        const ny = y + vy * (t / 16) + (progress * 10);

        img.style.left = nx + 'px';
        img.style.top = ny + 'px';

        // fade out towards end
        if (progress > 0.7) {
          img.style.opacity = String(1 - (progress - 0.7) / 0.3);
          img.style.transform = `translate(-50%, -50%) scale(${1 + progress * 0.3})`;
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          if (img.parentNode) img.parentNode.removeChild(img);
          const idx = activeIcons.indexOf(img);
          if (idx !== -1) activeIcons.splice(idx, 1);
        }
      }

      requestAnimationFrame(animate);
    }

    // Spawn icons opposite to cursor movement
    const handleMove = (e: MouseEvent) => {
      if (!iconsEnabled) return;
      const x = e.clientX;
      const y = e.clientY;

      const dx = x - lastX;
      const dy = y - lastY;

      // update last
      lastX = x;
      lastY = y;

      const speed = Math.sqrt(dx * dx + dy * dy);

      // Only spawn when moving fast enough to avoid clutter
      if (speed < 2) return;

      // spawn a few icons depending on speed
      const count = Math.min(4, Math.ceil(speed / 8));
      for (let i = 0; i < count; i++) {
        // velocity opposite to movement + slight randomness
        const vx = (-dx / (6 + Math.random() * 6)) + (Math.random() - 0.5) * 2;
        const vy = (-dy / (6 + Math.random() * 6)) + (Math.random() - 0.5) * 2 - 1;
        spawnIcon(x + (Math.random() - 0.5) * 8, y + (Math.random() - 0.5) * 8, vx, vy);
      }

      // safety: limit active icons
      if (activeIcons.length > 60) {
        const removeCount = activeIcons.length - 60;
        for (let i = 0; i < removeCount; i++) {
          const el = activeIcons.shift();
          if (el && el.parentNode) el.parentNode.removeChild(el);
        }
      }
    };

    window.addEventListener('mousemove', handleMove);

    // Also add hover scaling for interactive elements (visual feedback)
    // broaden selector to include links, role=button, inputs, elements with onclick, and common button classes
    const interactiveSelector = 'a[href], button, [role="button"], input[type="button"], input[type="submit"], [onclick], .btn, .link, .nav-link, .tech-chip, .modern-card';
    const hoverElements = document.querySelectorAll(interactiveSelector);

    // Use a counter to avoid flicker when moving quickly between interactive items
    let hoveredCount = 0;

    hoverElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        hoveredCount += 1;
        if (hoveredCount === 1) {
          // first interactive hovered -> disable icons and clear any active icons
          iconsEnabled = false;
          while (activeIcons.length) {
            const el = activeIcons.pop();
            if (el && el.parentNode) el.parentNode.removeChild(el);
          }
        }
      });

      element.addEventListener('mouseleave', () => {
        hoveredCount = Math.max(0, hoveredCount - 1);
        if (hoveredCount === 0) {
          // no interactive elements hovered -> re-enable icons
          iconsEnabled = true;
          const rect = (element as HTMLElement).getBoundingClientRect();
          for (let i = 0; i < 2; i++) {
            const vx = (Math.random() - 0.5) * 2;
            const vy = -Math.random() * 2 - 1;
            spawnIcon(rect.left + rect.width / 2, rect.top + rect.height / 2, vx, vy);
          }
        }
      });
    });
  }

  // Scroll Animations
  setupScrollAnimations() {
    if (typeof window === 'undefined') return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          
          // Stagger animation for child elements
          const children = entry.target.querySelectorAll('.tech-category, .modern-card, .form-group');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate-slide-up');
            }, index * 200);
          });
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('#about, #projects, #contact');
    animatedElements.forEach(element => {
      observer.observe(element);
    });

    // Back to top button
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
          backToTopBtn.classList.add('opacity-100', 'visible');
          backToTopBtn.classList.remove('opacity-0', 'invisible');
        } else {
          backToTopBtn.classList.remove('opacity-100', 'visible');
          backToTopBtn.classList.add('opacity-0', 'invisible');
        }
      });
    }
  }

  // Particle System
  setupParticleSystem() {
    if (typeof window === 'undefined') return;

    const createParticle = (container: Element) => {
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 bg-purple-500/20 rounded-full pointer-events-none';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animation = `float-particle ${3 + Math.random() * 4}s ease-in-out infinite`;
      particle.style.animationDelay = Math.random() * 2 + 's';
      
      container.appendChild(particle);
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 7000);
    };

    const sections = document.querySelectorAll('#hero, #about, #projects, #contact');
    sections.forEach(section => {
      setInterval(() => {
        if (document.visibilityState === 'visible') {
          createParticle(section);
        }
      }, 2000);
    });
  }

  // Smooth Scrolling
  setupSmoothScrolling() {
    if (typeof window === 'undefined') return;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Form Interactions
  setupFormInteractions() {
    if (typeof window === 'undefined') return;

    const formInputs = document.querySelectorAll('.form-input');
    formInputs.forEach(input => {
      // Focus effects
      input.addEventListener('focus', (e: Event) => {
        const target = e.target as HTMLInputElement;
        const parent = target.parentElement;
        if (parent) {
          parent.classList.add('focused');
          // Create ripple effect
          this.createInputRipple(target);
        }
      });

      input.addEventListener('blur', (e: Event) => {
        const target = e.target as HTMLInputElement;
        const parent = target.parentElement;
        if (parent && !target.value) {
          parent.classList.remove('focused');
        }
      });

      // Validation on input
      input.addEventListener('input', (e: Event) => {
        const target = e.target as HTMLInputElement;
        this.validateInput(target);
      });
    });

    // Form submission
    const contactForm = document.getElementById('contact-form') as HTMLFormElement;
    if (contactForm) {
      contactForm.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        this.handleFormSubmission(contactForm);
      });
    }
  }

  createInputRipple(input: HTMLInputElement) {
    const ripple = document.createElement('div');
    ripple.className = 'absolute bottom-0 left-1/2 w-0 h-0.5 bg-purple-600 transition-all duration-300 transform -translate-x-1/2';
    
    if (input.parentElement) {
      input.parentElement.style.position = 'relative';
      input.parentElement.appendChild(ripple);
    }
    
    setTimeout(() => {
      ripple.style.width = '100%';
    }, 10);
    
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 300);
  }

  validateInput(input: HTMLInputElement) {
    const value = input.value.trim();
    const parent = input.parentElement;
    if (!parent) return false;
    
    parent.classList.remove('valid', 'invalid');
    
    let isValid = false;
    
    if (input.type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isValid = emailRegex.test(value);
    } else {
      isValid = value.length > 0;
    }
    
    if (value.length > 0) {
      parent.classList.add(isValid ? 'valid' : 'invalid');
    }
    
    return isValid;
  }

  async handleFormSubmission(form: HTMLFormElement) {
    const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    if (!submitBtn) return;
    
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <span class="flex items-center justify-center space-x-2">
        <div class="spinner"></div>
        <span>Mengirim...</span>
      </span>
    `;
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success message
      this.showNotification('Pesan berhasil dikirim! Terima kasih telah menghubungi saya.', 'success');
      form.reset();
      
    } catch (error) {
      this.showNotification('Terjadi kesalahan. Silakan coba lagi.', 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  }

  showNotification(message: string, type: string = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300 ${
      type === 'success' ? 'bg-green-500 text-white' : 
      type === 'error' ? 'bg-red-500 text-white' : 
      'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 10);
    
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 4000);
  }

  // Theme Transitions
  setupThemeTransitions() {
    if (typeof window === 'undefined') return;

    const themeToggle = document.getElementById('theme-switcher');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        // Add transition class to body
        document.body.style.transition = 'all 0.3s ease';
        
        setTimeout(() => {
          document.body.style.transition = '';
        }, 300);
      });
    }
  }

  // Loading Animations
  setupLoadingAnimations() {
    if (typeof window === 'undefined') return;

    // Page load animation
    window.addEventListener('load', () => {
      const loadingElements = document.querySelectorAll('.animate-on-load');
      loadingElements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('animate-fade-in');
        }, index * 100);
      });
    });
  }

  // Mouse trail effect for tech section
  setupMouseTrail() {
    if (typeof window === 'undefined') return;

    const aboutSection = document.querySelector('#about');
    if (!aboutSection) return;

    let trails: HTMLElement[] = [];

    aboutSection.addEventListener('mousemove', (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const trail = document.createElement('div');
      trail.className = 'mouse-trail';
      trail.style.left = mouseEvent.pageX + 'px';
      trail.style.top = mouseEvent.pageY + 'px';
      aboutSection.appendChild(trail);
      
      trails.push(trail);
      
      if (trails.length > 20) {
        const oldTrail = trails.shift();
        if (oldTrail && oldTrail.parentNode) {
          oldTrail.parentNode.removeChild(oldTrail);
        }
      }
      
      setTimeout(() => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
        trails = trails.filter(t => t !== trail);
      }, 1000);
    });
  }

  // Create sparkles for tech section
  createSparkle() {
    const techElements = document.querySelector('.tech-floating-elements');
    if (!techElements) return;

    const sparkle = document.createElement('div');
    sparkle.className = 'tech-sparkle';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 200 - 100 + 'px';
    techElements.appendChild(sparkle);
    
    setTimeout(() => {
      if (sparkle.parentNode) {
        sparkle.parentNode.removeChild(sparkle);
      }
    }, 2000);
  }

  // Initialize sparkle creation
  initSparkles() {
    setInterval(() => {
      if (document.visibilityState === 'visible') {
        this.createSparkle();
      }
    }, 300);
  }
}

// Tech Stack Interactions
export class TechStackInteractions {
  constructor() {
    this.init();
  }

  init() {
    this.setupTechChipHover();
    this.setupCategoryAnimations();
  }

  setupTechChipHover() {
    if (typeof window === 'undefined') return;

    const techChips = document.querySelectorAll('.tech-chip');
    techChips.forEach(chip => {
      chip.addEventListener('mouseenter', () => {
        // Animate other chips in the same category
        const category = chip.closest('.tech-category');
        if (category) {
          const siblingChips = category.querySelectorAll('.tech-chip');
          
          siblingChips.forEach((sibling, index) => {
            if (sibling !== chip) {
              setTimeout(() => {
                (sibling as HTMLElement).style.transform = 'scale(0.95)';
                (sibling as HTMLElement).style.opacity = '0.7';
              }, index * 50);
            }
          });
        }
      });

      chip.addEventListener('mouseleave', () => {
        const category = chip.closest('.tech-category');
        if (category) {
          const siblingChips = category.querySelectorAll('.tech-chip');
          
          siblingChips.forEach((sibling) => {
            (sibling as HTMLElement).style.transform = 'scale(1)';
            (sibling as HTMLElement).style.opacity = '1';
          });
        }
      });
    });
  }

  setupCategoryAnimations() {
    if (typeof window === 'undefined') return;

    const categories = document.querySelectorAll('.tech-category');
    categories.forEach(category => {
      category.addEventListener('mouseenter', () => {
        (category as HTMLElement).style.transform = 'translateY(-5px)';
        (category as HTMLElement).style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
      });

      category.addEventListener('mouseleave', () => {
        (category as HTMLElement).style.transform = 'translateY(0)';
        (category as HTMLElement).style.boxShadow = '';
      });
    });
  }
}

// Project Card Interactions
export class ProjectInteractions {
  constructor() {
    this.init();
  }

  init() {
    this.setupCardHoverEffects();
    this.setupGlitchEffect();
  }

  setupCardHoverEffects() {
    if (typeof window === 'undefined') return;

    const projectCards = document.querySelectorAll('.modern-card');
    projectCards.forEach(card => {
      card.addEventListener('mousemove', (e: Event) => {
        const mouseEvent = e as MouseEvent;
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = mouseEvent.clientX - rect.left;
        const y = mouseEvent.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        (card as HTMLElement).style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
      });

      card.addEventListener('mouseleave', () => {
        (card as HTMLElement).style.transform = '';
      });
    });
  }

  setupGlitchEffect() {
    if (typeof window === 'undefined') return;

    const glitchElements = document.querySelectorAll('.projects-glitch');
    glitchElements.forEach(element => {
      setInterval(() => {
        (element as HTMLElement).style.animation = 'glitch 0.3s ease-in-out';
        setTimeout(() => {
          (element as HTMLElement).style.animation = '';
        }, 300);
      }, 5000 + Math.random() * 5000);
    });
  }
}

// Initialize all interactions when DOM is ready
if (typeof window !== 'undefined') {
  // debug flag - set true temporarily to trace init in browser console
  const DEBUG_INTERACTIONS = false;

  if (DEBUG_INTERACTIONS) console.log('[interactions] module loaded');

  const runInit = () => {
    try {
      if (DEBUG_INTERACTIONS) console.log('[interactions] running init');
      new PortfolioInteractions();
      new TechStackInteractions();
      new ProjectInteractions();
    } catch (err) {
      if (DEBUG_INTERACTIONS) console.error('Interactions init failed', err);
    }
  };

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    // If the module is imported after DOMContentLoaded, initialize immediately
    runInit();
  } else {
    document.addEventListener('DOMContentLoaded', runInit);
  }
}