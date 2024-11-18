const productBoxColors = document.querySelectorAll(".product-box__colors");
const productsSwiperWrapper = document.querySelector(
  ".products-swiper-wrapper"
);

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
    id: 2,
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
    id: 2,
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
    id: 2,
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
    id: 2,
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

const showDetails = (id) => {
  console.log("details", id);
};

products.forEach((product) => {
  const targetPrice = product.price.reduce((prev, current) =>
    prev.amount < current.amount ? prev : current
  );

  product.targetPrice = targetPrice.amount;
});

console.log(products);

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
              <div class="product-box__bottom">
                <button class="product-box__details" onClick="showDetails(${
                  product.id
                })">
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
              </div>
            </div>
          </div>
        `
  );
});
