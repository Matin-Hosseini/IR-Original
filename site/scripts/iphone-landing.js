const productBoxColors = document.querySelectorAll(".product-box__colors");
const productsSwiperWrapper = document.querySelector(
  ".products-swiper-wrapper"
);
const portal = document.querySelector(".portal");
const productColorsElem = document.querySelector(".product-colors");
const singleProductContent = document.querySelector(".single-product-content");

const colors = [
  { id: 1, name: "Black Titanium", title: "مشکی ", code: "#4F4F4F" },
  { id: 2, name: "Natural Titanium", title: "نچرال", code: "#C2BCB2" },
  { id: 3, name: "Pink", title: "صورتی", code: "#F3B9DF" },
  { id: 4, name: "White", title: "سفید", code: "#F5F5F5" },
  { id: 5, name: "Teal", title: "سبز دودی", code: "#BADCDB" },
  { id: 6, name: "Ultramarine", title: "اطلسی ", code: "#95A7F3" },
  { id: 7, name: "Desert", title: "صحرایی", code: "#FDF0E0" },
  { id: 8, name: "Yellow", title: "زرد", code: "#FDFAE2" },
];

const capacities = [
  { id: 1, amount: "128", unit: "GB" },
  { id: 2, amount: "256", unit: "GB" },
  { id: 3, amount: "512", unit: "GB" },
  { id: 4, amount: "1", unit: "TB" },
];

const partNumbers = [
  { id: 1, name: "CH/A" },
  { id: 2, name: "ZA/A" },
];

