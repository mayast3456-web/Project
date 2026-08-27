// ==========================================
// DOM READY
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded"); // для отладки
  initBurgerMenu();
  initAccordion();
  initFormValidation();
  initDragScroll('.cardsCertifications');
});

// ==========================================
// BURGER MENU
// ==========================================
function initBurgerMenu() {
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");
  if (!burger || !nav) return;

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
  });

  nav.querySelectorAll(".navlink").forEach((link) => {
    link.addEventListener("click", () => {
      burger.classList.remove("active");
      nav.classList.remove("active");
    });
  });
}

// ==========================================
// ACCORDION (FAQ)
// ==========================================
function initAccordion() {
  const items = document.querySelectorAll(".accordion-item");
  console.log("Accordion items:", items.length); // для отладки
  
  if (!items.length) return;

  items.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    if (!header) return;

    header.addEventListener("click", () => {
      console.log("Accordion clicked"); // для отладки
      const isActive = item.classList.contains("active");

      // close others
      items.forEach((other) => {
        if (other !== item) other.classList.remove("active");
      });

      // toggle current
      item.classList.toggle("active", !isActive);
    });
  });
}

// ==========================================
// FORM VALIDATION
// ==========================================
function initFormValidation() {
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="tel"], input[type="email"]');
      if (!input) return;

      const value = input.value.trim();
      if (value.length >= 7) {
        alert('Thank you! We will contact you soon.');
        form.reset();
      } else {
        input.style.borderColor = 'var(--color-error)';
      }
    });

    form.querySelectorAll('input').forEach(input => {
      input.addEventListener('input', () => {
        input.style.borderColor = '';
      });
    });
  });
}

// ==========================================
// DRAG SCROLL (для сертификатов)
// ==========================================
function initDragScroll(selector) {
  const sliders = document.querySelectorAll(selector);
  
  sliders.forEach(slider => {
    let isDown = false;
    let startX;
    let scrollLeft;
    
    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.style.cursor = 'grabbing';
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.style.cursor = 'grab';
    });
    
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.style.cursor = 'grab';
    });
    
    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    });
  });
}