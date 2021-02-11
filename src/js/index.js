// change mavbar color after hero

// get  device screenheight
// calculate 65% of screen height
// after user scrolled past 65%, add eventlistener
// change color

// get height of hero

const hero = document.getElementById("header");
const navBar = document.getElementById("navbar");
const target = hero;
const logoWhite = document.getElementById("logoWhite");
const logoBlack = document.getElementById("logoBlack");
const link = document.getElementsByClassName("nav--link");
const options = {
  // root: hero,
  rootMargin: "0px",
  threshold: 0.1,
};
// CHECKS VIEWPORT !! NOT NAV
const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      navBar.classList.add("whiteBar");
      for (let i = 0; i < link.length; i++) {
        link[i].classList.add("blackLinks");
      }
      logoWhite.classList.add("logoDisplay");
      logoBlack.classList.remove("logoDisplay");
    } else {
      navBar.classList.remove("whiteBar");
      for (let i = 0; i < link.length; i++) {
        link[i].classList.remove("blackLinks");
      }
      logoWhite.classList.remove("logoDisplay");
      logoBlack.classList.add("logoDisplay");
    }
  });
}, options);
observer.observe(target);
