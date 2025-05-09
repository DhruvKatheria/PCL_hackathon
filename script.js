// Smooth scroll for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  
  // Contact form message
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const messageBox = document.getElementById("formMessage");
    messageBox.textContent = "Thanks for your message! We'll get back to you soon.";
    messageBox.style.color = "#28a745";
    this.reset();
  });
  
  // Optional: Reveal sections on scroll (basic version)
  const sections = document.querySelectorAll(".section");
  
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(sec => {
      const boxTop = sec.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        sec.classList.add("show");
      }
    });
  };
  
  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);
  