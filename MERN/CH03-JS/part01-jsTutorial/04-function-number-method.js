"use strict";
console.log("Bài 4: Hàm và các method của number");

// Hàm trong js được chia làm 2 loại chính
// Funtion declaration FD | Funtion Expression FE
// 1. Funtion declaration: khai báo hàm

function handle1() {
  console.log("Tui là hàm được tạo từ Funtion declaration nè");
}

// 2. Funtion Expression (Biểu thức hàm)
// var: lỗi handle2 not function, let: can't access before init
var handle2 = function () {
  console.log("Tui là hàm được tạo từ Funtion Expression nè");
};
// Không cho Hoising
handle2();

// 3. IIFE: immediately invokable function expression
// Nên đặt dấu chấm phẩy trước ;(function handle3 ...)
(function handle3() {
  let a = 10;
  let b = 20;
  console.log(a + b);
})();
// Không có tính tái sử dụng
// IIFE + async await

// CallBack: Gọi lại | Hàm nhận 1 hàm làm đối số (argument)
// funct1(a, funct2) gọi là CallBack | funct2 là CallBackFunction

let handle3 = function () {
  console.log("Aihi Đồ Chó");
};
// CallBack
//setTimeout(function () {
//  console.log("Hello");
//}, 3000);
//
//setTimeout(() => {
//  console.log("Test");
//}, 2000);
// Arrow function là cách viết tắt của FE (Funtion Expression)
// FD | FE | FA có sự khác nhau nhất định về mặt kết quả

// FD
function handle4() {
  console.log(this);
}

// FE
let handle5 = function () {
  console.log(this);
};
// Truoc khi goi ham
// bật ustrict
// FD FE giống nhau, giam this lại trả ra undefined
// Tắt ustrict
// FD FE FA về Window
// FA cho this cút ra ngoai Window
let handle6 = () => {
  console.log(this);
};

handle4();
handle5();
handle6();

// trong js, this là đại diện cho obj đang gọi nó
// FD và FE sẽ giam this(tốt) | nếu có cụ thể obj nào gọi thì giá trị của this sẽ là obj đó
// còn nếu không ai gọi thì this là undefined

// (normalMode thì khong ai gọi nghĩa là Window gọi)

// FA thì luôn sút this ra global (ám chỉ Window)

// vd 2
let person = {
  // prop
  fullName: "Điệp đẹp trai",
  // method: function trong obj - class
  getNameByFd() {
    console.log(this.fullName);
  },
  // this lúc này là undefined
  getNameByFe: function () {
    console.log(this.fullName);
  },
  // this lúc này là undefined
  getNameByFa: () => {
    console.log(this.fullName);
  },
};
person.getNameByFd(); // this là person => person.fullName
person.getNameByFe(); // this là person => person.fullName
person.getNameByFa(); // this về Window => Window.fullName => undefined

// Lời khuyên:
// FD nên dùng làm method trong obj
// FE dùng cho function method bình thường và method có this -> ưu tiên cách này
// FA cho function không có this
//
// Phân biết parameter (tham số) và argument (đối số)
function handle7(a, b = 10) {
  // default parameter
  console.log(a + b);
}

handle7(5, 3);
// 5, 3 là đối số - argument
// a, b đc gọi là tham số parameter
handle7(5);

// Tham số còn lại | Tham số nghỉ | Tham số đợi | rest parameter (không phải spread)

let handle8 = function (a, b, ...c) {
  console.log(a);
  console.log(b);
  console.log(c);
};

handle8(2, 5, 7, 9, 10);

// Ứng dụng, viết hàm nhận vào 1 đống giá trị sô, tính tổng của một đống số đó

let handle9 = (...numList) => {
  let sum = 0;
  numList.forEach((element) => {
    sum += element;
  });
  return sum;
};

console.log(handle9(1, 2, 3, 4, 5, 5));

// Number và method của number
// Khoong ai dùng js để làm app ngân hàng
// vif số trong js chỉ có dạng number
// số nguyên trong js có độ chính xác là 15 số
let x = 9999999999999999; // test 16 số
// ĐỐi với số thập phân thì độ chính xác là 17
x = (0.2 * 10 + 0.1 * 10) / 10;

// Biến nó thành chuỗi
x = Number(0.2 + 0.1).toFixed(1);
console.log(x);
console.log(typeof x);
console.log(2 + "2");
//congoj uu tien ep kieu sang chuoi vaf nối
console.log(2 + "d");
// Phep tinh con lai uu tien pheps toasn
console.log(2 - "d");
console.log(2 - "2"); // "2" tự qua số và trừ
console.log(2 / 0); // Infinitive
console.log(-2 / 0); // -Infinitive

x = 0o7; // Octal
console.log(x);
x = 0xff; // Hex
console.log(x);
x = 10;
// Biến thành chuỗi
x = x.toFixed(0);
console.log(typeof x);
