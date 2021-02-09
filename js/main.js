// Navbar For Mobile
function openNav() {
  document.getElementById("fullnav").style.width = "25rem";
}

function closeNav() {
  document.getElementById("fullnav").style.width = "0";
}

// Back to top Button && Sticky Nav
var mybutton = document.getElementById("myBtn");
var nav = document.querySelector(".navbar");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.opacity = "1";
    nav.classList.add("sticky-nav");
  } else {
    mybutton.style.opacity = "0";
    nav.classList.remove("sticky-nav");
  }
}
mybutton.addEventListener("click", topFunction);
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
