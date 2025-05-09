// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Reveal sections on scroll
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

// Contact form encryption + submission
document.getElementById("smartForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const plainData = { name, email, message };

  fetch("https://script.https://script.google.com/macros/s/AKfycbzyyIXdzkCMwOz0FJWzistmt9JN5UK1Rl0qm-bBsESiUb4lfcnE0d6Uwp01-IDeg4nR/exec.com/macros/s/PASTE_YOUR_WEBAPP_URL_HERE/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(plainData)
  })
  .then(() => {
    alert("Form submitted successfully!");
    document.getElementById("smartForm").reset();
  })
  .catch((error) => {
    alert("Submission failed.");
    console.error("Error:", error);
  });
});
