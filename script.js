"use strict";

// 스크롤 시 메뉴 고정
window.addEventListener("scroll", stickyNavbar);
function stickyNavbar() {
  let navbar = document.querySelector(".navbar");
  if (this.scrollY > 20) {
    navbar.classList.add("sticky");
  } else if (this.scrollY == 0) navbar.classList.remove("sticky");
}

// 메뉴 버튼 클릭 시 확장
let menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", toggleMenu);
function toggleMenu(e) {
  let menu = document.querySelector(".menu");
  menu.classList.toggle("active");
  let menuIcon = menuBtn.querySelector("i");
  menuIcon.classList.toggle("active");
}
