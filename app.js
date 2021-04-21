const burger = document.querySelector("#burger");
const closeButton = document.querySelector("#close");
const menu = document.querySelector(".menu");
var toggle = false;
var size = 0;

function showMenu() {
  burger.addEventListener("click", function () {
    menu.classList.toggle("closing");
    burger.classList.toggle("fas fa-times");
    // burger.toggleAttribute();
  });
}

showMenu();

// ANIMATIONS

window.onload = function () {
  var lady = document.querySelector("#lady");
  var headerText = document.querySelector("#header-text");

  // Lady animation
  if (window.innerWidth >= 500 && window.innerWidth <= 740) {
    lady.style.marginLeft = "0px";
    // horizontalScroll();
  } else if (window.innerWidth >= 741 && window.innerWidth <= 1200) {
    lady.style.marginLeft = "100px";
    // horizontalScroll();
  } else if (window.innerWidth >= 1200 && window.innerWidth <= 1700) {
    lady.style.marginLeft = "320px";
    size = 1200;
  } else if (window.innerWidth >= 1701) {
    lady.style.marginLeft = "620px";
  }
  lady.style.opacity = "1";
  // Header text animation
  // headerText.style.marginRight = "";
};

// Horizontal Scroll ??

const slider = document.querySelector(".advokatene");
const preventClick = (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();
};
let isDown = false;
let isDragged = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", (e) => {
  isDown = false;
  const elements = document.querySelectorAll("a");
  if (isDragged) {
    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener("click", preventClick);
    }
  } else {
    for (let i = 0; i < elements.length; i++) {
      elements[i].removeEventListener("click", preventClick);
    }
  }
  slider.classList.remove("active");
  isDragged = false;
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  isDragged = true;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});

// Horizontal click and drag scroll end
