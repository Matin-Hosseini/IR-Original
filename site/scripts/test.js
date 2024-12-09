const tabsmenu = document.querySelector(".tab-menu");
const arrows = document.querySelectorAll(".arrow-icon");

const leftArrow = document.querySelector("#left");
const rightArrow = document.querySelector("#right");

left.addEventListener("click", () => {
  tabsmenu.scrollLeft -= 100;
});
rightArrow.addEventListener("click", () => {
  tabsmenu.scrollLeft += 100;
});

// arrows.forEach((icon) => {
//   icon.addEventListener("click", () => {
//     tabsmenu.scrollLeft += icon.id === "left" ? -100 : 100;
//   });
// });

let isDragging = false;

const dragTabs = (e) => {
  if (!isDragging) return;

  tabsmenu.scrollLeft -= e.movementX;
  tabsmenu.classList.add("dragging");
};

const dragStop = () => {
  isDragging = false;
  tabsmenu.classList.remove("dragging");
};

tabsmenu.addEventListener("mousedown", () => (isDragging = true));
tabsmenu.addEventListener("mousemove", dragTabs);
document.addEventListener("mouseup", dragStop);
