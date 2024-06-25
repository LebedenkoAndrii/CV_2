window.addEventListener("scroll", function () {
  let nav = document.getElementById("nav");
  let menu = document.getElementById("nav-btn");
  let homeSection = document.getElementById("home");
  let homeSectionHeight = homeSection.offsetHeight;

  var secAbout = document.getElementById("about");
  let navHeight = nav.offsetHeight;

  if (window.scrollY >= homeSectionHeight) {
    nav.classList.add("fixed-nav");
    menu.classList.add("fixed-nav-btn");
    secAbout.style.marginTop = navHeight + "px";
  } else {
    nav.classList.remove("fixed-nav");
    menu.classList.remove("fixed-nav-btn");
    secAbout.style.marginTop = "0px";
  }

  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
    let navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("open");
  }
});

document.getElementById("nav-btn").addEventListener("click", function () {
  let navMenu = document.getElementById("nav-menu");
  this.classList.toggle("open");
  navMenu.classList.toggle("hidden");
  navMenu.classList.toggle("flex");
});

const navItems = document.querySelectorAll("#menu-nav-item");
navItems.forEach((item) => {
  item.addEventListener("click", function () {
    let navMenu = document.getElementById("nav-menu");
    this.classList.toggle("open");
    navMenu.classList.toggle("hidden");
    navMenu.classList.toggle("flex");
  });
});
