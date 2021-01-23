"use strict";

window.addEventListener("scroll", func);
function func(e) {
  let header = document.querySelector(".header");
  if (this.scrollY > 56) {
    header.style.position = "fixed";
  } else if (this.scrollY == 0) header.style.position = "relative";
}
