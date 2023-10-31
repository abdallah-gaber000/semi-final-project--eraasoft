let bar_menu = document.querySelector(".bar-menu");
let list = document.querySelector("ul");
bar_menu.addEventListener("click", () => {
  list.classList.toggle("toggle_menu");
});
