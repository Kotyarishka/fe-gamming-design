const navbar = document.querySelector(".nav-content");
const button = document.querySelector("#toggle-navbar");

button.addEventListener("click", (e) => {
  e.preventDefault();

  navbar.classList.toggle("show");
});
