// Phải thuộc lỗi
"use strict";
console.log("05-objectMethod-this-Function-hof-bind.js");

// 1. Object: đối tượng
// tất cả những gì sở được, đếm được thì là đối tượng
// Các đối tượng (Object) có thể được miêu tả bằng thuộc tính (prop)
// Các đối tượng còn có hoạt động đặc trưng method (phương thức)
// Hàm ở ngoài thì gọi là function, hàm trong Object gọi là method

let promotionBoy1 = {
  nickName: "Lê Mười Điệp", // prop
  // method: function

  // FD
  sayHi() {
    console.log("Ahihi queoj lựa quẹo lựa");
  },

  // FE
  sayHi1: function () {
    console.log("Ahihi quẹo lựa quẹo lựa");
  },

  // FA
  sayHi1: () => {
    console.log("Ahihi quẹo lựa quẹo lựa");
  },
};

// Bởi vì cả 3 method trên đều không có this nên không có khác biệt
// và trên thực thế FD FE cũng không khác nhau quá nhiều về mặt lý thuyết
// và khi tạo method thì nta dùng FD
// nếu phải viết function thì nên chọn FE | FA (nếu không có this)
//
// ta có thể thêm prop hay method sau khi đã tạo Object
promotionBoy1.money = 2000;
promotionBoy1.chuiKhach = function () {
  console.log("Under the hood k được thì cook");
};

// Dựa vào hoisting mình hoàn toàn có thể thêm prop và prop chứa function(method) và một Object đã được tạo trước đó
// Nâng cao 1 tí
// this trong method là gì ?
// Object > method > this
let promotionBoy2 = {
  nickName: "Lê Mười Điệp", // prop
  // method

  // FD
  showName() {
    console.log("nickName nè: " + this.nickName); // this là gì ? -> undefined
  },

  // FE
  showName1: function () {
    console.log("nickName nè: " + this.nickName);
  },

  // FA
  showName2: () => {
    console.log("nickName nè: " + this.nickName);
  },
};

// this chỉ có giá trị khi runtime, khi mà hàm được gọi thì this mới có giá trị
// this được xác định bằng Object đang gọi method chứa nó
// Nếu không có người gọi thì phải xem mode
promotionBoy2.showName(); // fd this là promotionBoy2 => this.promotionBoy2
// Lê Mười Điẹp
promotionBoy2.showName1(); // fe giống fd
promotionBoy2.showName2(); // fa luôn sút this => this về window => window.nickName -> undefined

// Khi viết method thì không nên dùng FA vì nó không this (trong method rất hay có this)
// Nâng cao 1 tí
// Điều gì xảy ra nếu this nằm trong function của method trong Object
// Object > method > function > this
//let promotionBoy3 = {
//  nickName: "Lê Mười Điệp",
//  // FD
//  showName() {
//    let arrow = () => {
//      console.log("nickName: " + this.nickName);
//    };
//    arrow();
//  },
//
//  // FD
//  showName1() {
//    let expression = function () {
//      console.log("nickName: " + this.nickName);
//    };
//    expression();
//  },
//};
//console.log();
//promotionBoy3.showName1(); //m:fd > fe > this
// this được xác định là Object gọi nó
// FE là 1 hàm giữ this lại
// Nhung trong trường hợp này không có ai gọi hàm FE cả thì mình phải xét theo mode
// mode đầu tiên là 'use strict'
//                ustrict               |  normal
// this là undefined                    | this là windown
// undefined.nickName                   | window.nickName
// Looix: can't read prop of undefined  | kq: undefined

//promotionBoy3.showName(); //m:FD > FA > this (Gọi chế độ nào cũng đúng)
// FA vô cùng ghét this, dù ở mode nào thì cũng sút this đi
// Nhưng may mắn là FA nằm trong m:FD (giữ this lại)
// Vậy this sẽ là người gọi m:fd
// heen quá có người gọi m:fd nên ở mode nào thì cũng là người đó
// this là promotionBoy3 => promotionBoy3.nickName => Lê Mười Điệp
// Nếu cần xài 1 hàm bên trong 1 method thì nên dùng FA
// Nang cao thêm 1 ti
// this trong function của callback nằm trong method của Object thì làm sao
// Object > method > callback(callbackfn > this)

let promotionBoy4 = {
  nickName: "Lê Mười Điệp",
  // FD
  showName() {
    let arrow = () => {
      console.log("nickName: " + this.nickName);
    };
    setTimeout(arrow, 3000);
  },

  // FD
  showName1() {
    let expression = function () {
      console.log("nickName: " + this.nickName);
    };
    setTimeout(expression, 3000);
  },
};

// settimeout xài callbackfn như đang xài ở lớp chứa nó
// Nâng cao 1 tí
// Tại sao phải dùng this

let promotionBoy5 = {
  nickName: "Lê Mười Điệp",

  // FD
  showName() {
    console.log("nickName nè " + this.nickName);
  },
};

promotionBoy5.showName();
let promotionBoy6 = promotionBoy5;
promotionBoy5 = null;
promotionBoy6.showName();

// Phần khó nhất
// Nâng cao: HOF (học theo kiểu What)

// Higher order function - Kĩ thuật xử lý hàm bậc cao
// 1. callback: hàm nhận vào 1 hàm làm đối số (argument)
// 2. closure: hàm trả về 1 hàm khác
// 3. curying: Kỹ thuật chuyển đổi 1 hàm có nhiều parameter thành nhiều hàm liên tiếp có parameter
//
// Viết hàm nhận vào 2 số, trả ra tổng 2 số đó

