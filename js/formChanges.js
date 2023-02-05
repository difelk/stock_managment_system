(function () {
  const allGroupInputs = document.querySelectorAll(".input_group input");
  const allGroupLabels = document.querySelectorAll(".input_group label");

  const allGroupSelect = document.querySelectorAll(".select_group select");
  const allGroupSelectsLabels = document.querySelectorAll(
    ".select_group label"
  );

  // product add btn

  const productAddModelBtn = document.querySelector(".product_add button");

  const removeActiveLBStyles = () => {
    allGroupLabels.forEach((item, i) => {
      if (allGroupInputs[i].value) {
        item.classList.add("lb_active");
      } else {
        item.classList.remove("lb_active");
        item.style.animation = "lb_deactive_move_inside 1s";
      }
    });
  };

  const onEditFormOpen = () => {
    // removeActiveLBStyles();
    console.log("length - ", allGroupLabels.length);
    allGroupLabels.forEach((item, i) => {
      console.log("value - ", allGroupInputs[i].value);
      if (allGroupInputs[i].value) {
        item.classList.add("lb_active");
      }
    });
  };

  allGroupInputs.forEach((item, i) => {
    //input onfocus
    item.addEventListener("focus", (e) => {
      e.preventDefault();
      removeActiveLBStyles();
      allGroupLabels[i].style.animation = null;
      allGroupLabels[i].classList.add("lb_active");
    });

    // input lost focus
    item.addEventListener("blur", (e) => {
      e.preventDefault();
      removeActiveLBStyles();
    });
  });

  allGroupSelect.forEach((item, i) => {
    //input onfocus
    item.addEventListener("focus", (e) => {
      e.preventDefault();
      removeActiveLBStyles();
      allGroupSelectsLabels[i].style.animation = null;
      allGroupSelectsLabels[i].classList.add("lb_active");
    });

    // input lost focus
    item.addEventListener("blur", (e) => {
      e.preventDefault();
      removeActiveLBStyles();
    });
  });

  // product edit btn click
  document
    .querySelector("#productData")
    .addEventListener("click", function (e) {
      if (e.target.classList.contains("action_edit")) {
        console.log("edit clicked");
        onEditFormOpen();
      } else if (e.target.classList.contains("action_delete")) {
      }
    });

  // product add btn click
  if (productAddModelBtn) {
    productAddModelBtn.addEventListener("click", () => {
      removeActiveLBStyles();
    });
  }
})();
