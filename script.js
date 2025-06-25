document.addEventListener("DOMContentLoaded", () => {
  // Scroll Reveal on Elements
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.2 });
  reveals.forEach(el => observer.observe(el));

  // FAQ Accordion
  document.querySelectorAll(".accordion-item").forEach(item => {
    const header = item.querySelector(".accordion-header");
    header?.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });

  // Mobile Nav Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  menuToggle?.addEventListener("click", () => {
    navLinks?.classList.toggle("show");
  });

  // Testimonial Carousel
  const testimonials = document.querySelectorAll(".testimonial");
  let index = 0;
  const rotateTestimonials = () => {
    testimonials.forEach(t => t.classList.remove("visible"));
    testimonials[index].classList.add("visible");
    index = (index + 1) % testimonials.length;
  };
  let carouselInterval = setInterval(rotateTestimonials, 5000);

  // Optional: pause carousel on hover
  const carousel = document.querySelector(".carousel");
  carousel?.addEventListener("mouseenter", () => clearInterval(carouselInterval));
  carousel?.addEventListener("mouseleave", () => {
    carouselInterval = setInterval(rotateTestimonials, 5000);
  });

  // Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

  // Back-to-Top Button
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (backToTop) {
      backToTop.style.display = window.scrollY > 400 ? "block" : "none";
    }
  });

  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
