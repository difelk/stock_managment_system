<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <link rel="stylesheet" href="../css/dashboard.css">
  <link rel="stylesheet" href="../css/form.css">
  <link rel="stylesheet" type="text/css" href="../css/login.css">
  <link rel="stylesheet" type="text/css" href="../css/model.css">
</head>

<body>

  <div class="admin_content_wrapper">
    <div class="admin_content_control">
      <div class="search_wrapper">
        <div class="filter">
          <form class="filter_form" action="index.html" method="post">

            <div class="sort_option mt-5 d-flex">
              <label for="sort">Sort by:</label>
              <select name="sort" id="sort_prodcts">
                <option value="item_no">Item No</option>
                <option value="item_Name">Item Name</option>
                <option value="item_Price">Item Price</option>
                <option value="item_ID">Supplier ID</option>
              </select>
              <div class="round_btn_refresh">
                <button type="button">
                  <img src="../img/icons/refresh.png" alt="">
                </button>
              </div>
              <!-- <label for="search" class="ml-4">SEARCH</label>
              <input type="search" name="search" value="">
              <p class="error_msg er_search"></p>
              <button type="button" name="button" class="primary_btn">SEARCH</button> -->
              <div class="">

              </div>
            </div>

          </form>
        </div>
      </div>
      <div class="product_add add_option">
        <button type="button" name="button" class="primary_btn fs_sm left_icon_btn">
          <img src="../img/icons/plus.png" alt="">
          ADD NEW PRODUCT</button>
      </div>
    </div>

    <!-- add form -->

    <div class="product_add_model model_container hide">
      <div class="model_wrapper">
        <div class="close_btn">
          <button type="button" name="button"> <img src="../img/icons/close.png" alt=""> </button>
        </div>
        <div class="form_wrapper">
          <div class="form_model_header_title">
            <h5>ADD NEW PRODUCT</h5>
          </div>
          <form action="">
            <div class="input_group space_top_24">
              <label for="itemNo" class="ml-4">ITEM NO</label>
              <input type="text" name="itemNo" value="">
              <p class="error_msg er_itemNo"></p>
            </div>

            <div class="input_group space_top_24">
              <label for="itemName" class="ml-4">ITEM NAME</label>
              <input type="text" name="itemName" value="">
              <p class="error_msg er_itemName"></p>
            </div>


            <div class="input_group space_top_24">
              <label for="itemPrice" class="ml-4">ITEM PRICE</label>
              <input type="text" name="itemPrice" value="">
              <p class="error_msg er_itemPrice"></p>
            </div>


            <div class="select_group space_top_8 space_bottom_8">
              <label for="itemType" class="ml-4 lb_active">ITEM TYPE</label>
              <select type="text" name="itemType" value="">
                <option value="val1">VALUE 001</option>
                <option value="val2">VALUE 002</option>
                <option value="val3">VALUE 003</option>
                <option value="val4">VALUE 004</option>
              </select>
              <p class="error_msg er_itemType"></p>
            </div>


            <div class="input_group space_top_40">
              <label for="itemSupID" class="ml-4">SUPPLIER ID</label>
              <input type="text" name="itemSupID" value="">
              <p class="error_msg er_itemSupID"></p>
            </div>

            <div class="select_group space_top_8 space_bottom_8">
              <label for="itemSupName" class="ml-4 lb_active">SUPPLIER NAME</label>
              <select type="text" name="itemSupName" value="">
                <option value="val1">VALUE 001</option>
                <option value="val2">VALUE 002</option>
                <option value="val3">VALUE 003</option>
                <option value="val4">VALUE 004</option>
              </select>
              <p class="error_msg er_itemSupName"></p>
            </div>


            <div class="login_sub_btn submit_btn space_top_24">
              <button type="submit" class="primary_btn" id="productFormSubmit">Submit</button>
            </div>

          </form>
        </div>
      </div>
    </div>


    <!-- delete model -->

    <div class=" product_delete_model model_container hide">
      <div class="model_wrapper">
        <div class="close_btn">
          <button type="button" name="button"> <img src="../img/icons/close.png" alt="close model button icon">
          </button>
        </div>
        <div class="confirmation_wrapper">
          <div class="confirmation_header">
            <h5>Are you sure delete this reacord?</h5>
            <p>if you delete the record you can't recover it.</p>
          </div>
          <div class="confirmation_btn_wrapper">
            <div class="confirmation_cancel_btn">
              <button type="button" class="cencel_btn">Cancel</button>
              <button type="button" class="delete_btn">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div class="admin_table_wrapper">
      <table>
        <thead>
          <tr>
            <th>Item No</th>
            <th>Item Name</th>
            <th>Item Price</th>
            <th>Item Type</th>
            <th>Supplier ID</th>
            <th>Supplier Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="productData">
        </tbody>
      </table>
    </div>
  </div>
  <script src="../js/formChanges.js" charset="utf-8"></script>
  <script src="../js/product.js" charset="utf-8"></script>
  <script src="../js/data/Products.js" charset="utf-8"></script>
  <script src="../js/validations/productFormValidation.js" charset="utf-8"></script>
</body>

</html>