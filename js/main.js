
/* =========================================
   ODONTOSMILE - JAVASCRIPT PRINCIPAL
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  // Elementos principales
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");
  const navLinks = document.querySelectorAll(".nav-link");

  const smilePortal = document.querySelector(".smile-portal");
  const portalToggle = document.querySelector(".portal-toggle");
  const portalActions = document.querySelector(".portal-actions");

  // =========================================
  // 1. MENÚ RESPONSIVE
  // =========================================

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("is-open");

      menuToggle.setAttribute("aria-expanded", isOpen);
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Cerrar menú" : "Abrir menú"
      );
    });

    // Cerrar el menú al seleccionar una opción
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menú");
      });
    });

    // Cerrar el menú al hacer clic fuera
    document.addEventListener("click", (event) => {
      if (
        !mainNav.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        mainNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menú");
      }
    });
  }

  // =========================================
  // 2. NAVEGACIÓN ACTIVA
  // =========================================

  const currentPage = window.location.pathname;

  navLinks.forEach((link) => {
    const linkPage = new URL(link.href, window.location.origin).pathname;

    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }

    link.addEventListener("click", () => {
      navLinks.forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // =========================================
  // 3. BOTÓN FLOTANTE SMILE PORTAL
  // =========================================

  if (smilePortal && portalToggle) {
    portalToggle.addEventListener("click", (event) => {
      event.stopPropagation();

      const isOpen = smilePortal.classList.toggle("is-open");

      portalToggle.setAttribute("aria-expanded", isOpen);
    });

    // Cerrar el portal al hacer clic fuera
    document.addEventListener("click", (event) => {
      if (!smilePortal.contains(event.target)) {
        smilePortal.classList.remove("is-open");
        portalToggle.setAttribute("aria-expanded", "false");
      }
    });

    // Cerrar al seleccionar una acción
    if (portalActions) {
      portalActions.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          smilePortal.classList.remove("is-open");
          portalToggle.setAttribute("aria-expanded", "false");
        });
      });
    }
  }

  // =========================================
  // 4. ANIMACIONES AL DESPLAZARSE
  // =========================================

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });
  }

  // =========================================
  // 5. AÑO AUTOMÁTICO DEL FOOTER
  // =========================================

  const yearElement = document.querySelector("#current-year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // =========================================
  // 6. CERRAR ELEMENTOS CON ESCAPE
  // =========================================

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (mainNav && menuToggle) {
        mainNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      }

      if (smilePortal && portalToggle) {
        smilePortal.classList.remove("is-open");
        portalToggle.setAttribute("aria-expanded", "false");
      }
    }
  });

  console.log("OdontoSmile: página cargada correctamente 🦷");
});
