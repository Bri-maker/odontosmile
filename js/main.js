
document.addEventListener("DOMContentLoaded", () => {

  // =====================================
  // 1. MENÚ DE NAVEGACIÓN
  // =====================================

  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {

    const closeMenu = () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menú");
    };

    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Cerrar menú" : "Abrir menú"
      );
    });

    // Cerrar al seleccionar una página
    mainNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", closeMenu);
    });

    // Cerrar al hacer clic fuera
    document.addEventListener("click", event => {
      if (
        !mainNav.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        closeMenu();
      }
    });

    // Cerrar con Escape
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    // Cerrar al volver a escritorio
    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) {
        closeMenu();
      }
    });
  }


  // =====================================
  // 2. PORTAL DE SONRISAS
  // =====================================

  const smilePortal = document.getElementById("smile-portal");
  const portalTrigger = document.querySelector(".portal-trigger");

  if (smilePortal && portalTrigger) {

    const closePortal = () => {
      smilePortal.classList.remove("open");
      portalTrigger.setAttribute("aria-expanded", "false");
      portalTrigger.setAttribute(
        "aria-label",
        "Abrir Portal de Sonrisas"
      );
    };

    portalTrigger.addEventListener("click", () => {

      const isOpen = smilePortal.classList.toggle("open");

      portalTrigger.setAttribute("aria-expanded", String(isOpen));
      portalTrigger.setAttribute(
        "aria-label",
        isOpen
          ? "Cerrar Portal de Sonrisas"
          : "Abrir Portal de Sonrisas"
      );

    });

    // Cerrar al seleccionar una opción
    smilePortal.querySelectorAll(".portal-action").forEach(link => {
      link.addEventListener("click", closePortal);
    });

    // Cerrar al hacer clic fuera
    document.addEventListener("click", event => {
      if (!smilePortal.contains(event.target)) {
        closePortal();
      }
    });

    // Cerrar con Escape
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        closePortal();
      }
    });

  }


  // =====================================
  // 3. ANIMACIONES AL DESPLAZARSE
  // =====================================

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver((entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }

      });

    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -30px 0px"
    });

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });

  } else {

    // Compatibilidad con navegadores antiguos
    revealElements.forEach(element => {
      element.classList.add("visible");
    });

  }


  // =====================================
  // 4. AÑO AUTOMÁTICO DEL FOOTER
  // =====================================

  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }


  // =====================================
  // 5. CERRAR MENÚ AL CAMBIAR DE PÁGINA
  // =====================================

  window.addEventListener("pageshow", () => {

    if (mainNav && menuToggle) {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }

    if (smilePortal && portalTrigger) {
      smilePortal.classList.remove("open");
      portalTrigger.setAttribute("aria-expanded", "false");
    }

  });

});
