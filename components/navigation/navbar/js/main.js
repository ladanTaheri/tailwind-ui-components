const navbarMenu = document.querySelector(".navbar-menu");
const navbarToggler = document.querySelector(".navbar-toggler");

if (navbarMenu && navbarToggler) {
  navbarToggler.addEventListener("click", displayTogglerMenu);
}
function displayTogglerMenu() {
  navbarMenu.classList.toggle("hidden");
  navbarMenu.classList.toggle("flex");
}
