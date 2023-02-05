(function () {
  const refreshBtn = document.querySelector(".round_btn_refresh button");
  const submitBtn = document.querySelector(
    '.product_add_model .submit_btn button[type="submit"]'
  );

  refreshBtn.addEventListener("click", () => {
    getAllProductsData();
  });
  submitBtn.addEventListener("click", () => {
    console.log("submit click");
    getAllProductsData();
  });

  const getAllProductsData = () => {
    fetch("../php/getProducts.php")
      .then((response) => response.json())
      .then((data) => {
        let tableBody = document.getElementById("productData");
        let rows = "";
        data.forEach((rowData) => {
          rows += `<tr>
                 <td>${rowData.item_no}</td>
                 <td>${rowData.item_name}</td>
                 <td>${rowData.item_price}</td>
                 <td>${rowData.item_type}</td>
                 <td>${rowData.supplier_id}</td>
                 <td>${rowData.supplier_name}</td>
                 <td>
                <div class="action_btns">
                   <button class="action_edit">
                   <img src="../img/icons/edit.png" alt="product edit">
                   </button>
                   <button class="action_delete">
                   <img src="../img/icons/delete.png" alt="product delete">
                   </button>
                 </td>
                 <div>
               </tr>`;
        });
        tableBody.innerHTML = rows;
      });
  };
  getAllProductsData();
  // document
  //   .querySelector("#productData")
  //   .addEventListener("click", function (e) {
  //     const selectedRow = e.target.closest("tr");
  //     const itemNo = selectedRow.querySelector("td:nth-child(1)").textContent;
  //     const itemName = selectedRow.querySelector("td:nth-child(2)").textContent;
  //     const itemPrice =
  //       selectedRow.querySelector("td:nth-child(3)").textContent;
  //     const itemType = selectedRow.querySelector("td:nth-child(4)").textContent;
  //     const supplierId =
  //       selectedRow.querySelector("td:nth-child(5)").textContent;
  //     const supplierName =
  //       selectedRow.querySelector("td:nth-child(6)").textContent;

  //     if (e.target.classList.contains("action_edit")) {
  //       console.log(itemNo);
  //     } else if (e.target.classList.contains("action_delete")) {
  //       console.log(itemNo);
  //     }
  //   });
})();
