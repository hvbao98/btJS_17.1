var id = 0;

function sell() {
  id++;
  //khai bao
  var pnname = form_pro.name_sp.value;
  var qty = form_pro.quanlity.value;
  var price_sp = form_pro.price.value;
  var dc = form_pro.discount.value;
  var sub = qty * price_sp * (1 - dc / 100);
  var err = "Hãy nhập đầy đủ thông tin ";
  var row = "<tr>";
  //ktra dieu kien da nhap hay chua
  if (pnname && qty && price_sp && dc) {
    row += "<td>" + id + "</td>";
    row += "<td>" + pnname + "</td>";
    //ktra  khong dc nhap so am
    if (price_sp !== "" && dc !== "") {
      price_sp = parseFloat(price_sp);
      dc = parseFloat(dc);
      if (
        !isNaN(price_sp) &&
        price_sp >= 0 &&
        !isNaN(dc) &&
        dc >= 0 &&
        !isNaN(qty) &&
        qty >= 0
      ) {
        row += "<td>$" + price_sp + "</td>";
        row += "<td>" + dc + "</td>";
        row += "<td>" + qty + "</td>";
      } else {
        alert(" không nhận giá trị âm ");
      }
    } else {
      alert("Vui lòng nhập lại giá trị ");
    }
    row += "<td>$" + sub + "</td>";
    row += "</tr>";
    document.getElementById("tag-table").innerHTML += row;
  } else {
    alert(err);
  }
}
