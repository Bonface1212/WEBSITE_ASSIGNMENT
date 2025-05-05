document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const moonIcon = document.querySelector(".fa-moon");
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    const typedText = document.getElementById("typed-text");
  
    // Roles for typing effect
    const roles = [
      "Web Developer",
      "Photographer",
      "Videographer",
      "Graphic Designer",
      "Digital Marketer"
    ];
  
    let roleIndex = 0;
    let charIndex = 0;
    let typingForward = true;
  
    // Set saved theme from localStorage
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
    }
  
    // Toggle theme and save preference
    if (moonIcon) {
      moonIcon.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");
        localStorage.setItem("theme", isDark ? "dark" : "light");
      });
    }
  
    // Typing animation effect
    function typeRole() {
      if (!typedText) return;
  
      const currentRole = roles[roleIndex];
      if (typingForward) {
        typedText.textContent = currentRole.substring(0, charIndex++);
        if (charIndex > currentRole.length) {
          typingForward = false;
          setTimeout(typeRole, 1000); // Pause before deleting
          return;
        }
      } else {
        typedText.textContent = currentRole.substring(0, charIndex--);
        if (charIndex < 0) {
          typingForward = true;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      setTimeout(typeRole, typingForward ? 100 : 50);
    }
  
    typeRole(); // Start typing effect
  
    // Hamburger menu toggle for mobile
    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });
    }
  });
  