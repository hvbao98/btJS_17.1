function addProduct() {
  let name_product = formAdd.nameProduct.value;
  let img_product = formAdd.imgProduct.value;
  let price_product = formAdd.priceProduct.value;
  let describe = formAdd.describeProduct.value;
  let img = img_product.slice(11);
  let html = `<div class="card">
    <div class="phone">Hot</div>
    <div class="tumb">
        <img src="./images/${img}" alt="ảnh iphone 11 promax">
    </div>
    <div class="details">
        <span class="category">${name_product}</span>
        <h4><a href="">${name_product}</a></h4>
        <p>${describe}</p>
        <div class="bottom-details">
            <div class="price">
                <small>$${price_product}</small>$230.99
            </div>
            <div class="links">
                <a href=""><i class="fa-solid fa-heart"></i></a>
                <a href=""><i class="fa-solid fa-cart-shopping"></i></a>
            </div>
        </div>
    </div>
</div>`;
  let app = document.querySelector(".row");
  app.innerHTML += html;
  console.log(img);
}
