// ===== Scroll Reveal on Elements =====
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.2 });

reveals.forEach(el => observer.observe(el));

// ===== FAQ Accordion =====
const accordions = document.querySelectorAll(".accordion-item");

accordions.forEach(item => {
  const header = item.querySelector(".accordion-header");
  header.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// ===== Mobile Nav Toggle =====
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// ===== Testimonial Carousel =====
const testimonials = document.querySelectorAll(".testimonial");
let index = 0;

function showNextTestimonial() {
  testimonials.forEach(t => t.classList.remove("visible"));
  testimonials[index].classList.add("visible");
  index = (index + 1) % testimonials.length;
}
setInterval(showNextTestimonial, 5000); // every 5 seconds

// ===== Back-to-Top Button =====
const backToTop = document.getElementById("backToTop");
window.onscroll = () => {
  backToTop.style.display = window.scrollY > 400 ? "block" : "none";
};

backToTop.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
