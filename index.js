"use strict";
const menuBurger = document.querySelector(".menu-burger");
const iconBurger = document.querySelector(".menu-icon");
const linksBurger = document.querySelectorAll('.link-burger-menu');
if (iconBurger) {
  iconBurger.addEventListener("click", function (e) {
    document.body.classList.toggle("lock");
    iconBurger.classList.toggle("active");
    menuBurger.classList.toggle("active");
  });
}
function closeMenu() {
  document.body.classList.remove("lock");
  iconBurger.classList.remove("active");
  menuBurger.classList.remove("active");
}

linksBurger.forEach(e => e.addEventListener('click', closeMenu));
