const btnMenu = document.getElementById("btn-menu");
const closeNav = document.getElementById("close-nav");
const mobileMenu = document.getElementById("mobile-menu");
const menuLinks = document.querySelectorAll(".menu-link");
btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("!hidden");
  closeNav.classList.toggle("!hidden");
  mobileMenu.classList.toggle("hidden");
});

closeNav.addEventListener("click", () => {
  closeNav.classList.toggle("!hidden");
  btnMenu.classList.toggle("!hidden");
  mobileMenu.classList.toggle("hidden");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMobileMenu();
  });
});

const closeMobileMenu = () => {
  mobileMenu.classList.toggle("hidden");
  closeNav.classList.toggle("!hidden");
  btnMenu.classList.toggle("!hidden");
};
