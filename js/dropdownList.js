const dorpdownBtn = document.querySelector(".profile_section img");
const dropdownList = document.querySelector(".profile_dropdown");

const anywhere = document.querySelector(".dashboard_content");
const navSec = document.querySelector(".dashboard_nav");
const dropdownListbox = document.querySelector(".profile_dropdown");
const contentArea = document.querySelector(".content_body");

const dropDownsPrnt = document.querySelectorAll(".dropddown_section");
const dropDownsChildDropDown = document.querySelectorAll(".dropdown_list");

navSec.addEventListener("click", () => {
  clearDropdowns();
});

contentArea.addEventListener("click", () => {
  clearDropdowns();
});

const clearDropdowns = () => {
  dropDownsChildDropDown.forEach((item, i) => {
    item.classList.add("hide");
  });
};

dropDownsPrnt.forEach((item, i) => {
  item.addEventListener("click", () => {
    clearDropdowns();
    console.log(item);
    dropDownsChildDropDown[i].classList.remove("hide");
  });
});
