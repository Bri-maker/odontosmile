
/* ==========================================
   ODONTOSMILE
   Navegación y Portal de Sonrisas
========================================== */

(() => {

  "use strict";

  /* ==========================================
     MENÚ DE NAVEGACIÓN
  ========================================== */

  const navLinks = [
    ...document.querySelectorAll(".nav-link")
  ];

  const currentFile =
    window.location.pathname.split("/").pop() || "index.html";


  // Activar un enlace del menú

  function activateLink(link) {

    navLinks.forEach((item) => {

      const active = item === link;

      item.classList.toggle("active", active);

      if (active) {

        item.setAttribute("aria-current", "page");

      } else {

        item.removeAttribute("aria-current");

      }

    });

  }


  // Identificar automáticamente la página actual

  const matchingLink = navLinks.find((link) => {

    const target = new URL(
      link.href,
      window.location.href
    );

    return target.pathname.split("/").pop() === currentFile;

  });


  if (matchingLink) {

    activateLink(matchingLink);

  }


  // Cambiar el color al hacer clic

  navLinks.forEach((link) => {

    link.addEventListener("click", () => {

      activateLink(link);

    });

  });


  /* ==========================================
     MENÚ RESPONSIVE PARA CELULARES
  ========================================== */

  const menuToggle =
    document.querySelector(".menu-toggle");

  const mainNav =
    document.querySelector(".main-nav");


  if (menuToggle && mainNav) {

    // Abrir y cerrar menú

    menuToggle.addEventListener("click", () => {

      const isOpen =
        menuToggle.getAttribute("aria-expanded") === "true";

      menuToggle.setAttribute(
        "aria-expanded",
        String(!isOpen)
      );

      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Abrir menú" : "Cerrar menú"
      );

      mainNav.classList.toggle(
        "is-open",
        !isOpen
      );

    });


    // Cerrar menú al seleccionar un enlace

    mainNav.querySelectorAll("a").forEach((link) => {

      link.addEventListener("click", () => {

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.setAttribute(
          "aria-label",
          "Abrir menú"
        );

        mainNav.classList.remove("is-open");

      });

    });


    // Cerrar menú al hacer clic fuera

    document.addEventListener("click", (event) => {

      if (
        !mainNav.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {

        mainNav.classList.remove("is-open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.setAttribute(
          "aria-label",
          "Abrir menú"
        );

      }

    });

  }


  /* ==========================================
     PORTAL DE SONRISAS
  ========================================== */

  const portal =
    document.querySelector("#smilePortal");

  const portalTrigger =
    portal?.querySelector(".portal-trigger");


  if (portal && portalTrigger) {

    // Abrir o cerrar el Portal

    portalTrigger.addEventListener("click", (event) => {

      event.stopPropagation();

      const open =
        portal.classList.toggle("is-open");

      portalTrigger.setAttribute(
        "aria-expanded",
        String(open)
      );

      portalTrigger.setAttribute(
        "aria-label",
        open
          ? "Cerrar Portal de Sonrisas"
          : "Abrir Portal de Sonrisas"
      );

    });


    // Cerrar Portal al hacer clic fuera

    document.addEventListener("click", (event) => {

      if (!portal.contains(event.target)) {

        portal.classList.remove("is-open");

        portalTrigger.setAttribute(
          "aria-expanded",
          "false"
        );

        portalTrigger.setAttribute(
          "aria-label",
          "Abrir Portal de Sonrisas"
        );

      }

    });


    // Cerrar Portal con la tecla Escape

    document.addEventListener("keydown", (event) => {

      if (event.key === "Escape") {

        portal.classList.remove("is-open");

        portalTrigger.setAttribute(
          "aria-expanded",
          "false"
        );

        portalTrigger.setAttribute(
          "aria-label",
          "Abrir Portal de Sonrisas"
        );

        portalTrigger.focus();

      }

    });

  }


  /* ==========================================
     ANIMACIONES AL DESPLAZARSE
  ========================================== */

  const revealItems =
    document.querySelectorAll(".reveal");


  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      (entries, obs) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("is-visible");

            obs.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12
      }
    );


    revealItems.forEach((item) => {

      observer.observe(item);

    });

  } else {

    // Compatibilidad con navegadores antiguos

    revealItems.forEach((item) => {

      item.classList.add("is-visible");

    });

  }


  /* ==========================================
     AÑO AUTOMÁTICO DEL FOOTER
  ========================================== */

  const year =
    document.querySelector("#year");


  if (year) {

    year.textContent = new Date().getFullYear();

  }

})();
