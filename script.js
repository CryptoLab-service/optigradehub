document.addEventListener("DOMContentLoaded", () => {
  // ===== Scroll Reveal Animation =====
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.2 });
  reveals.forEach(el => observer.observe(el));

  // ===== FAQ / Accordion Toggle =====
  document.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      item.classList.toggle("active");
    });
  });

  // ===== Mobile Navbar Toggle =====
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  menuToggle?.addEventListener("click", () => {
    navLinks?.classList.toggle("show");
  });

  // ===== Testimonial Carousel =====
  const testimonials = document.querySelectorAll(".testimonial");
  let index = 0;
  const rotateTestimonials = () => {
    testimonials.forEach(t => t.classList.remove("visible"));
    testimonials[index].classList.add("visible");
    index = (index + 1) % testimonials.length;
  };
  let carouselInterval = setInterval(rotateTestimonials, 5000);

  const carousel = document.querySelector(".carousel");
  carousel?.addEventListener("mouseenter", () => clearInterval(carouselInterval));
  carousel?.addEventListener("mouseleave", () => {
    carouselInterval = setInterval(rotateTestimonials, 5000);
  });

  // ===== Sticky Navbar Scroll Effect =====
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    navbar?.classList.toggle("scrolled", window.scrollY > 80);
  });

  // ===== Back-to-Top Button =====
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 400 ? "block" : "none";
  });
  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
