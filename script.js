onload = () => {
  document.body.classList.remove("container");

  const popup = document.getElementById("popup");

  // Show popup automatically
  popup.style.display = "flex";

  // Small delay so animation triggers properly
  setTimeout(() => {
    popup.classList.add("auto-show");
  }, 100);
};

function showMessage() {
  const popup = document.getElementById("popup");
  popup.style.display = "flex";

  setTimeout(() => {
    popup.classList.add("auto-show");
  }, 10);
}

function closeMessage() {
  const popup = document.getElementById("popup");

  // Stop shaking
  popup.classList.remove("auto-show");

  popup.style.display = "none";
}

/* =========================
   FIRELIES GENERATOR
========================= */

const container = document.querySelector(".fireflies");
const numberOfFireflies = 70;

for (let i = 0; i < numberOfFireflies; i++) {
  const firefly = document.createElement("div");
  firefly.classList.add("firefly");

  firefly.style.left = Math.random() * 100 + "vw";

  const duration = 8 + Math.random() * 12;
  firefly.style.animation = `
    floatUp ${duration}s linear infinite,
    flicker ${2 + Math.random() * 3}s ease-in-out infinite alternate
  `;

  firefly.style.animationDelay = Math.random() * 10 + "s";

  const size = 3 + Math.random() * 4;
  firefly.style.width = size + "px";
  firefly.style.height = size + "px";

  container.appendChild(firefly);
}
