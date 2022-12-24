const $menuHeader = document.querySelector(".header__menu");
const $menu = document.querySelector(".header__burger");
const $center = document.querySelector(".header__center");
const $body = document.querySelector("body");

$menu.addEventListener("click", classAdd);
$center.addEventListener("click", classAdd);

function classAdd(event) {
  event.stopPropagation();
  $menuHeader.classList.toggle("active");
  $menu.classList.toggle("active");
  $center.classList.toggle("active");
  $body.classList.toggle("lock");
}
