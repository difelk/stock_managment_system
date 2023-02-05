(function () {
  document
    .querySelector(".round_btn_refresh button")
    .addEventListener("click", function (e) {
      e.preventDefault();
      document
        .querySelector(".round_btn_refresh button")
        .classList.toggle("rotate_btn");
    });
})();
