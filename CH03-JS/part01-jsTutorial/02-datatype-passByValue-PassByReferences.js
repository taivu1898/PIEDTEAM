console.log("Bài 2: Kiểu dữ liệu - truyền tham trị - truyền tham chiếu");

// I - 1. primitve datatype: kiểu nguyên thủy

/*
  number: 1, 122222, 14.6
  string: '1000', 'xinchao'
  boolean: true(1) | false(0) -0 => false
    => tất cả các số đều là true, trừ 0 và -0
  null: giá trị rỗng, biết kiểu dữ liệu
  null không xuất hiện 1 cách tự nhiên, anh yêu cầu cung cấp cho anh 1 object nhưng không đưa gì hết
  undefined: giá trị rỗng, không có kiểu
  symbol(ES6): bổ sung cho vui, tính năng như đầu buồi
*/

// Null và Undefined khác nhau như nào
console.log(typeof null); // -> object: đọc lại lý thuyết
// mọi thứ đều bắt đầu từ null -> tiệm cận với object nhưng được xếp vào nguyên thủy vì được xếp
// ở đỉnh cây phả hệ [prototype chain] | null không còn gì để tách nhỏ

console.log(typeof undefined); // là undefined
// chưa biết kiểu của kiểu dữ liệu thì kiểu của nó là chưa xác định kiểu dữ liệu

console.log(null == undefined); // true -> Giá trị bằng rỗng
// ==: so sánh giá trị (ép kiểu và unboxing)
console.log(null === undefined); // false ->
// ===: so sánh giá trị và kiểu, so sánh rất khắc khe

console.log();

console.log(2 == "2"); // true
console.log(2 === "2"); // false

// undefine trong parameter của function

function handle1(a, b) {
  return b;
}
// function mà không return nghĩa là return undefined

let c = handle1(5);
console.log(c); // undefined

// undefined trong thuộc tính của object
let tan = {
  name: "Bá Tân",
  height: 165,
};

console.log(tan.nguoiYeu); // undefined: cơ chế hoisting cục bộ
// được hosisting các thuộc tính, hoisting địa chỉ
tan.money = 1000;
console.log(tan);

// Nhược điểm
/*
  register
{
  email: "taivv18@gmail.com"
  pwd: 123123
  confirm_pwd: 123123
}

Kiểm tra xem email "ta..18@gmail.com" có ai dùng chưa
tạo token và gửi vào email

tạo token và hoisting lại
*/

// *Null là biết kiểu dữ liệu nhưng không biết giá trị
let str = ""; // sẽ không được gọi là rỗng -> gọi là chuỗi rỗng
// => vẫn thừa hưởng tất cả các method
str = null; // gọi là rỗng (Obj) -> rỗng chấm gì ?
// str.concat("ahihi"); => sai
// => không được lưu null

// null và undefined thì sẽ không có thuộc tính
// trong mặt lưu trữ ta không nên lưu null
// tránh việc xử lý vào null là crash app

// I - 2: Obj datatype: khác primitive
// Plain Obj: Obj phẳng -> không có constructor, không có kế thừa

let student = { name: "Tùng", point: 10 };
//                property | entry
//                     key: value
console.log(student.name);
console.log(student["name"]);

// Array là cách khai báo nhiều biến, tên, cùng lúc một Obj có key và value
let flowerList = ["Hệu", "Cúc", "Lan"];

/*
flowerList = {
  0: "Huê",
  1: "Cúc",
  2: "Lan".
}
*/

console.log(flowerList[2]);

// regular expression: regex là Obj
let regex1 = /SE\d{9}/;

console.log(typeof regex1);

// function có typeof là function, gốc gác sâu hơn là obj
console.log(typeof handle1); // Kiểu dữ liệu của nó cũng là hàm (function)
// -> tiền thân nó là Obj
console.log(handle1.prototype);

//
console.log(10 / "d"); // -> NaN: not a number
// Nan: là một trạng thái của Number
console.log(typeof NaN); // có kiểu là number
console.log(NaN == Number); // false: 1 thằng là trạng thái, 1 thằng kiểu
console.log(NaN == NaN);

// Tất cả các cách khai báo primitive đều có thể khai báo bằng constructor
// Wrapper Class: lớp bao
let str1 = "ahihi";
str1 = new String("ahihi");
console.log(str1); // auto-unboxing
console.log(str1 == "ahihi"); // true
console.log(str1 === "ahihi"); // false
console.log(str1.valueOf() === "ahihi"); // mình tự unboxing -> true

// Dùng Wrapper Class để ép kiểu
let year = String(1999);
console.log(year);

// Bàn riêng về boolean
console.log(Boolean(1999)); // true
console.log(Boolean(0)); // false
console.log(Boolean("0")); // Bảng mã ascii "0" -> 48 -> true
console.log(Boolean("")); // false
console.log(Boolean(" ")); // true
console.log(Boolean(null)); // false
console.log(Boolean({})); // có một vùng nhớ, trỏ dến 1 địa chỉ, mà địa chỉ là số -> true
console.log(Boolean([])); // như trên -> true
console.log(Boolean(10 / "d")); // false -> trạng thái không sở hữu giá trị
console.log(Boolean(false)); // false

// falsy: đối với js những gì không chứa giá trị đều là false
// null, undefined, 0, -0, false, NaN

// Trythy: ngược lại với falsy
// Chuỗi khác rỗng, số khác 0 và -0, object đều là true

// pass by value: truyền tham trị

let a = 1;
let b = a;

b += 2;
console.log(a, b);

// vd2:
let point = 4;
// Hàm sửa điểm
function updatePoint(currentPoint) {
  currentPoint = 10;
}

updatePoint(point);
console.log(point);

// 2. pass by references: truyền tham chiếu
let boyFr1 = {
  name: "hotGirl",
  size: "B cub",
};

let boyFr2 = boyFr1;
boyFr2.size = "H cub";
console.log(boyFr1);

// OPERATOR Toán tử
//trong js có 10 loại toán tử
/*
1  Assignment            gán = 
2  Comparison            so sánh ==  ===
3  Arithmetic            toán hạng
4  bitwase               bitwase
5  logical               logic && ||
6  String                chuỗi
7  Conditional(ternary)  ba ngôi
8  Comma                 phẩy
9  Unary                 một ngôi
10 Relational            Quan hệ
*/
//
// Arithmetic Operator toán tử toán hạng
//  + | - | * | ** | / | % | variable++ | variable-- | ++variable | --variable |
//  không được n++ ++n --n n-- với n là số bất kỳ

// Assignment Operator toán tử gán
//  = | += | -= | *= | **= | /= | %= |
//

// Comparison Operator toán tử so sánh
console.log(2 == "2"); // true
console.log(2 !== "2"); // true
console.log(2 != "2"); // false

// Toán tử 3 ngôi
// let diep = "dep trai";
// let isDepTrai = diep == "dep trai";
// console.log(isDepTrai); // true

let diep = "dep trai";
let isDepTrai = diep === "dep trai";
console.log(isDepTrai); // true
// So sánh địa chỉ, so sánh địa chỉ nên là true, nếu new thì sẽ là false

console.log("b" + "a" + +"a" + "a"); // baNaNa

// Logical
console.log(0 && 1); // in ra số 0
console.log(0 || 1 || 4); // in ra số 1
console.log(0);
console.log(!0); // Nếu xuất hiện dấu ! thì ép kiểu mọi thứ thành true false
console.log(""); // Không in ra gì cả
console.log(!""); // tru
console.log(!"" && 0 && 1); // false

!res.data && console.log("Hihi");