const products = [
  {
    id: 1,
    title: "آیفون 16",
    subTitle: "زیبایی، عملکرد و قدرت",
    isNew: true,
    colors: [1, 4, 3, 6, 5],
    price: [
      { id: 1, capacity: 1, partNumber: 2, color: 4, amount: 64_600_000 },
      { id: 2, capacity: 1, partNumber: 2, color: 6, amount: 64_600_000 },
      { id: 3, capacity: 1, partNumber: 2, color: 3, amount: 64_600_000 },
      { id: 4, capacity: 1, partNumber: 2, color: 1, amount: 65_600_000 },
      { id: 5, capacity: 2, partNumber: 2, color: 6, amount: 74_600_000 },
      { id: 6, capacity: 2, partNumber: 2, color: 3, amount: 74_600_000 },
      { id: 7, capacity: 2, partNumber: 2, color: 5, amount: 74_600_000 },
      { id: 8, capacity: 2, partNumber: 2, color: 4, amount: 75_100_000 },
      { id: 9, capacity: 1, partNumber: 1, color: 6, amount: 57_300_000 },
      { id: 10, capacity: 1, partNumber: 1, color: 5, amount: 57_300_000 },
      { id: 11, capacity: 1, partNumber: 1, color: 1, amount: 57_600_000 },
      { id: 12, capacity: 1, partNumber: 1, color: 4, amount: 57_600_000 },
      { id: 13, capacity: 1, partNumber: 1, color: 3, amount: 58_600_000 },
    ],
    img: "iphone-16.png",
    // price: 94_600_000_000,
  },
  {
    id: 2,
    title: "آیفون 16 پرو",
    subTitle: "زیبایی، عملکرد و قدرت",
    isNew: true,
    colors: [1, 7, 2, 4],
    price: [
      { id: 1, capacity: 1, partNumber: 2, color: 7, amount: 79_100_000 },
      { id: 2, capacity: 1, partNumber: 2, color: 4, amount: 79_100_000 },
      { id: 3, capacity: 1, partNumber: 2, color: 2, amount: 79_100_000 },
      { id: 4, capacity: 1, partNumber: 2, color: 1, amount: 79_600_000 },
      { id: 5, capacity: 2, partNumber: 2, color: 7, amount: 83_600_000 },
      { id: 6, capacity: 2, partNumber: 2, color: 4, amount: 83_600_000 },
      { id: 7, capacity: 2, partNumber: 2, color: 2, amount: 83_600_000 },
      { id: 8, capacity: 2, partNumber: 2, color: 1, amount: 85_600_000 },
      { id: 9, capacity: 3, partNumber: 2, color: 7, amount: 100_100_000 },
      { id: 10, capacity: 3, partNumber: 2, color: 4, amount: 106_100_000 },
      { id: 11, capacity: 4, partNumber: 2, color: 7, amount: 116_100_000 },
      { id: 12, capacity: 4, partNumber: 2, color: 1, amount: 121_100_000 },
    ],
    img: "iphone-16-pro.png",
    // price: 94_600_000_000,
  },
  {
    id: 3,
    title: "آیفون 16 پرو مکس",
    subTitle: "زیبایی، عملکرد و قدرت",
    isNew: true,
    colors: [1, 7, 2, 4],
    price: [
      { id: 1, capacity: 2, partNumber: 2, color: 2, amount: 88_600_000 },
      { id: 2, capacity: 2, partNumber: 2, color: 4, amount: 88_600_000 },
      { id: 3, capacity: 2, partNumber: 2, color: 7, amount: 89_100_000 },
      { id: 4, capacity: 2, partNumber: 2, color: 1, amount: 91_100_000 },
      { id: 5, capacity: 3, partNumber: 2, color: 7, amount: 105_600_000 },
      { id: 6, capacity: 3, partNumber: 2, color: 2, amount: 106_600_000 },
      { id: 7, capacity: 3, partNumber: 2, color: 1, amount: 106_600_000 },
      { id: 8, capacity: 3, partNumber: 2, color: 4, amount: 106_600_000 },
      { id: 9, capacity: 4, partNumber: 2, color: 7, amount: 124_600_000 },
      { id: 10, capacity: 4, partNumber: 2, color: 2, amount: 125_600_000 },
      { id: 11, capacity: 4, partNumber: 2, color: 1, amount: 125_600_000 },
      { id: 12, capacity: 4, partNumber: 2, color: 4, amount: 125_600_000 },
    ],
    img: "iphone-16-pro.png",
    // price: 94_600_000_000,
  },
  {
    id: 4,
    title: "آیفون 15",
    subTitle: "زیبایی، عملکرد و قدرت",
    isNew: true,
    colors: [3, 5, 6],
    price: [
      { id: 1, capacity: 1, partNumber: 1, color: 3, amount: 51_300_000 },
      { id: 2, capacity: 1, partNumber: 1, color: 5, amount: 51_600_000 },
      { id: 3, capacity: 1, partNumber: 1, color: 6, amount: 51_600_000 },
      { id: 4, capacity: 2, partNumber: 1, color: 8, amount: 51_600_000 },
      { id: 5, capacity: 2, partNumber: 1, color: 1, amount: 59_100_000 },
      { id: 6, capacity: 2, partNumber: 2, color: 8, amount: 77_600_000 },
      { id: 7, capacity: 2, partNumber: 2, color: 2, amount: 78_600_000 },
      { id: 8, capacity: 3, partNumber: 2, color: 2, amount: 88_600_000 },
      { id: 9, capacity: 4, partNumber: 2, color: 4, amount: 97_100_000 },
      { id: 10, capacity: 2, partNumber: 1, color: 2, amount: 77_600_000 },
    ],
    img: "iphone-16-pro.png",
  },
  {
    id: 5,
    title: "آیفون 15 پرو",
    subTitle: "زیبایی، عملکرد و قدرت",
    isNew: true,
    colors: [3, 5, 6],
    price: [
      { id: 1, capacity: 2, partNumber: 2, color: 6, amount: 77_600_000 },
      { id: 2, capacity: 2, partNumber: 2, color: 2, amount: 78_600_000 },
      { id: 3, capacity: 3, partNumber: 2, color: 2, amount: 88_600_000 },
      { id: 4, capacity: 3, partNumber: 2, color: 1, amount: 88_600_000 },
      { id: 5, capacity: 4, partNumber: 2, color: 4, amount: 97_100_000 },
      { id: 6, capacity: 2, partNumber: 1, color: 2, amount: 77_600_000 },
    ],
    img: "iphone-16-pro.png",
  },
  {
    id: 6,
    title: "آیفون 15 پرو",
    subTitle: "زیبایی، عملکرد و قدرت",
    isNew: true,
    colors: [3, 5, 6],
    price: [
      { id: 1, capacity: 2, partNumber: 2, color: 6, amount: 77_600_000 },
      { id: 2, capacity: 2, partNumber: 2, color: 2, amount: 78_600_000 },
      { id: 3, capacity: 3, partNumber: 2, color: 2, amount: 88_600_000 },
      { id: 4, capacity: 3, partNumber: 2, color: 1, amount: 88_600_000 },
      { id: 5, capacity: 4, partNumber: 2, color: 4, amount: 97_100_000 },
      { id: 6, capacity: 2, partNumber: 1, color: 2, amount: 77_600_000 },
    ],
    img: "iphone-16-pro.png",
  },
];

const handleColors = () => {
  products.forEach((product) => {
    product.colors.forEach((productColorId, index) => {
      colors.forEach((color) => {
        if (productColorId === color.id) {
          product.colors[index] = color;
        }
      });
    });
  });
};

const handlePrice = () => {
  products.forEach((product) => {
    product.price.forEach((price) => {
      capacities.forEach((capacity) => {
        if (price.capacity === capacity.id) {
          price.capacity = `${capacity.amount}${capacity.unit}`;
        }
      });

      partNumbers.forEach((partNumber) => {
        if (price.partNumber === partNumber.id) {
          price.partNumber = partNumber.name;
        }
      });

      colors.forEach((color) => {
        if (price.color === color.id) {
          price.color = color;
        }
      });
    });
  });
};

