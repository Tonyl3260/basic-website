const button = document.getElementById("btn-change-color");

button.addEventListener("click", () => {
  document.body.classList.toggle("change-color");
});