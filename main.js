const darkModeButton = document.getElementById("btn-change-color");

darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("change-color");
});