function category() {
    var product = document.querySelector(".category_loop");

    var myHTML = ``

    for (var i = 0; i < 9; i++) {
        myHTML += `
        <div class="col-sm-6 col-md-4 col-lg-4">
        <div class="category_select_item">
          <a href="#">
            <div class="img_large">
              <div class="category_select_img">
                <img
                  src="assets/images/category/image 130.png"
                  alt=""
                />
              </div>
            </div>
            <div class="category_select_name">Bồn cầu</div>
          </a>
        </div>
      </div>`;
    }

    product.innerHTML = myHTML
}
category();

function brands() {
    var product = document.querySelector(".brands_loop");

    var myHTML = ``

    for (var i = 0; i < 8; i++) {
        myHTML += `
        <div class="col-12 col-md-6 col-lg-6">
                            <div class="logo_items">
                              <div class="logo_brand_1">
                                <a href="#"><img
                                  src="assets/images/brands/image 86.png"
                                  alt=""
                                /></a>
                              </div>
                              <div class="logo_brand_2">
                                <a href="#"><img
                                  src="assets/images/brands/image 90.png"
                                  alt=""
                                /></a>
                              </div>
                              <div class="logo_brand_3">
                                <a href="#"><img
                                  src="assets/images/brands/image 94.png"
                                  alt=""
                                /></a>
                              </div>
                            </div>
                          </div>`;
    }

    product.innerHTML = myHTML
}
brands();

function product_new() {
    var product = document.querySelector(".loop_product_new");

    var myHTML = ``

    for (var i = 0; i < 12; i++) {
        myHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="product_new_items">
          <a href="#">
            <div class="div_img">
              <div class="product_new_img">
                <img src="assets/images/product/image 6.png" alt="" />
              </div>
            </div>
            <div class="product_new_name">
              <p>Chậu lavabo treo tường chân đứng Viglacera ...</p>
            </div>
          </a>
          <div class="product_new_price">
            <span class="price">
              <ins>
                <span>4.500.000</span>
              </ins>
              &nbsp;
              <del>
                <span>5.500.000</span>
              </del>
            </span>
          </div>
        </div>
      </div>`;
    }

    product.innerHTML = myHTML
}
product_new();

function category_product() {
    var product = document.querySelector(".loop_category_product");

    var myHTML = ``

    for (var i = 0; i < 8; i++) {
        myHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="product_new_items">
          <a href="#">
            <div class="div_img">
              <div class="product_new_img">
                <img src="assets/images/product/image 6.png" alt="" />
              </div>
            </div>
            <div class="product_new_name">
              <p>Chậu lavabo treo tường chân đứng Viglacera ...</p>
            </div>
          </a>
          <div class="product_new_price">
            <span class="price">
              <ins>
                <span>4.500.000</span>
              </ins>
              &nbsp;
              <del>
                <span>5.500.000</span>
              </del>
            </span>
          </div>
        </div>
      </div>`;
    }

    product.innerHTML = myHTML
}
category_product();

function loop_news() {
    var product = document.querySelector(".loop_news");

    var myHTML = ``

    for (var i = 0; i < 3; i++) {
        myHTML += `
        <div class="col-12 col-md-4">
                  <div class="news_item">
                    <div class="news_item_img">
                      <img src="assets/images/news/Rectangle 26.png" alt="" />
                    </div>
                    <div class="news_item_title">
                      <p>
                        71 thiết kế phòng tắm nhỏ đẹp, nhà tắm đẹp đơn giản
                        quyến rũ bất ngờ
                      </p>
                    </div>
                    <p class="date_post">30/6/2022</p>
                    <div class="news_item_desc">
                      <p>
                        Diện tích mà gia đình bạn dành để cho phòng tắm chỉ có
                        giới hạn? Bạn đang không nắm chắc vấn đề thiết kế nội
                        thất sao cho hợp lý? Sử dụng vật liệu trang trí phòng
                        tắm ra sao?
                      </p>
                    </div>
                  </div>
                </div>`;
    }

    product.innerHTML = myHTML
}
loop_news();

