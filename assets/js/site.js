
/* =========================================
   SHREE YADUNANDAN ENTERPRISE
   Professional Website JavaScript
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* ---------- 1. MOBILE NAVIGATION ---------- */

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


  /* ---------- 2. AUTOMATIC COPYRIGHT YEAR ---------- */

  document.querySelectorAll("[data-year]").forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });


  /* ---------- 3. IMAGE LOADING ---------- */

  document.querySelectorAll("img").forEach(function (image) {

    if (
      !image.closest("[data-hero-slider]") &&
      !image.hasAttribute("loading")
    ) {
      image.setAttribute("loading", "lazy");
    }

    if (!image.hasAttribute("decoding")) {
      image.setAttribute("decoding", "async");
    }

  });


  /* ---------- 4. MACHINERY PHOTO GROUPS ---------- */

  const photoGroups = {
    "sany215": [
      "/images/sany215-1.jpg",
      "/images/sany215-2.jpg",
      "/images/sany215-3.jpg",
      "/images/sany215-4.jpg"
    ],

    "hyundai210": [
      "/images/hyundai210-1.jpg",
      "/images/hyundai210-2.jpg",
      "/images/hyundai210-3.jpg",
      "/images/hyundai210-4.jpg"
    ],

    "hyundai210-m2": [
      "/images/hyundai210-m2-1.jpg",
      "/images/hyundai210-m2-2.jpg",
      "/images/hyundai210-m2-3.jpg",
      "/images/hyundai210-m2-4.jpg"
    ],

    "hyundai210-m3": [
      "/images/hyundai210-m3-1.jpg",
      "/images/hyundai210-m3-2.jpg",
      "/images/hyundai210-m3-3.jpg",
      "/images/hyundai210-m3-4.jpg"
    ],

    "hayva": [
      "/images/hayva1.jpg",
      "/images/hayva2.jpg",
      "/images/hayva3.jpg"
    ]
  };


  /* ---------- 5. REDUCED MOTION SETTING ---------- */

  const prefersReducedMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;


  /* ---------- 6. HOME PAGE HERO SLIDER ---------- */

  const heroSlider = document.querySelector("[data-hero-slider]");

  if (heroSlider) {

    const slides = Array.from(
      heroSlider.querySelectorAll(".hero-slide")
    );

    const dots = Array.from(
      heroSlider.querySelectorAll(".hero-dot")
    );

    const prevButton = heroSlider.querySelector(".hero-prev");
    const nextButton = heroSlider.querySelector(".hero-next");

    let currentIndex = 0;
    let heroTimer = null;

    if (slides.length > 0) {

      function showHeroSlide(index) {

        currentIndex = (index + slides.length) % slides.length;

        slides.forEach(function (slide, i) {
          slide.classList.toggle("is-active", i === currentIndex);
          slide.setAttribute(
            "aria-hidden",
            i === currentIndex ? "false" : "true"
          );
        });

        dots.forEach(function (dot, i) {
          dot.classList.toggle("is-active", i === currentIndex);

          if (i === currentIndex) {
            dot.setAttribute("aria-current", "true");
          } else {
            dot.removeAttribute("aria-current");
          }
        });
      }

      function stopHeroAutoplay() {
        if (heroTimer) {
          window.clearInterval(heroTimer);
          heroTimer = null;
        }
      }

      function startHeroAutoplay() {

        stopHeroAutoplay();

        if (prefersReducedMotion || slides.length < 2) {
          return;
        }

        if (document.hidden) {
          return;
        }

        heroTimer = window.setInterval(function () {
          showHeroSlide(currentIndex + 1);
        }, 4000);
      }

      function goToHeroSlide(index) {
        showHeroSlide(index);
        startHeroAutoplay();
      }

      if (prevButton) {
        prevButton.addEventListener("click", function () {
          goToHeroSlide(currentIndex - 1);
        });
      }

      if (nextButton) {
        nextButton.addEventListener("click", function () {
          goToHeroSlide(currentIndex + 1);
        });
      }

      dots.forEach(function (dot, index) {
        dot.addEventListener("click", function () {
          goToHeroSlide(index);
        });
      });

      /* Pause while mouse is over slider */

      heroSlider.addEventListener("mouseenter", stopHeroAutoplay);
      heroSlider.addEventListener("mouseleave", startHeroAutoplay);

      /* Pause while keyboard user focuses slider controls */

      heroSlider.addEventListener("focusin", stopHeroAutoplay);

      heroSlider.addEventListener("focusout", function () {
        window.setTimeout(function () {
          if (!heroSlider.contains(document.activeElement)) {
            startHeroAutoplay();
          }
        }, 100);
      });

      /* Pause when browser tab is hidden */

      document.addEventListener("visibilitychange", function () {
        if (document.hidden) {
          stopHeroAutoplay();
        } else {
          startHeroAutoplay();
        }
      });

      /* Mobile swipe support */

      let touchStartX = 0;
      let touchEndX = 0;

      heroSlider.addEventListener("touchstart", function (event) {
        touchStartX = event.changedTouches[0].screenX;
      }, { passive: true });

      heroSlider.addEventListener("touchend", function (event) {
        touchEndX = event.changedTouches[0].screenX;

        const swipeDistance = touchEndX - touchStartX;

        if (Math.abs(swipeDistance) > 50) {

          if (swipeDistance < 0) {
            goToHeroSlide(currentIndex + 1);
          } else {
            goToHeroSlide(currentIndex - 1);
          }
        }
      }, { passive: true });

      /* Preload hero images */

      slides.forEach(function (slide) {
        const src = slide.getAttribute("src");

        if (src) {
          const preload = new Image();
          preload.src = src;
        }
      });

      showHeroSlide(0);
      startHeroAutoplay();
    }
  }


  /* ---------- 7. MACHINERY INDIVIDUAL SLIDESHOW ---------- */

  document.querySelectorAll(".card > img").forEach(function (image) {

    /* Do not run machinery slideshow on the home hero */

    if (image.closest("[data-hero-slider]")) {
      return;
    }

    const originalSrc = image.getAttribute("src");

    if (!originalSrc) {
      return;
    }

    let imagePath;

    try {
      imagePath = new URL(originalSrc, document.baseURI).pathname;
    } catch (error) {
      return;
    }

    const matchedGroup = Object.values(photoGroups).find(
      function (slides) {
        return slides.includes(imagePath);
      }
    );

    if (!matchedGroup || matchedGroup.length < 2) {
      return;
    }

    let currentIndex = matchedGroup.indexOf(imagePath);
    let isChanging = false;

    /* Create slideshow image frame */

    const frame = document.createElement("div");
    frame.className = "machinery-slider-frame";

    image.parentNode.insertBefore(frame, image);
    frame.appendChild(image);

    image.classList.add("auto-slideshow-image");

    /* Create second image layer for crossfade */

    const overlay = image.cloneNode(false);

    overlay.removeAttribute("id");
    overlay.removeAttribute("srcset");
    overlay.setAttribute("src", originalSrc);
    overlay.setAttribute("alt", "");
    overlay.setAttribute("aria-hidden", "true");
    overlay.setAttribute("loading", "eager");
    overlay.className = "machinery-slide-overlay";

    frame.appendChild(overlay);

    /* Preload all machinery images */

    matchedGroup.forEach(function (src) {
      const preload = new Image();
      preload.src = src;
    });

    function changeMachinerySlide() {

      if (isChanging || document.hidden) {
        return;
      }

      const nextIndex = (currentIndex + 1) % matchedGroup.length;
      const nextSrc = matchedGroup[nextIndex];

      const nextImage = new Image();

      nextImage.onload = function () {

        isChanging = true;

        overlay.src = nextSrc;

        requestAnimationFrame(function () {
          overlay.classList.add("is-visible");
        });

        window.setTimeout(function () {

          image.src = nextSrc;
          currentIndex = nextIndex;

          overlay.classList.remove("is-visible");

          window.setTimeout(function () {
            isChanging = false;
          }, 1300);

        }, 1200);

      };

      nextImage.onerror = function () {
        console.warn("Machinery image not found:", nextSrc);
      };

      nextImage.src = nextSrc;
    }

    /* Start slideshow only when motion is allowed */

    if (!prefersReducedMotion) {
      window.setInterval(changeMachinerySlide, 4000);
    }

  });


  /* ---------- 8. EXTERNAL LINK SECURITY ---------- */

  document.querySelectorAll('a[target="_blank"]').forEach(function (link) {

    link.setAttribute("rel", "noopener noreferrer");

  });


  /* ---------- 9. CURRENT PAGE NAVIGATION ---------- */

  const currentPath = window.location.pathname;

  document.querySelectorAll(".nav a").forEach(function (link) {

    try {
      const linkPath = new URL(link.href, document.baseURI).pathname;

      if (linkPath === currentPath) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }

    } catch (error) {
      // Ignore invalid navigation URLs
    }

  });

});
