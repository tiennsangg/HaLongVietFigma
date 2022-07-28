function loop_watched_product() {
    var product = document.querySelector(".loop_watched_product");

    var myHTML = ``

    for (var i = 0; i < 8; i++) {
        myHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="product_new_items">
          <a href="#">
            <div class="div_img">
              <div class="product_new_img">
                <img
                  src="assets/images/product/image 6.png"
                  alt=""
                />
              </div>
            </div>
            <div class="product_new_name">
              <p>
                Chậu lavabo treo tường chân đứng Viglacera ...
              </p>
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
loop_watched_product();