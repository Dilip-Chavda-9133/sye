
/* =========================================
   SHREE YADUNANDAN ENTERPRISE
   Main Website JavaScript
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* ---------- 1. MOBILE NAVIGATION ---------- */

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

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.textContent = "☰";
      });
    });

    document.addEventListener("click", function (event) {
      const clickedInsideNav = nav.contains(event.target);
      const clickedToggle = navToggle.contains(event.target);

      if (!clickedInsideNav && !clickedToggle) {
        nav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.textContent = "☰";
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        nav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.textContent = "☰";
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

    if (!image.hasAttribute("loading")) {
      image.setAttribute("loading", "lazy");
    }

    if (!image.hasAttribute("decoding")) {
      image.setAttribute("decoding", "async");
    }

  });


  
  /* ---------- 4. AUTOMATIC PHOTO SLIDESHOW ---------- */

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


  // Start slideshow for matching images

  document.querySelectorAll("img").forEach(function (image) {

    const originalSrc = image.getAttribute("src");

    if (!originalSrc) return;

    let imagePath;

    try {
      imagePath = new URL(originalSrc, document.baseURI).pathname;
    } catch (error) {
      return;
    }

    const group = Object.entries(photoGroups).find(function ([name, slides]) {
      return slides.includes(imagePath);
    });

    if (!group) return;

    const slides = group[1];

    if (slides.length < 2) return;

    let currentIndex = slides.indexOf(imagePath);

    image.classList.add("auto-slideshow-image");

    image.style.transition = "opacity 1s ease-in-out";

    // Preload slideshow images
    slides.forEach(function (src) {
      const preload = new Image();
      preload.src = src;
    });
    
    
    // Change image every 3 seconds with smooth fade

    window.setInterval(function () {

        const nextIndex = (currentIndex + 1) % slides.length;
        const nextImage = new Image();

        nextImage.onload = function () {

            image.style.opacity = "0";

            window.setTimeout(function () {

                currentIndex = nextIndex;
                image.src = slides[currentIndex];

                requestAnimationFrame(function () {
                    image.style.opacity = "1";
                });

            }, 500);

        };

        nextImage.onerror = function () {
            console.warn("Slideshow image not found:", slides[nextIndex]);
        };

        nextImage.src = slides[nextIndex];

    }, 3000);

  });


  /* ---------- 5. EXTERNAL LINK SECURITY ---------- */

  document.querySelectorAll('a[target="_blank"]').forEach(function (link) {
    link.setAttribute("rel", "noopener noreferrer");
  });


  /* ---------- 6. CURRENT PAGE NAVIGATION ---------- */

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
