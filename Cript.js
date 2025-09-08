// =============================
// Part 2: JavaScript Functions
// =============================

// Global variable
let multiplier = 2;

// Function with parameters & return value
function squareNumber(num) {
  return num * num;
}

// Demonstrating scope: local vs global
function showSquare(num) {
  let localResult = squareNumber(num) * multiplier; // using global variable
  document.getElementById("calc-result").textContent =
    `Square of ${num} × multiplier (${multiplier}) = ${localResult}`;
}

// =============================
// Part 3: Combining CSS + JS
// =============================
const animateBtn = document.getElementById("animateBtn");
const animatedBox = document.getElementById("animatedBox");

function triggerAnimation() {
  // Add animation class dynamically
  animatedBox.classList.add("animate");

  // Remove class after animation ends (so it can be reused)
  animatedBox.addEventListener("animationend", () => {
    animatedBox.classList.remove("animate");
  }, { once: true });
}

// Attach event listener
animateBtn.addEventListener("click", triggerAnimation);
