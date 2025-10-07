const burger = document.querySelector(".burger-menu");
const mobileNav = document.querySelector(".mobile__nav");

burger.addEventListener("click", function (event) {
  event.stopPropagation();
  mobileNav.classList.toggle("open");
});

document.addEventListener("click", function (event) {
  if (!mobileNav.contains(event.target) && !burger.contains(event.target)) {
    mobileNav.classList.remove("open");
  }
});

function a(str) {
  return function (str1) {
    console.log("это "+str + " "+str1);
  };
}

