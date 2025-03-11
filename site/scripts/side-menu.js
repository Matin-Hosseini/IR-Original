const sidebarMenuItem = document.querySelector(".sidebar-menu__item");
const menuWrapper = document.querySelector(".menu-wrapper");

sidebarMenuItem.addEventListener("click", () => {
  menuWrapper.classList.toggle("open");
});
