const imgFile = document.querySelector("#file-upload");
const imgFieleError = document.querySelector(".file_type_error");

imgFile.onchange = function () {
  var file = this.files[0];
  var fileType = file.type;
  var validImageTypes = ["image/jpeg", "image/png"];
  if (validImageTypes.indexOf(fileType) < 0) {
    imgFieleError.innerText = "Only .png and .jpg images are allowed.";
    this.value = "";
  } else if (fileSize > 5 * 1024 * 1024) {
    imgFieleError.innerText =
      "File size exceeds 5MB. Please select a smaller file.";
    this.value = "";
    return;
  } else {
    imgFieleError.innerText = "";
  }
};
