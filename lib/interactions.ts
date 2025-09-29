"use client";

// Interactive Features and Animations
export class PortfolioInteractions {
  private handleMouseMove: ((e: MouseEvent) => void) | null = null;
  private handleTouchStart: ((e: TouchEvent) => void) | null = null;
  private hoverElements: NodeListOf<Element> | null = null;
  private mouseEnterHandler: (() => void) | null = null;
  private mouseLeaveHandler: (() => void) | null = null;

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

  destroy() {
    this.cleanupCursorEffects();
  }

  // Cursor Effects
  setupCursorEffects() {
    if (typeof window === "undefined") return;

    const iconSources = [
      "/js-icon.svg",
      "/typescript-icon.svg",
      "/laravel.svg",
      "/next.svg",
      "/python-icon.svg",
      "/tailwind-icon.svg",
      "/flutter-icon.svg",
      "/dart-icon.svg",
    ];

    let lastX = 0;
    let lastY = 0;
    const activeIcons: HTMLElement[] = [];
    let iconsEnabled = true;

    const spawnIcon = (x: number, y: number, vx: number, vy: number) => {
      if (!iconsEnabled) return;
      const img = document.createElement("img");
      img.src = iconSources[Math.floor(Math.random() * iconSources.length)];
      img.className = "cursor-icon pointer-events-none";
      img.style.position = "fixed";
      img.style.left = x + "px";
      img.style.top = y + "px";
      img.style.width = "28px";
      img.style.height = "28px";
      img.style.transform = "translate(-50%, -50%) scale(1)";
      img.style.opacity = "1";
      img.style.zIndex = "9999";
      img.style.transition = "opacity 400ms linear, transform 600ms cubic-bezier(.2,.8,.2,1)";

      document.body.appendChild(img);
      activeIcons.push(img);

      const lifetime = 900 + Math.random() * 600;
      const start = performance.now();

      function animate(time: number) {
        const t = time - start;
        const progress = Math.min(1, t / lifetime);
        const nx = x + vx * (t / 16);
        const ny = y + vy * (t / 16) + progress * 10;
        img.style.left = nx + "px";
        img.style.top = ny + "px";
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
    };

    const handlePointerMove = (x: number, y: number, type: 'move' | 'start') => {
      if (!iconsEnabled) return;

      if (type === 'start') {
        lastX = x;
        lastY = y;
        // Spawn a small burst on tap
        for (let i = 0; i < 3; i++) {
          const vx = (Math.random() - 0.5) * 4;
          const vy = (Math.random() - 0.5) * 4 - 1;
          spawnIcon(x, y, vx, vy);
        }
        return;
      }

      const dx = x - lastX;
      const dy = y - lastY;
      lastX = x;
      lastY = y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      if (speed < 2 && type === 'move') return;

      const count = Math.min(4, Math.ceil(speed / 8));
      for (let i = 0; i < count; i++) {
        const vx = -dx / (6 + Math.random() * 6) + (Math.random() - 0.5) * 2;
        const vy = -dy / (6 + Math.random() * 6) + (Math.random() - 0.5) * 2 - 1;
        spawnIcon(x + (Math.random() - 0.5) * 8, y + (Math.random() - 0.5) * 8, vx, vy);
      }
    };

    this.handleMouseMove = (e: MouseEvent) => {
      handlePointerMove(e.clientX, e.clientY, 'move');
    };

    this.handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        handlePointerMove(touch.clientX, touch.clientY, 'start');
      }
    };

    window.addEventListener("mousemove", this.handleMouseMove);
    window.addEventListener("touchstart", this.handleTouchStart);

    const interactiveSelector =
      'a[href], button, [role="button"], input[type="button"], input[type="submit"], [onclick], .btn, .link, .nav-link, .tech-chip, .modern-card, Link';
    this.hoverElements = document.querySelectorAll(interactiveSelector);

    let hoveredCount = 0;

    this.mouseEnterHandler = () => {
      hoveredCount += 1;
      if (hoveredCount === 1) {
        iconsEnabled = false;
        while (activeIcons.length) {
          const el = activeIcons.pop();
          if (el && el.parentNode) el.parentNode.removeChild(el);
        }
      }
    };

    this.mouseLeaveHandler = () => {
      hoveredCount = Math.max(0, hoveredCount - 1);
      if (hoveredCount === 0) {
        iconsEnabled = true;
      }
    };

