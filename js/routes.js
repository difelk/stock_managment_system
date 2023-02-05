const sideBarnavigation = document.querySelectorAll(
  ".dashboard_nav_links_wrapper ul li"
);
const filePath = "../pages/";

const handleRedirectPages = (selectedNavLink) => {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", `${filePath}${selectedNavLink}`, true);
  xhr.onreadystatechange = function () {
    if (this.readyState === XMLHttpRequest.DONE) {
      if (this.status === 200) {
        document.querySelector(".content_body .wrapper").innerHTML =
          this.responseText;
        switch (selectedNavLink) {
          case "product.php":
            handleProductScripts();
            break;
          default:
        }
      } else {
        var xhr404 = new XMLHttpRequest();
        xhr404.open("GET", `${filePath}404.html`, true);
        xhr404.onreadystatechange = function () {
          if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            document.querySelector(".content_body .wrapper").innerHTML =
              this.responseText;
          }
        };
        xhr404.send();
      }
    }
  };
  xhr.send();
};

const handleDefault = () => {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", `${filePath}dashboard.php`, true);
  xhr.onreadystatechange = function () {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      document.querySelector(".content_body .wrapper").innerHTML =
        this.responseText;
    }
  };
  xhr.send();
};

document.addEventListener("DOMContentLoaded", function () {
  handleDefault();
});

sideBarnavigation.forEach((item, i) => {
  item.addEventListener("click", () => {
    let isAvalidRoute = true;
    item.classList.forEach((classItem, i) => {
      if (classItem.includes("group_nav")) {
        isAvalidRoute = false;
      }
    });
    if (isAvalidRoute) {
      let selectedNavLink = item.innerText
        .toLowerCase()
        .replace(" ", "_")
        .concat(".php");
      handleRedirectPages(selectedNavLink);
      console.log();
      displayHeaderTitle(item.innerText.toUpperCase());
    } else {
    }
  });
});

const displayHeaderTitle = (text) => {
  document.querySelector("#display_header_text h5").innerHTML = text;
};

const handleProductScripts = () => {
  let productScriptTable = document.createElement("script");
  productScriptTable.src = "../js/product.js";
  document.head.appendChild(productScriptTable);

  let productScriptForms = document.createElement("script");
  productScriptForms.src = "../js/formChanges.js";
  document.head.appendChild(productScriptForms);

  let buttonStylesScriptForms = document.createElement("script");
  buttonStylesScriptForms.src = "../js/buttonStyles.js";
  document.head.appendChild(buttonStylesScriptForms);

  let modelStylesScriptForms = document.createElement("script");
  modelStylesScriptForms.src = "../js/model.js";
  document.head.appendChild(modelStylesScriptForms);

  let getProductsScript = document.createElement("script");
  getProductsScript.src = "../js/data/products.js";
  document.head.appendChild(getProductsScript);

  let getProductsValidationScript = document.createElement("script");
  getProductsValidationScript.src =
    "../js/validations/productFormValidation.js";
  document.head.appendChild(getProductsValidationScript);
};
