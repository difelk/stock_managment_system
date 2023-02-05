(function () {
  // const companyLogo = document.querySelector(".add_img button");
  const centerSec = document.querySelector(".content_body");
  const imgUpModel = document.querySelector(".img_upload_model");
  const closeBtnModel = document.querySelector(
    ".img_upload_model_wrapper .close_btn button"
  );

  const productCloseBtn = document.querySelector(
    ".confirmation_cancel_btn .cencel_btn"
  );

  const deleteCloseBtn = document.querySelector(".product_delete_model button");

  const closeAnyModel = document.querySelector(
    ".model_wrapper .close_btn button"
  );

  const productAddModelBtn = document.querySelector(".product_add button");
  const productAddForm = document.querySelector(".product_add_model");

  const productTableActionBtn = document.querySelector("#productData");

  const productTableDeleteModel = document.querySelector(
    ".product_delete_model"
  );

  const dislapyModel = (model) => {
    closeModel();
    let grayCover = document.createElement("div");

    grayCover.className = "gray_cover";
    grayCover.style.position = "fixed";
    grayCover.style.top = "0";
    grayCover.style.left = "0";
    grayCover.style.right = "0";
    grayCover.style.bottom = "0";
    grayCover.style.width = "100%";
    grayCover.style.height = "100%";
    grayCover.style.backgroundColor = "rgba(33, 33, 33, 0.83)";
    grayCover.style.zIndex = "0";
    document.body.appendChild(grayCover);
    if (model) {
      grayCover.appendChild(model);
      model.classList.remove("hide");
    }
    document.querySelector(".content_body").appendChild(grayCover);
    grayCover.addEventListener("click", () => {});
  };

  const closeModel = () => {
    let grayCoverDiv = centerSec.getElementsByClassName("gray_cover")[0];
    if (grayCoverDiv) centerSec.removeChild(grayCoverDiv);
  };

  document
    .querySelector(".add_img button")
    .addEventListener("click", () => dislapyModel(imgUpModel));
  if (productAddModelBtn) {
    productAddModelBtn.addEventListener("click", () =>
      dislapyModel(productAddForm)
    );
  }
  if (closeBtnModel) {
    closeBtnModel.addEventListener("click", () => {
      closeModel();
    });
  }

  if (closeAnyModel) {
    closeAnyModel.addEventListener("click", () => {
      closeModel();
    });
  }

  if (productCloseBtn)
    productCloseBtn.addEventListener("click", (e) => {
      e.preventDefault();
      closeModel();
    });

  // product edit and delete btn click
  if (productTableActionBtn) {
    productTableActionBtn.addEventListener("click", function (e) {
      e.preventDefault();
      if (e.target.classList.contains("action_edit")) {
        dislapyModel(productAddForm);
      } else if (e.target.classList.contains("action_delete")) {
        dislapyModel(productTableDeleteModel);
      }
    });
  }
  if (deleteCloseBtn)
    deleteCloseBtn.addEventListener("click", () => {
      closeModel();
    });
})();
