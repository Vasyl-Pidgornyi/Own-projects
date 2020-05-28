const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");

window.onload = function start() {
  this.setInterval(runTheLight, 4000);
};

function runTheLight() {
  green.classList.remove("active");
  red.classList.add("active");
  setTimeout(() => {
    red.classList.remove("active");
    yellow.classList.add("active");
  }, 1000);
  setTimeout(() => {
    yellow.classList.remove("active");
    green.classList.add("active");
  }, 2000);
}
