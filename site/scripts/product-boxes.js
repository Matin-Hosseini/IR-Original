const productBoxesSwiper = document.querySelector(".product-boxes-swiper");

const products = [
  {
    id: 1,
    title: "آیفون 16 پرو مکس",
    startingPrice: 118_000_000,
    img: "iphone-16-promax.png",
  },
  {
    id: 2,
    title: "سامسونگ S24 اولترا",
    startingPrice: 79_900_000,
    img: "samsung-s25-ultra.png",
  },
  {
    id: 3,
    title: "اپل واج سری 10",
    startingPrice: 79_900_000,
    img: "apple-watch-seri-10.png",
  },
  {
    id: 4,
    title: "ایر پادز 4",
    startingPrice: 12_300_000,
    img: "airpods-4.png",
  },
  {
    id: 5,
    title: "پلی استیشن 5",
    startingPrice: 41_300_000,
    img: "ps-5.png",
  },
  {
    id: 5,
    title: "دسته پلی استیشن",
    startingPrice: 5_600_000,
    img: "dualsense.png",
  },
];

productBoxesSwiper.innerHTML = `
    ${products
      .map(
        (product) => `
            <div class="swiper-slide">
                <div class="product-box">
                <div class="product-box__header">
                    <h2 class="product-box__title">${product.title}</h2>
                </div>

                <div>
                    <img 
                        src="assets/images/product-box/${product.img}" 
                        alt="${product.title}"
                    />
                </div>

                <div class="product-box_footer">
                    <div class="product-box__price">
                    <div class="">
                        <span class="price-from">از</span>
                        <p class="new-price">${product.startingPrice.toLocaleString()} تومان</p>
                    </div>
                    </div>

                    <button class="product-box__add-to-cart">
                    <svg>
                        <use href="#cart-add"></use>
                    </svg>
                    </button>
                </div>
                </div>
            </div>
        `
      )
      .join("")}
`;

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: false,

  //   slidesPerView: 5,
  breakpoints: {
    576: {
      slidesPerView: 1.6,
    },
    768: {
      slidesPerView: 2.5,
    },
    992: {
      slidesPerView: 2.5,
    },
    1400: {
      slidesPerView: 3.5,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  spaceBetween: 20,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
