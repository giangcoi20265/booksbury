var indicator = document.querySelector(".nav-indicator");
var items = document.querySelectorAll(".header-menu__link");
function handleIndicator(el) {
  items.forEach(function (item) {
    item.classList.remove("is-active");
    item.removeAttribute("style");
  });
  indicator.style.width = "".concat(el.offsetWidth, "px");
  indicator.style.left = "".concat(el.offsetLeft, "px");
  indicator.style.backgroundColor = el.getAttribute("active-color");
  el.classList.add("is-active");
  el.style.color = el.getAttribute("active-color");
}
items.forEach(function (item, index) {
  item.addEventListener("focus", function (e) {
    handleIndicator(e.target);
  });

  item.classList.contains("is-active") && handleIndicator(item);
});

var navBar = document.querySelector(".header-menu__sub-menu");
var lastItem = document.querySelector(".header-menu__link-last");


