/**
 * AG MUEBLES - Script Principal
 * Funcionalidades interactivas, filtros, slider antes/después y cotizador a medida
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll effect
  const header = document.querySelector('.site-header');
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // 2. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      const isExpanded = mainNav.classList.contains('active');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking link
    mainNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
      });
    });
  }

  // 3. Portafolio - Filtro interactivo
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          item.style.display = 'block';
          item.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 4. Lightbox Modal
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.querySelector('.lightbox-close');

  portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img && lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
      }
    });
  });

  if (lightboxClose && lightbox) {
    lightboxClose.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
      }
    });
  }

  // 5. Slider Interactivo "Antes y Después"
  const baContainer = document.querySelector('.ba-slider-container');
  const baAfter = document.querySelector('.ba-after');
  const baHandle = document.querySelector('.ba-handle');

  if (baContainer && baAfter && baHandle) {
    let isDown = false;

    const moveSlider = (clientX) => {
      const rect = baContainer.getBoundingClientRect();
      let posX = clientX - rect.left;
      if (posX < 0) posX = 0;
      if (posX > rect.width) posX = rect.width;

      const percentage = (posX / rect.width) * 100;
      baAfter.style.width = `${percentage}%`;
      baHandle.style.left = `${percentage}%`;
    };

    baContainer.addEventListener('mousedown', (e) => {
      isDown = true;
      moveSlider(e.clientX);
    });

    window.addEventListener('mouseup', () => {
      isDown = false;
    });

    baContainer.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      moveSlider(e.clientX);
    });

    // Touch support for mobiles
    baContainer.addEventListener('touchstart', (e) => {
      isDown = true;
      moveSlider(e.touches[0].clientX);
    });

    window.addEventListener('touchend', () => {
      isDown = false;
    });

    baContainer.addEventListener('touchmove', (e) => {
      if (!isDown) return;
      moveSlider(e.touches[0].clientX);
    });
  }

  // 6. Cotizador Interactivo de Mobiliario a Medida
  const calcForm = document.getElementById('furnitureCalcForm');
  const priceDisplay = document.getElementById('calcEstimatedPrice');
  const calcWhatsappBtn = document.getElementById('calcWhatsappBtn');

  if (calcForm && priceDisplay) {
    const prices = {
      type: {
        cocina: 1800,
        salon: 1200,
        dormitorio: 1400,
        oficina: 1100
      },
      size: {
        compacto: 1,
        mediano: 1.45,
        amplio: 2.1
      },
      finish: {
        melamina: 1,
        poliuretano: 1.35,
        madera: 1.7,
        cuarzo: 2.1
      }
    };

    const calculateBudget = () => {
      const selectedType = calcForm.querySelector('input[name="furnitureType"]:checked')?.value || 'cocina';
      const selectedSize = calcForm.querySelector('input[name="spaceSize"]:checked')?.value || 'mediano';
      const selectedFinish = calcForm.querySelector('input[name="finishQuality"]:checked')?.value || 'poliuretano';

      const base = prices.type[selectedType] || 1500;
      const sizeMult = prices.size[selectedSize] || 1.3;
      const finishMult = prices.finish[selectedFinish] || 1.2;

      const minEstimate = Math.round((base * sizeMult * finishMult) / 50) * 50;
      const maxEstimate = Math.round((minEstimate * 1.35) / 50) * 50;

      priceDisplay.textContent = `$${minEstimate.toLocaleString('es-CO')} - $${maxEstimate.toLocaleString('es-CO')} USD`;

      if (calcWhatsappBtn) {
        const typeLabels = {
          cocina: 'Cocina Integral de Lujo',
          salon: 'Centro de Entretenimiento / Salón',
          dormitorio: 'Walk-in Closet / Dormitorio',
          oficina: 'Mobiliario Corporativo / Oficina'
        };
        const msg = encodeURIComponent(
          `¡Hola AG Muebles! Estuve usando el cotizador en su página web y me interesa un proyecto de ${typeLabels[selectedType]}, tamaño ${selectedSize}, acabado ${selectedFinish}. El estimado es ${minEstimate} - ${maxEstimate} USD. ¿Podemos agendar una asesoría para tomar medidas exactas?`
        );
        calcWhatsappBtn.href = `https://wa.me/573000000000?text=${msg}`;
      }
    };

    calcForm.querySelectorAll('input').forEach(input => {
      input.addEventListener('change', calculateBudget);
    });

    calculateBudget();
  }

  // 7. Formulario de Contacto
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = 'Enviando solicitud...';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = '✓ ¡Mensaje Enviado con Éxito!';
        submitBtn.style.backgroundColor = '#25D366';
        submitBtn.style.color = '#FFFFFF';
        contactForm.reset();

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.style.backgroundColor = '';
          submitBtn.style.color = '';
          submitBtn.disabled = false;
        }, 4000);
      }, 1000);
    });
  }
});
