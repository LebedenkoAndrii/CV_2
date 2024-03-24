window.addEventListener("scroll", function () {
  var nav = document.getElementById("nav");
  var homeSection = document.getElementById("home");
  var homeSectionHeight = homeSection.offsetHeight;

  if (window.scrollY >= homeSectionHeight) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
});
