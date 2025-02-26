let lastScrollTop = 0;
const asphaltCar = document.querySelector(".asphalt__car");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    asphaltCar.style.rotate = "0deg";
  } else if (scrollTop < lastScrollTop) {
    asphaltCar.style.rotate = "-180deg";
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
