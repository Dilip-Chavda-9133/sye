
/* =========================================
   SHREE YADUNANDAN ENTERPRISE
   PROFESSIONAL WEBSITE JAVASCRIPT
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* =====================================
     1. MOBILE NAVIGATION
  ===================================== */

  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  if (navToggle && nav) {

    function closeNavigation() {
      nav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.textContent = "☰";
    }

    navToggle.addEventListener("click", function () {

      const isOpen = nav.classList.toggle("open");

      navToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

      navToggle.textContent = isOpen ? "✕" : "☰";

    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNavigation);
    });

    document.addEventListener("click", function (event) {

      if (
        !nav.contains(event.target) &&
        !navToggle.contains(event.target)
      ) {
        closeNavigation();
      }

    });

    document.addEventListener("keydown", function (event) {

      if (event.key === "Escape" && nav.classList.contains("open")) {
        closeNavigation();
        navToggle.focus();
      }

    });

  }


  /* =====================================
     2. COPYRIGHT YEAR
  ===================================== */

  document.querySelectorAll("[data-year]").forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });


  /* =====================================
     3. IMAGE LOADING OPTIMIZATION
  ===================================== */

  document.querySelectorAll("img").forEach(function (image) {

    if (!image.closest("[data-hero-slider]") &&
        !image.hasAttribute("loading")) {
      image.loading = "lazy";
    }

    if (!image.hasAttribute("decoding")) {
      image.decoding = "async";
    }

  });


  /* =====================================
     4. REDUCED MOTION ACCESSIBILITY
  ===================================== */

  const prefersReducedMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;


  /* =====================================
     5. COMMON SLIDER CONTROLLER
  ===================================== */

  function initializeSlider(options) {

    const slider = options.slider;
    const slides = Array.from(options.slides);
    const dots = Array.from(options.dots);
    const prevButton = options.prevButton;
    const nextButton = options.nextButton;

    if (!slider || slides.length < 2) {
      return;
    }

    let currentIndex = 0;
    let timer = null;
    let isPaused = false;
    let isChanging = false;

    const autoplayDelay = options.delay || 4000;

    /* Preload the next image */

    function preloadImage(index) {

      const src = slides[index].getAttribute("src");

      if (!src) {
        return;
      }

      const preload = new Image();
      preload.src = src;

    }


    /* Update active slide and dots */

    function updateSlider(index) {

      currentIndex = (index + slides.length) % slides.length;

      slides.forEach(function (slide, i) {

        const active = i === currentIndex;

        slide.classList.toggle("is-active", active);
        slide.setAttribute("aria-hidden", active ? "false" : "true");

        if (active) {
          slide.loading = "eager";
        }

      });

      dots.forEach(function (dot, i) {

        const active = i === currentIndex;

        dot.classList.toggle("is-active", active);

        if (active) {
          dot.setAttribute("aria-current", "true");
        } else {
          dot.removeAttribute("aria-current");
        }

      });

      preloadImage((currentIndex + 1) % slides.length);

    }


    /* Go to a particular slide */

    function showSlide(index) {

      if (isChanging) {
        return;
      }

      updateSlider(index);

    }


    /* Stop autoplay */

    function stopAutoplay() {

      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }

    }


    /* Start autoplay */

    function startAutoplay() {

      stopAutoplay();

      if (
        prefersReducedMotion ||
        isPaused ||
        document.hidden ||
        slides.length < 2
      ) {
        return;
      }

      timer = window.setInterval(function () {
        showSlide(currentIndex + 1);
      }, autoplayDelay);

    }


    /* Manual navigation */

    function manualNavigation(index) {

      showSlide(index);
      startAutoplay();

    }


    /* Previous button */

    if (prevButton) {

      prevButton.addEventListener("click", function () {
        manualNavigation(currentIndex - 1);
      });

    }


    /* Next button */

    if (nextButton) {

      nextButton.addEventListener("click", function () {
        manualNavigation(currentIndex + 1);
      });

    }


    /* Dot navigation */

    dots.forEach(function (dot, index) {

      dot.addEventListener("click", function () {
        manualNavigation(index);
      });

    });


    /* Pause on mouse hover */

    slider.addEventListener("mouseenter", function () {

      isPaused = true;
      stopAutoplay();

    });

    slider.addEventListener("mouseleave", function () {

      isPaused = false;
      startAutoplay();

    });


    /* Pause on keyboard focus */

    slider.addEventListener("focusin", function () {

      isPaused = true;
      stopAutoplay();

    });

    slider.addEventListener("focusout", function () {

      window.setTimeout(function () {

        if (!slider.contains(document.activeElement)) {
          isPaused = false;
          startAutoplay();
        }

      }, 100);

    });


    /* Pause when browser tab is hidden */

    document.addEventListener("visibilitychange", function () {

      if (document.hidden) {
        stopAutoplay();
      } else {
        startAutoplay();
      }

    });


    /* Mobile swipe support */

    let touchStartX = 0;
    let touchStartY = 0;

    slider.addEventListener("touchstart", function (event) {

      touchStartX = event.changedTouches[0].screenX;
      touchStartY = event.changedTouches[0].screenY;

    }, { passive: true });


    slider.addEventListener("touchend", function (event) {

      const touchEndX = event.changedTouches[0].screenX;
      const touchEndY = event.changedTouches[0].screenY;

      const differenceX = touchEndX - touchStartX;
      const differenceY = touchEndY - touchStartY;

      /* Ignore vertical scrolling */

      if (
        Math.abs(differenceX) > 50 &&
        Math.abs(differenceX) > Math.abs(differenceY)
      ) {

        if (differenceX < 0) {
          manualNavigation(currentIndex + 1);
        } else {
          manualNavigation(currentIndex - 1);
        }

      }

    }, { passive: true });


    /* Initialize */

    slides.forEach(function (slide, index) {

      slide.setAttribute(
        "aria-hidden",
        index === 0 ? "false" : "true"
      );

    });

    updateSlider(0);
    startAutoplay();

  }


  /* =====================================
     6. HOME PAGE HERO SLIDER
  ===================================== */

  const heroSlider = document.querySelector("[data-hero-slider]");

  if (heroSlider) {

    initializeSlider({

      slider: heroSlider,

      slides: heroSlider.querySelectorAll(".hero-slide"),

      dots: heroSlider.querySelectorAll(".hero-dot"),

      prevButton: heroSlider.querySelector(".hero-prev"),

      nextButton: heroSlider.querySelector(".hero-next"),

      delay: 4000

    });

  }


  /* =====================================
     7. MACHINERY INDIVIDUAL SLIDERS
  ===================================== */

  document.querySelectorAll("[data-machinery-slider]").forEach(
    function (slider) {

      initializeSlider({

        slider: slider,

        slides: slider.querySelectorAll(".machinery-gallery-slide"),

        dots: slider.querySelectorAll("[data-machinery-dot]"),

        prevButton: slider.querySelector("[data-machinery-prev]"),

        nextButton: slider.querySelector("[data-machinery-next]"),

        delay: 4000

      });

    }
  );


  /* =====================================
     8. EXTERNAL LINK SECURITY
  ===================================== */

  document.querySelectorAll('a[target="_blank"]').forEach(
    function (link) {

      link.setAttribute("rel", "noopener noreferrer");

    }
  );


  /* =====================================
     9. CURRENT PAGE NAVIGATION
  ===================================== */

  function normalizePath(path) {

    if (path === "/") {
      return "/";
    }

    path = path.replace(/\/+$/, "");

    if (path.endsWith("/index.html")) {
      return path.slice(0, -10) || "/";
    }

    return path;

  }

  const currentPath = normalizePath(window.location.pathname);

  document.querySelectorAll(".nav a").forEach(function (link) {

    try {

      const linkPath = normalizePath(
        new URL(link.href, document.baseURI).pathname
      );

      if (linkPath === currentPath) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }

    } catch (error) {
      // Ignore invalid navigation URLs
    }

  });


  /* =====================================
     10. WEBSITE INITIALIZATION COMPLETE
  ===================================== */

  console.log("SYE Infra Website initialized successfully.");

});