//let sumDemo = function (a, b) {
//  return a + b;
//};

//sumDemo = (a, b) => a + b;
// HOF
//let sumDemo = (a) => {
//  return (b) => {
//    return a + b;
//  };
//};
// Viết tắt hàm trên
//sumDemo = (a) => (b) => a + b;
//
//sumDemo(5)(7);
// curying là hệ quả của closure
// HOF: có 3 khái niệm
// 1. callback: hàm nhận 1 hàm làm đối số argument (khi đang chạy) lúc build là parameter

console.log();
const array1 = [1, 2, 3, 4, 5];
array1.forEach((val) => {
  console.log(val);
});

// 2.closure
// 2.1 lexical scoping: hàm con xài biến của hàm cha
// 2.2 closure: hàm trả ra 1 hàm
// ứng dụng tạo ra 1 hàm mà mỗi lần gọi nó thì nó trả ra một con số mới không trùng với con số cũ để làm key tự tăng

const initIdentity = () => {
  let newID = 0;
  return () => {
    return ++newID;
  };
}; // closure

// Xài sai cách
console.log("Xài sai cách");
console.log(initIdentity()); // () => ++newID bật trình duyệt để thấy
console.log(initIdentity()()); // 1
console.log(initIdentity()()); // vẫn là 1

// Xài đúng
console.log("Xài đúng cách");
let demoClosure = initIdentity(); // () => ++newID
console.log(demoClosure()); // 1
console.log(demoClosure()); // 2
console.log(demoClosure()); // 3
console.log(demoClosure()); // 4
console.log(demoClosure()); // 5

// 3.curying: kỹ thuật chuyển đổi từ 1 func thành nhiêu parameter thành nhiều func liên tiếp có parameter

// Bài tập ứng dụng
// Viết 1 hàm xử lý 3 bài toán sau
// Tìm các số từ 0 đến 10 là số lẻ
// Tìm các số từ 0 đến 20 là số chẵn
// Tìm các số từ 0 đến 30 là số chia 3 dư 2
// Gợi ý: callback

let handle = (end, checkNumberFn) => {
  let result = [];
  for (let i = 0; i <= end; ++i) {
    if (checkNumberFn(i)) {
      result.push(i);
    }
  }
  return result;
};
console.log(handle(10, (number) => number % 2 != 0));
console.log(handle(10, (number) => number % 2 == 0));
console.log(handle(10, (number) => number % 3 == 2));
// về làm bài tập

// call apply bind
const people = {
  // FD
  print(age, localtion) {
    console.log(this.fullname + " " + age + " " + localtion);
  },
};

people.print(25, "TPHCM");
// this ? people 25 TPHCM
// people.fullname =>  undefined
// ta có thể bẻ cong đường dẫn của this bằng call apply và bind

const diep = {
  fullname: "Điệp 10 điểm",
};
// call(obj, ... parameter cũ)
people.print.call(diep, 25, "TPHCM");
// apply (obj, [...parameter cũ])
people.print.apply(diep, [25, "TPHCM"]);
// bind
people.print.bind(diep)(25, "TPHCM");
people.print.bind(diep, 25, "TPHCM")();

// Ứng dụng bind
let promotionBoy7 = {
  nickName: "Lê Mười Điệp",
  showName() {
    let expression = function () {
      console.log(this.nickName);
    }.bind(this);

    expression();
  },
};

promotionBoy7.showName();

// datetime
// Thời gian trong js là obj | dựa vào milisecond
// được tình 1/1/1970 theo chuẩn utc
// có 4 cách khởi tạo

let a = new Date();
a = new Date("2024-8-17");
a = new Date(2024, 7, 17, 13, 45, 0, 0);
// y m - 1 / d/ h / m / s / sm
console.log(a);
// getDate()        : lấy ngày trong tháng
// getDay()         : lấy ngày trong tuần (0: chủ nhật - 6:thứ 7);
// getFullYear()    : lấy năm
// getHours()       : lấy giờ 0-23
// getMilliseconds(): lấy mili giây (0-999)
// getMinutes()     : lấy về phút (0-59)
// getMonth()       : lấy về tháng (0 -11)
// getSeconds()     : lấy về giây (0-59)
// toISOString()    : lấy định dạng thời gian chuẩn

//dùng để bỏ vào DBI/ vì các ngôn ngữ trình duyệt khác
//đểu có thể chuyển từ ISO này về dạng bth được

// windowsObject (WO) là đại diện cho cửa sổ trình duyệt
// taast cả các global obj, func, biến mà tạo bằng var thì đều là method | prop của wo

// ngay cả DOM cũng là của window
console.log(window.innerHeight);
console.log(window.innerWidth);

setTimeout(() => {
  window.open("http://www.dimtutac.com", "_blank", "width = 500, heigh = 700");
}, 3000);
// Đọc cơ chế window hook để làm qc phim đen

// window.localtion
// href = protocal + hostname /pathname
//
// trình duyệt cung cấp 3 loại popup
alert("Máy tính của bạn bị nhiễm HIV");
//let result = confirm(
//  "Bạn đã dính virus, bạn muốn tải phần mềm diệt virus không",
//);
let sms = prompt("Are you gay ?", "YES");
