const startButton = document.querySelector(".lantern__btn");
const bodyRoot = document.querySelector("body");

startButton.addEventListener("click", lanternPrinter);

function lanternPrinter() {
  let lanternCount = prompt("Сколько фонарикова нарисовать?");
  document.querySelectorAll(".lantern").forEach(lantern => lantern.remove());
  for (let i = 0; i < lanternCount; i++) {
    createLantern();
  }
}

function createLantern() {
  let newLantern = document.createElement("button");
  newLantern.classList.add("lantern");
  newLantern.style.background = getRandomColor();
  bodyRoot.append(newLantern);
}

function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
