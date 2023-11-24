// Bài 1
/*
Đầu vào: Lương 1 ngày: 100.000, Số ngày làm
   
Cách xử lý: lương nhân viên = lương 1 ngày * số ngày làm

Đầu ra: tiền lương của nhân viên theo số ngày làm
*/
document.querySelector(".salaryBtn").onclick = function () {
  var dayWork = document.getElementById("dayWork").value * 1;
  var salary = dayWork * 100000;
  document.querySelector(".salaryWork").innerHTML =
    "Tiền lương của bạn là " + salary.toLocaleString('it-IT', {
      style: "currency",
      currency: "VND",
    });
};

// Bài 2
/*
Đầu vào: 5 số thực 

Cách xử lý: tính giá trị trung bình 5 số thực = (tổng 5 số thực) / 5

Đầu ra: giá trị trung bình 5 số thực
*/

document.querySelector(".averageBtn").onclick = function () {
  var number1 = document.querySelector(".number1").value * 1;
  var number2 = document.querySelector(".number2").value * 1;
  var number3 = document.querySelector(".number3").value * 1;
  var number4 = document.querySelector(".number4").value * 1;
  var number5 = document.querySelector(".number5").value * 1;
  var averageNumber = (number1 + number2 + number3 + number4 + number5) / 5;
  document.querySelector(".average").innerHTML =
    "Giá trị trung bình của 5 số là " + averageNumber;
};

// Bài 3
/*
Đầu vào: giá tiền USD hiện nay = 23.500, số tiền USD

Cách xử lý: tiền VND = số tiền USD * giá tiền USD hiện nay

Đầu ra: số tiền USD sau khi quy đổi sang tiền VND
*/
document.querySelector(".changeMoneyBtn").onclick = function () {
  var moneyUSD = document.getElementById("usd").value * 1;
  var moneyVND = moneyUSD * 23500;
  document.querySelector(".moneyVND").innerHTML =
    "Số tiền vnd sau khi quy đổi là " +
    moneyVND.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
};

// Bài 4
/*
Đầu vào: chiều dài, chiều rộng của hình chữ nhật

Cách xử lý: chu vi hình chữ nhật = (chiều dài + chiều rộng) * 2, diện tích hình chữ nhật = chiều dài * chiều rộng

Đầu ra:  chu vi, diện tích hình chữ nhật
*/

document.querySelector(".caculateRectangle").onclick = function () {
  var widthRectangle = document.getElementById("widthRectangle").value * 1;
  var heightRectangle = document.getElementById("heightRectangle").value * 1;
  var chuViHCN = (widthRectangle + heightRectangle) * 2;
  var dienTichHCN = widthRectangle * heightRectangle;
  document.querySelector(".rectangle").innerHTML =
    "Chu vi hình chữ nhật là " +
    chuViHCN +
    "<br />" +
    "Diện tích hình chữ nhật là " +
    dienTichHCN;
};

// Bài 5
/*
Đầu vào: số có 2 chữ số

Cách xử lý: tổng 2 ký số = số hàng đơn vị + số hàng chục, số hàng đơn vị = số có 2 chữ số chia lấy dư với 10, số hàng chục = số có 2 chữ số chia với 10 làm tròn xuống

Đầu ra:  tổng 2 ký số
*/

document.querySelector(".sumBtn").onclick = function () {
  var digitNumber = document.getElementById("digitNumber").value * 1;
  var hangDonVi = digitNumber % 10;
  var hangChuc = Math.floor(digitNumber / 10);

  if (digitNumber >= 10 && digitNumber <= 99) {
    var tong2KySo = hangDonVi + hangChuc;
    document.querySelector(".tong2KySo").innerHTML =
      "Tổng 2 ký số là " + tong2KySo;
  } else {
    document.querySelector(".tong2KySo").innerHTML =
      "Vui lòng nhập lại. Bạn cần nhập số có 2 chữ số";
  }
};
