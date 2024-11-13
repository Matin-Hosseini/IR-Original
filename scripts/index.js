import Num2persian from "../vendor/NumberToText.js";

const periodBtns = document.querySelectorAll(".price-period-btns button");

const swiper = new Swiper(".price-swiper", {
  //   slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 5,

  breakpoints: {
    290: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },

    992: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".price-swiper__next",
    prevEl: ".price-swiper__prev",
  },
});

document.querySelectorAll(".swiper-slide").forEach((slide, index) => {
  slide.addEventListener("click", () => {
    swiper.slideTo(index);
  });
});

periodBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    periodBtns.forEach((btn) => btn.classList.remove("price-period--active"));
    btn.classList.add("price-period--active");
  });
});

const priceInput = document.querySelector("#price");
const setHelperText = (input, message, isError = false) => {
  const helperMessageElem = document.querySelector(
    `.text-field:has(input#${input.id})~.helper-text`
  );

  helperMessageElem.innerHTML = `${message} تومان`;
  helperMessageElem.style.visibility = "visible";

  if (isError) {
    input.classList.add("error");
  } else {
    input.classList.remove("error");
  }
};

priceInput.addEventListener("input", (e) => {
  const number = parseFloat(priceInput.value.replace(/,/g, ""));
  console.log(isNaN(number));

  priceInput.value = !isNaN(number) ? number.toLocaleString() : "0";

  setHelperText(priceInput, Num2persian(number));
});