handleColors();
handlePrice();

const showPortal = () => {
  portal.classList.add("active");
};
const hidePortal = () => {
  portal.classList.remove("active");
};
portal.addEventListener("click", (e) => {
  e.target.classList.contains("portal") && hidePortal();
});

const showDetails = (id) => {
  showPortal();

  const targetProduct = products.find((product) => product.id === id);

  const changeProductColor = (id, index) => {
    const productColorItems = document.querySelectorAll(".product-color");

    productColorItems.forEach((item) => item.classList.remove("active"));
    productColorItems[index].classList.add("active");
  };

  window.changeProductColor = changeProductColor;

  productColorsElem.innerHTML = "";
  productColorsElem.insertAdjacentHTML(
    "beforeend",
    `
      <p>موجود در ${targetProduct.colors.length} رنگ</p>
      <div class="product-colors-wrapper">
        ${targetProduct.colors
          .map(
            (color, index) => `
          <button 
            class="product-color ${index === 0 ? "active" : ""}" 
            onClick="changeProductColor(${color.id}, ${index})"
            >
              <span style="background: ${color.code};"></span>
              ${color.title}
          </button>
          `
          )
          .join("")}
      </div>
    `
  );

  singleProductContent.insertAdjacentHTML(
    "beforeend",
    `
      <h2>${targetProduct.title}</h2>
    `
  );
};

products.forEach((product) => {
  const targetPrice = product.price.reduce((prev, current) =>
    prev.amount < current.amount ? prev : current
  );

  product.targetPrice = targetPrice.amount;
});

products.forEach((product) => {
  productsSwiperWrapper.insertAdjacentHTML(
    "beforeend",
    `
            <div class="swiper-slide">
            <div class="product-box">
              ${
                product.isNew
                  ? `<div class="product-box__badge">جدید</div>`
                  : ""
              }
              <div class="product-box__img text-center">
                <img
                  src="assets/images/apple/${product.img}"
                  alt=""
                />
              </div>
              <div class="product-box__colors my-4">
                ${product.colors
                  .map(
                    (color) =>
                      `
                        <div style="background: ${color.code}">
                          <span>${color.title}</span>
                        </div>
                      `
                  )
                  .join("")}
              </div>
              <div class="product-box__content mb-3">
                <h2 class="product-box__title">${product.title}</h2>
                <h3 class="product-box__subtitle">${product.subTitle}</h3>
              </div>
              <button class="product-box__details-btn" data-bs-toggle="modal" data-bs-target="#product-details-modal"> 
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                مشاهده جزئیات
              </button>
            </div>
          </div>
        `
  );
});

{
  /* <div class="product-box__bottom">
  <button
    class="product-box__details"
    onClick="showDetails(${
                  product.id
                })"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-1"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  </button>
  <div class="product-box__price-wrapper">
    <h4 class="product-box__price">${product.targetPrice.toLocaleString()}</h4>
    <span class="product-box__price-currency">تومان</span>
  </div>
</div>; */
}

let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
let carousel = document.querySelector(".carousel");
let listHTML = document.querySelector(".carousel .list");
let seeMoreButtons = document.querySelectorAll(".seeMore");

nextButton.onclick = function () {
  showSlider("next");
};
prevButton.onclick = function () {
  showSlider("prev");
};
let unAcceppClick;
const showSlider = (type) => {
  nextButton.style.pointerEvents = "none";
  prevButton.style.pointerEvents = "none";

  carousel.classList.remove("next", "prev");
  let items = document.querySelectorAll(".carousel .list .item");
  if (type === "next") {
    listHTML.appendChild(items[0]);
    carousel.classList.add("next");
  } else {
    listHTML.prepend(items[items.length - 1]);
    carousel.classList.add("prev");
  }
  clearTimeout(unAcceppClick);
  unAcceppClick = setTimeout(() => {
    nextButton.style.pointerEvents = "auto";
    prevButton.style.pointerEvents = "auto";
  }, 2000);
};
seeMoreButtons.forEach((button) => {
  button.onclick = function () {
    carousel.classList.remove("next", "prev");
    carousel.classList.add("showDetail");
  };
});

/* --------- tabs starts --------- */

//tab navigation horizontal scroll buttons
const rightBtn = document.querySelector(".right-btn");
const leftBtn = document.querySelector(".left-btn");
const tabMenu = document.querySelector(".tab-menu");
const tabNavBtns = document.querySelectorAll(".tab-navigation i.arrow-icon");
const tabItems = document.querySelectorAll(".tab-btn");

let isDragging = false;

