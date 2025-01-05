//  mob show /hide nav menu

const navMenu = document.querySelector(".nav__menu");
const navOpenBtn = document.querySelector("#open-menu-btn");
const navCloseBtn = document.querySelector("#close-menu-btn");

const openNavHandler = () => {
  navMenu.style.display = "flex";
  navOpenBtn.style.display = "none";
  navCloseBtn.style.display = "inline-block";
};

const closeNavHandler = () => {
  navMenu.style.display = "none";
  navOpenBtn.style.display = "inline-block";
  navCloseBtn.style.display = "none";
};

navOpenBtn.addEventListener("click", openNavHandler);
navCloseBtn.addEventListener("click", closeNavHandler);

// smooth scrolling