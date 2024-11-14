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
];

const products = [
  {
    id: 1,
    title: "آیفون 16 پرو",
    subTitle: "دیگه ته تهش!",
    price: 94600000000,
    isNew: true,
    colors: [1, 2],
    img: "",
  },
  {
    id: 2,
    title: "آیفون 15 پرو",
    subTitle: "داریم میرسیم تهش",
    price: 58000000000,
    isNew: false,
    colors: [1, 2],
    img: "",
  },
];

const showDetails = (id) => {
  console.log("details", id);
};

products.forEach((product) => {
  productsSwiperWrapper.insertAdjacentHTML(
    "beforeend",
    `
            <div class="swiper-slide">
            <div class="shadow product-box">
              ${
                product.isNew
                  ? `<div class="product-box__badge">جدید</div>`
                  : ""
              }
              <div class="product-box__img text-center">
                <img
                  src="assets/images/apple/iphone_16pro__erw9alves2qa_xlarge.png"
                  alt=""
                />
              </div>
              <div class="product-box__colors my-4">
              <span style="background"></span>
               
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
                  <h4 class="product-box__price">${product.price.toLocaleString()}</h4>
                  <span class="product-box__price-currency">تومان</span>
                </div>
              </div>
            </div>
          </div>
        `
  );
});
