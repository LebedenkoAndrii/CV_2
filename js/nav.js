window.addEventListener("scroll", function () {
  let nav = document.getElementById("nav");
  let homeSection = document.getElementById("home");
  let homeSectionHeight = homeSection.offsetHeight;

  var secAbout = document.getElementById("about");
  let navHeight = nav.offsetHeight;

  if (window.scrollY >= homeSectionHeight) {
    nav.classList.add("fixed-nav");
    secAbout.style.marginTop = navHeight + "px";
  } else {
    nav.classList.remove("fixed-nav");
    secAbout.style.marginTop = "0px";
  }
});