    this.hoverElements.forEach((element) => {
      element.addEventListener("mouseenter", this.mouseEnterHandler!);
      element.addEventListener("mouseleave", this.mouseLeaveHandler!);
    });
  }

  cleanupCursorEffects() {
    if (typeof window === "undefined") return;
    if (this.handleMouseMove) {
      window.removeEventListener("mousemove", this.handleMouseMove);
    }
    if (this.handleTouchStart) {
      window.removeEventListener("touchstart", this.handleTouchStart);
    }
    if (this.hoverElements && this.mouseEnterHandler && this.mouseLeaveHandler) {
      this.hoverElements.forEach((element) => {
        element.removeEventListener("mouseenter", this.mouseEnterHandler!);
        element.removeEventListener("mouseleave", this.mouseLeaveHandler!);
      });
    }
  }

  // ... (rest of the methods are unchanged)
  // Scroll Animations
  setupScrollAnimations() {
    if (typeof window === "undefined") return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");

          // Stagger animation for child elements
          const children = entry.target.querySelectorAll(
            ".tech-category, .modern-card, .form-group",
          );
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add("animate-slide-up");
            }, index * 200);
          });
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
      "#about, #projects, #contact",
    );
    animatedElements.forEach((element) => {
      observer.observe(element);
    });

    // Back to top button
    const backToTopBtn = document.getElementById("back-to-top");
    if (backToTopBtn) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          backToTopBtn.classList.add("opacity-100", "visible");
          backToTopBtn.classList.remove("opacity-0", "invisible");
        } else {
          backToTopBtn.classList.remove("opacity-100", "visible");
          backToTopBtn.classList.add("opacity-0", "invisible");
        }
      });
    }
  }

  // Particle System
  setupParticleSystem() {
    if (typeof window === "undefined") return;

    const createParticle = (container: Element) => {
      const particle = document.createElement("div");
      particle.className =
        "absolute w-1 h-1 bg-purple-500/20 rounded-full pointer-events-none";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = Math.random() * 100 + "%";
      particle.style.animation = `float-particle ${3 + Math.random() * 4}s ease-in-out infinite`;
      particle.style.animationDelay = Math.random() * 2 + "s";

      container.appendChild(particle);

      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 7000);
    };

    const sections = document.querySelectorAll(
      "#hero, #about, #projects, #contact",
    );
    sections.forEach((section) => {
      setInterval(() => {
        if (document.visibilityState === "visible") {
          createParticle(section);
        }
      }, 2000);
    });
  }

  // Smooth Scrolling
  setupSmoothScrolling() {
    if (typeof window === "undefined") return;

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener(
        "click",
        function (this: HTMLAnchorElement, e: Event) {
          e.preventDefault();
          const target = document.querySelector(
            this.getAttribute("href") || "",
          );
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        },
      );
    });
  }

  // Form Interactions
  setupFormInteractions() {
    if (typeof window === "undefined") return;

    const formInputs = document.querySelectorAll(".form-input");
    formInputs.forEach((input) => {
      // Focus effects
      input.addEventListener("focus", (e: Event) => {
        const target = e.target as HTMLInputElement;
        const parent = target.parentElement;
        if (parent) {
          parent.classList.add("focused");
          // Create ripple effect
          this.createInputRipple(target);
        }
      });

      input.addEventListener("blur", (e: Event) => {
        const target = e.target as HTMLInputElement;
        const parent = target.parentElement;
        if (parent && !target.value) {
          parent.classList.remove("focused");
        }
      });

      // Validation on input
      input.addEventListener("input", (e: Event) => {
        const target = e.target as HTMLInputElement;
        this.validateInput(target);
      });
    });

    // Form submission
    const contactForm = document.getElementById(
      "contact-form",
    ) as HTMLFormElement;
    if (contactForm) {
      contactForm.addEventListener("submit", (e: Event) => {
        e.preventDefault();
        this.handleFormSubmission(contactForm);
      });
    }
  }

  createInputRipple(input: HTMLInputElement) {
    const ripple = document.createElement("div");
    ripple.className =
      "absolute bottom-0 left-1/2 w-0 h-0.5 bg-purple-600 transition-all duration-300 transform -translate-x-1/2";

    if (input.parentElement) {
      input.parentElement.style.position = "relative";
      input.parentElement.appendChild(ripple);
    }

    setTimeout(() => {
      ripple.style.width = "100%";
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

    parent.classList.remove("valid", "invalid");

    let isValid = false;

    if (input.type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isValid = emailRegex.test(value);
    } else {
      isValid = value.length > 0;
    }

    if (value.length > 0) {
      parent.classList.add(isValid ? "valid" : "invalid");
    }

    return isValid;
  }

  async handleFormSubmission(form: HTMLFormElement) {
    const submitBtn = form.querySelector(
      'button[type="submit"]',
    ) as HTMLButtonElement;
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
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Show success message
      this.showNotification(
        "Pesan berhasil dikirim! Terima kasih telah menghubungi saya.",
        "success",
      );
      form.reset();
    } catch (error) {
      this.showNotification("Terjadi kesalahan. Silakan coba lagi.", "error");
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  }

  showNotification(message: string, type: string = "info") {
    const notification = document.createElement("div");
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300 ${
      type === "success"
        ? "bg-green-500 text-white"
        : type === "error"
          ? "bg-red-500 text-white"
          : "bg-blue-500 text-white"
    }`;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.transform = "translateX(0)";
    }, 10);

    setTimeout(() => {
      notification.style.transform = "translateX(100%)";
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 4000);
  }

  // Theme Transitions
  setupThemeTransitions() {
    if (typeof window === "undefined") return;

    const themeToggle = document.getElementById("theme-switcher");
    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        // Add transition class to body
        document.body.style.transition = "all 0.3s ease";

        setTimeout(() => {
          document.body.style.transition = "";
        }, 300);
      });
    }
  }

  // Loading Animations
  setupLoadingAnimations() {
    if (typeof window === "undefined") return;

    // Page load animation
    window.addEventListener("load", () => {
      const loadingElements = document.querySelectorAll(".animate-on-load");
      loadingElements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add("animate-fade-in");
        }, index * 100);
      });
    });
  }
}

export function initializeInteractions() {
  const interactions = new PortfolioInteractions();
  return () => {
    interactions.destroy();
  };
}