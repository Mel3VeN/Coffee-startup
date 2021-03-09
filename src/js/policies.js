const body = document.querySelector("body");
const burgerOpen = document.getElementById("blackBox");
const navBar = document.getElementById("navbar");
const mobileNav = document.getElementById("mobileNav");
burgerOpen.addEventListener("click", function () {
  mobileNav.classList.add("slideIn");
  body.classList.add("stop-scrolling");
  navBar.classList.add("hidden");
});

const menuClose = document.getElementById("navClose");
menuClose.addEventListener("click", function () {
  mobileNav.classList.remove("slideIn");
  body.classList.remove("stop-scrolling");
  navBar.classList.remove("hidden");
});
