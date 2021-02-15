const hero = document.getElementById("header");
const navBar = document.getElementById("navbar");
const target = hero;
const logoWhite = document.getElementById("logoWhite");
const logoBlack = document.getElementById("logoBlack");
const link = document.getElementsByClassName("nav--link");
const menuWhite = document.getElementById("whiteBox");
const menuBlack = document.getElementById("blackBox");
const options = {
  // root: hero,
  rootMargin: "0px",
  threshold: 0.1,
};
// CHECKS VIEWPORT !! NOT NAV -- Changes navbar desktop
const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      navBar.classList.add("whiteBar");
      for (let i = 0; i < link.length; i++) {
        link[i].classList.add("blackLinks");
        link[i].classList.remove("nav--link--whiteBorder");
        link[i].classList.add("nav--link--blackBorder");
      }
      logoWhite.classList.add("logoDisplay");
      logoBlack.classList.remove("logoDisplay");
      menuWhite.classList.add("hidden");
      menuBlack.classList.remove("hidden");
    } else {
      navBar.classList.remove("whiteBar");
      for (let i = 0; i < link.length; i++) {
        link[i].classList.remove("blackLinks");
        link[i].classList.add("nav--link--whiteBorder");
        link[i].classList.remove("nav--link--blackBorder");
      }
      logoWhite.classList.remove("logoDisplay");
      logoBlack.classList.add("logoDisplay");
      menuWhite.classList.remove("hidden");
      menuBlack.classList.add("hidden");
    }
  });
}, options);
observer.observe(target);
// navbar mobile
// get vw
// show mobile nav
// on click slide out navbar
