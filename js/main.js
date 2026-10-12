(function () {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");
  const header = document.getElementById("header");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Abrir menú");
      });
    });
  }

  // Soft shadow on scroll
  if (header) {
    const onScroll = function () {
      header.style.boxShadow =
        window.scrollY > 8 ? "0 4px 20px rgba(10, 37, 64, 0.06)" : "none";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();
