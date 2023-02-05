(function () {
  // input fields
  const itemNoValue = document.querySelector(
    '.product_add_model input[name="itemNo"]'
  );
  const itemNameInput = document.querySelector(
    '.product_add_model input[name="itemName"]'
  );
  const itemPriceInput = document.querySelector(
    '.product_add_model input[name="itemPrice"]'
  );
  const itemTypeInput = document.querySelector(
    '.product_add_model select[name="itemType"]'
  );
  const supplierIDInput = document.querySelector(
    '.product_add_model input[name="itemSupID"]'
  );
  const supplierNameInput = document.querySelector(
    '.product_add_model select[name="itemSupName"]'
  );

  //   error labels

  const itemNoError = document.querySelector(".product_add_model .er_itemNo");
  const itemNameError = document.querySelector(
    ".product_add_model .er_itemName"
  );
  const itemPriceError = document.querySelector(
    ".product_add_model .er_itemPrice"
  );
  const itemTypeError = document.querySelector(
    ".product_add_model .er_itemType"
  );
  const supplierIDError = document.querySelector(
    ".product_add_model .er_itemSupID"
  );
  const supplierNameError = document.querySelector(
    ".product_add_model .er_itemSupName"
  );

  const resetForm = () => {
    itemNoValue.value = "";
    itemNameInput.value = "";
    itemPriceInput.value = "";
    supplierIDInput.value = "";
  };

  document
    .querySelector(".product_add_model .close_btn button")
    .addEventListener("click", () => {
      resetForm();
    });

  document
    .getElementById("productFormSubmit")
    .addEventListener("click", function (event) {
      event.preventDefault();

      if (!itemNoValue.value) {
        itemNoError.innerHTML = "Item Number is required";
      } else {
        itemNoError.innerHTML = "";
      }

      if (!itemNameInput.value) {
        itemNameError.innerHTML = "Item Name is required";
      } else {
        itemNameError.innerHTML = "";
      }

      if (!itemPriceInput.value) {
        itemPriceError.innerHTML = "Item price is required";
      } else {
        itemPriceError.innerHTML = "";
      }

      if (!supplierIDInput.value) {
        supplierIDError.innerHTML = "Supplier ID is required";
      } else {
        supplierIDError.innerHTML = "";
      }

      if (
        !itemNoError.innerHTML &&
        !itemNameError.innerHTML &&
        !itemPriceError.innerHTML &&
        !supplierIDError.innerHTML
      ) {
        console.log("form submited!");
      } else {
      }
    });

  document
    .querySelector("#productData")
    .addEventListener("click", function (e) {
      const selectedRow = e.target.closest("tr");
      const itemNo = selectedRow.querySelector("td:nth-child(1)").textContent;
      const itemName = selectedRow.querySelector("td:nth-child(2)").textContent;
      const itemPrice =
        selectedRow.querySelector("td:nth-child(3)").textContent;
      const itemType = selectedRow.querySelector("td:nth-child(4)").textContent;
      const supplierId =
        selectedRow.querySelector("td:nth-child(5)").textContent;
      const supplierName =
        selectedRow.querySelector("td:nth-child(6)").textContent;

      if (e.target.classList.contains("action_edit")) {
        itemNoValue.value = itemNo;
        itemNameInput.value = itemName;
        itemPriceInput.value = itemPrice;
        supplierIDInput.value = supplierId;
      } else if (e.target.classList.contains("action_delete")) {
      }
    });
})();
