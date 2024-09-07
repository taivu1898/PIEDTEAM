// "use strict"; // Chế độ code nghiêm khác
// 01 - Variable - Hoisting - Scope
// Comment: ghi chú

console.log("Bài 1: variable - hoisting - scope");

// Cách khai báo biến: 3 cách
// 1. var: xuất hiện từ phiên bản ES đầu tiên
var num = 9;
var name1 = "Điệp đẹp trai";

console.log(name1);
name1 = "Điệp 10 điểm"; // re-assigning
console.log(name1);

// Nếu khai báo mà không gán giá trị.
var age;
console.log(age); // undefined

age = 10;
console.log(age); // 10
console.log(typeof age); // number

// Quy tắc đặt tên biến

/*
  1. Không bắt đầu bằng số
  2. Nguyên tắc: cammelCase, underscore, PascalCase
  Được phép dùng `_`(private) và dấu `$`(protected) ở đầu tên
 */

// Hoisting với var()
// Hoisting là tính năng không phải bug

// Hoisting: móc ngược lên
// Móc var msg;
// Dùng var mới có cơ chế hoisting
console.log(msg); // Undefined
var msg = "Hello";
console.log(msg);

// bật chế độ code nghiêm khác thì bug
// nếu khong bật use strict thì sẽ báo lỗi
// sẽ bị bug
// message = "thông báo";
// console.log(message);

// let (ES6 2015) | const: hằng số
// let và const thì giống var nhưng mà k hoisting

// console.log(msg1);
// let msg1 = "Hello";
// console.log(msg1);

// const: hằng số
// const num = 10; // Định nghĩa kiểu dữ liệu là 10
// num = 12;

// const với object
const profile = {
  name: "Toàn",
  height: 160,
};
// Một đổi tượng liên kết với một vùng nhớ
// Đôi tượng profile đang nằm ở stack, thuộc tính bên trong là heap
// Hằng số là địa chỉ

profile.name = "Toàn cao";
console.log(profile);

// Lỗi
// profile = {
//   name: "Toàn cao",
//   height: 160,
// };

// const với array
const array1 = [1, 2, 3, 4, 5];
array1.push(6);
console.log(array1);

// lỗi
// array1 = [1, 2, 3, 4, 5, 6]

// scope: trong js có 3 loại scope
// global scope: toàn cục
// Function scope: trong hàm
// block scope(local scope): cục bộ

// var được xem là toàn cục
if (true) {
  var son = "Toàn"; // let là gãy
}

console.log(son);
// let | coust không hoisting ..|.. var có hoisting
//     blockscope             ..|.. var là global scope
