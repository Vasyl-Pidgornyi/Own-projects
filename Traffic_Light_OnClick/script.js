const lights = document.querySelectorAll(".lighter__light");

function disableAll() {
  for (let i = 0; i < lights.length; i++) lights[i].classList.remove("active");
}

function onClick(button) {
  disableAll();
  button.classList.add("active");
}
