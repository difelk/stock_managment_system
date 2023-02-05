(function () {
  const tableBody = document.getElementById("productData");

  const data = [
    {
      column1: "PD001",
      column2: "Item name 01",
      column3: "120.00",
      column4: "Item Type 01",
      column5: "SSD001",
      column6: "Kalinga Chamith",
    },
    {
      column1: "PD002",
      column2: "Item name 02",
      column3: "75.00",
      column4: "Item Type 02",
      column5: "SSD002",
      column6: "Dilshan Fernando",
    },
    {
      column1: "PD003",
      column2: "Item name 03",
      column3: "600.00",
      column4: "Item Type 03",
      column5: "SSD003",
      column6: "Senuda Kenula",
    },
    {
      column1: "PD004",
      column2: "Item name 04",
      column3: "200.00",
      column4: "Item Type 04",
      column5: "SSD004",
      column6: "Aaron Senarath",
    },
    {
      column1: "PD005",
      column2: "Item name 05",
      column3: "150.00",
      column4: "Item Type 05",
      column5: "SSD005",
      column6: "Wiroshan Perera",
    },
  ];

  for (const item of data) {
    const row = document.createElement("tr");

    for (const key in item) {
      const cell = document.createElement("td");
      cell.textContent = item[key];
      row.appendChild(cell);
    }

    const buttonCell = document.createElement("td");

    let actionBtns = document.createElement("div");
    actionBtns.classList.add("action_btns");

    let actionEdit = document.createElement("button");
    actionEdit.classList.add("action_edit");

    let editImage = document.createElement("img");
    editImage.src = "../img/icons/edit.png";

    actionEdit.appendChild(editImage);

    let actionDelete = document.createElement("button");
    actionDelete.classList.add("action_delete");

    let deleteImage = document.createElement("img");
    deleteImage.src = "../img/icons/delete.png";

    actionDelete.appendChild(deleteImage);

    actionBtns.appendChild(actionEdit);
    actionBtns.appendChild(actionDelete);

    actionEdit.addEventListener("click", (e) => {
      console.log("edit event  of btn - ", item);
    });

    actionDelete.addEventListener("click", (e) => {
      console.log("delete event of btn - ", item);
    });

    buttonCell.appendChild(actionBtns);

    row.appendChild(buttonCell);

    tableBody.appendChild(row);
  }
})();
