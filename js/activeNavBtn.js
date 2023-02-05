const navList = document.querySelectorAll(".dashboard_nav_links_wrapper ul li");
const parentNav = document.querySelector("#inventory_nav");
const childNavs = document.querySelectorAll(".sub_nav");

const removeActive = () => {
  navList.forEach((item, i) => {
    item.classList.remove("active_link");
  });
};

const addActive = () => {
  navList.forEach((item, i) => {
    item.addEventListener("click", () => {
      removeActive();
      item.classList.add("active_link");
    });
  });
};
addActive();

parentNav.addEventListener("click", () => {
  const liItems = parentNav.children;
  childNavs.forEach((item, i) => {
    item.classList.toggle("sub_nav_disabled");
  });
});
