
/* =========================================
   SHREE YADUNANDAN ENTERPRISE
   Main Website JavaScript
   ========================================= */


/* ---------- 1. MOBILE NAVIGATION ---------- */

document.addEventListener("DOMContentLoaded", function () {

  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  if (navToggle && nav) {

    navToggle.addEventListener("click", function () {

      const isOpen = nav.classList.toggle("open");

      navToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

      navToggle.textContent = isOpen ? "✕" : "☰";

    });


    // Close menu after clicking a navigation link

    nav.querySelectorAll("a").forEach(function (link) {

      link.addEventListener("click", function () {

        nav.classList.remove("open");

        navToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        navToggle.textContent = "☰";

      });

    });


    // Close menu when clicking outside

    document.addEventListener("click", function (event) {

      const clickedInsideNav = nav.contains(event.target);
      const clickedToggle = navToggle.contains(event.target);

      if (!clickedInsideNav && !clickedToggle) {

        nav.classList.remove("open");

        navToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        navToggle.textContent = "☰";

      }

    });


    // Close menu with Escape key

    document.addEventListener("keydown", function (event) {

      if (event.key === "Escape") {

        nav.classList.remove("open");

        navToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        navToggle.textContent = "☰";

        navToggle.focus();

      }

    });

  }


  /* ---------- 2. AUTOMATIC COPYRIGHT YEAR ---------- */

  const yearElements = document.querySelectorAll("[data-year]");

  yearElements.forEach(function (element) {

    element.textContent = new Date().getFullYear();

  });


  /* ---------- 3. IMAGE LOADING ---------- */

  document.querySelectorAll("img").forEach(function (image) {

    if (!image.hasAttribute("loading")) {

      image.setAttribute("loading", "lazy");

    }

    if (!image.hasAttribute("decoding")) {

      image.setAttribute("decoding", "async");

    }

  });


  /* ---------- 4. EXTERNAL LINK SECURITY ---------- */

  document.querySelectorAll('a[target="_blank"]').forEach(function (link) {

    link.setAttribute("rel", "noopener noreferrer");

  });


  /* ---------- 5. CURRENT PAGE NAVIGATION ---------- */

  const currentPath = window.location.pathname;

  document.querySelectorAll(".nav a").forEach(function (link) {

    const linkPath = new URL(link.href).pathname;

    if (linkPath === currentPath) {

      link.setAttribute("aria-current", "page");

    } else {

      link.removeAttribute("aria-current");

    }

  });

});
