// Smooth tilt effect on hover
document.querySelectorAll("[data-tilt]").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / 15) * -1;
    const rotateY = (x - centerX) / 15;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
});

// Subtle glowing animation for tags when hovered
const tags = document.querySelectorAll(".edu-tags span");
tags.forEach(tag => {
  tag.addEventListener("mouseenter", () => {
    tag.style.boxShadow = "0 0 15px rgba(0, 255, 255, 0.8)";
  });
  tag.addEventListener("mouseleave", () => {
    tag.style.boxShadow = "none";
  });
});

// Fade-in effect when scrolled into view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});
document.querySelectorAll(".edu-card").forEach(card => observer.observe(card));