const handleIcons = () => {
  const scrollVal = tabMenu.scrollLeft;

  const maxScrollableWidth = tabMenu.scrollWidth - tabMenu.clientWidth;

  tabNavBtns[0].style.display = scrollVal < 0 ? "flex" : "none";
  tabNavBtns[1].style.display =
    scrollVal === -maxScrollableWidth ? "none" : "flex";
};

tabNavBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabMenu.scrollLeft += btn.id === "left" ? -100 : 100;

    setTimeout(() => handleIcons(), 50);
  });
});

const dragTabMenu = (e) => {
  if (!isDragging) return;

  tabMenu.classList.add("dragging");
  tabMenu.scrollLeft -= e.movementX;
};

const dragStop = () => {
  isDragging = false;
  tabMenu.classList.remove("dragging");
};

tabMenu.addEventListener("mousedown", () => (isDragging = true));
tabMenu.addEventListener("mousemove", (e) => dragTabMenu);
document.addEventListener("mouseup", dragStop);

const tabCotents = document.querySelectorAll(".tab-content");

tabItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    document.querySelector(".tab-btn.active").classList.remove("active");
    item.classList.add("active");

    tabCotents.forEach((content) => content.classList.remove("active"));
    tabCotents[index].classList.add("active");
  });
});

/* --------- tabs ends --------- */

/* loan calculator starts  */

const loanConditions = [
  {
    id: 1,
    lender: "بلوبانک",
    returnMonths: [{ id: 1, amount: 18 }],
    maxPrice: 100,
    interestRate: 23,
  },
  {
    id: 2,
    lender: "بانک ملی",
    returnMonths: [{ id: 1, amount: 36 }],
    grades: [
      {
        id: 1,
        value: "A,B",
      },
    ],
    maxPrice: 200,
    interestRate: 23,
  },
  {
    id: 3,
    lender: "بانک آینده",
    returnMonths: [
      { id: 1, amount: 12 },
      { id: 2, amount: 24 },
      { id: 3, amount: 36 },
    ],
    maxPrice: 200,
    interestRate: 23,
  },
];

const rangeInput = document.querySelector(".range-input");
const loanPrice = document.querySelector("#loan-price");
const loanMin = document.querySelector(".loan-min");
const loanMax = document.querySelector(".loan-max");
const paymentMonthBtns = document.querySelectorAll(".loan-installments button");
const monthlyReturnPriceElem = document.querySelector("#monthlyReturnPrice");
const totalReturnPriceElem = document.querySelector("#totalReturnPrice");

const calculateLoanPayment = (loanPrice, annualInterestRate, returnMonths) => {
  const monthlyInterestRate = annualInterestRate / 12 / 100;

  const monthlyPayment =
    (loanPrice *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, returnMonths)) /
    (Math.pow(1 + monthlyInterestRate, returnMonths) - 1);

  const totalPayment = monthlyPayment * returnMonths;
  const totalInterest = totalPayment - loanPrice;

  return {
    monthlyPayment: +monthlyPayment.toFixed(2),
    totalPayment: +totalPayment.toFixed(2),
    totalInterest: +totalInterest.toFixed(2),
  };
};

const loanPaymentHandler = () => {
  const loanPrice = +rangeInput.value * 1_000_000;
  const returnMonths = +document.querySelector(
    ".loan-installments button.active"
  ).dataset.value;

  const result = calculateLoanPayment(loanPrice, 23, returnMonths);
  monthlyReturnPriceElem.innerHTML = `${result.monthlyPayment.toLocaleString()} تومان`;
  totalReturnPriceElem.innerHTML = `${result.totalPayment.toLocaleString()} تومان`;
};

rangeInput.addEventListener("input", (e) => {
  loanPrice.innerHTML = (+e.target.value * 1000000).toLocaleString();

  loanPaymentHandler();
});

const updateLoanPrice = (value) => {};

paymentMonthBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelector(".loan-installments button.active")
      .classList.remove("active");
    btn.classList.add("active");

    loanConditions.forEach((loan) => {
      loan.returnMonths.forEach((month) => {
        if (month.amount === +btn.dataset.value) {
          loanMax.innerHTML = loan.maxPrice;
          rangeInput.max = loan.maxPrice;

          console.log(loan);

          loanPaymentHandler();
        }
      });
    });
  });
});

/* loan calculator ends  */
const select = document.querySelector(".select");
const selected = document.querySelector(".selected");
const selectMenu = document.querySelector(".select-menu");

const seleectMenuItems = document.querySelectorAll(".select-menu li");

let isSelectMenuOpen = false;

const openSelectMenu = () => {
  select.classList.add("open");
  isSelectMenuOpen = true;
};
const closeSelectMenu = () => {
  select.classList.remove("open");
  isSelectMenuOpen = false;
};
seleectMenuItems.forEach((item) => {
  item.addEventListener("click", () => {});
});

selected.addEventListener("click", () =>
  isSelectMenuOpen ? closeSelectMenu() : openSelectMenu()
);
