const subMenu = document.querySelector(".sub-menu");

const subMenuCategories = document.querySelectorAll(
  ".sub-menu__categories .sub-menu__item"
);
const categoryItems = document.querySelectorAll(
  ".sub-menu__category-items > div"
);
const categoryItemsContents = document.querySelectorAll(
  ".sub-menu__category-items > div > div"
);

const subCategoryItems = document.querySelectorAll(
  ".sub-menu__sub-category-items > div"
);

let initialSubMenuWidth = 250;

subMenu.style.width = `${initialSubMenuWidth}px`;

subMenuCategories.forEach((category) => {
  category.addEventListener("mouseenter", () => {
    subMenuCategories.forEach((item) => item.classList.remove("active"));

    category.classList.add("active");

    categoryItemsContents.forEach((item) => item.classList.remove("active"));
    categoryItems.forEach((item) => item.classList.add("hidden"));
    subCategoryItems.forEach((item) => item.classList.add("hidden"));

    subMenu.style.cssText = `
      grid-template-columns: 
      ${initialSubMenuWidth}px ${initialSubMenuWidth}px 0; 
      width: ${initialSubMenuWidth * 2}px
    `;

    document.querySelector(".sub-menu__category-items").style.paddingRight =
      "0.5rem";
    document.querySelector(".sub-menu__sub-category-items").style.paddingRight =
      "0";

    categoryItems.forEach((item) => {
      if (item.dataset.category === category.id) {
        item.classList.remove("hidden");
      }
    });
  });
});

categoryItemsContents.forEach((categoryItem) => {
  categoryItem.addEventListener("mouseenter", () => {
    subCategoryItems.forEach((item) => item.classList.add("hidden"));

    categoryItemsContents.forEach((item) => item.classList.remove("active"));
    categoryItem.classList.add("active");

    subMenu.style.cssText = "grid-template-columns: 1fr 1fr 3fr; width: 100%";

    subCategoryItems.forEach((subCategoryItem) => {
      if (
        categoryItem.dataset.categoryItem ===
        subCategoryItem.dataset.subCategoryItem
      ) {
        subCategoryItem.classList.remove("hidden");
      }
    });

    document.querySelector(".sub-menu__sub-category-items").style.paddingRight =
      "0.5rem";
  });
});
