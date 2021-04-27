"use strict";

// 스크롤 시 메뉴 고정
window.addEventListener("scroll", stickyNavbar);
function stickyNavbar() {
  let navbar = document.querySelector(".navbar");
  if (this.scrollY > 20) {
    navbar.classList.add("sticky");
  } else if (this.scrollY == 0) navbar.classList.remove("sticky");

  let scrollBtn = document.querySelector(".scroll-up-btn");
  if (this.scrollY > 500) scrollBtn.classList.add("show");
  else scrollBtn.classList.remove("show");
}

// scroll top 버튼
let scrollBtn = document.querySelector(".scroll-up-btn");
scrollBtn.addEventListener("click", scrollToTop);
function scrollToTop() {
  window.scroll(0, 0);
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

/* carousel script */
$(".carousel").owlCarousel({
  margin: 20,
  loop: true,
  autoPlayTimeOut: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 3,
      nav: false,
    },
  },
});
