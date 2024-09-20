//04 navtive prototype
//
//- Thuộc tính prototype của constructor fucntion được sử dụng rộng rãi trong js
//- Mọi constructor function trong js đều sẽ có prototype
//- [[Prototype]] là một thuộc tính ẩn của Object, là đại diện cho prototype thực thể
//__proto__ là get và set (accessor property) của [[Prototype]]

let obj = {
  // Một đối tượng không có bất cứ thuộc tính nào
};

//const obj = new Object();
console.log(obj.toString()); // [object Object]
console.log(obj.__proto__ == Object.prototype); // class Object

console.log(Object.prototype.__proto__);
console.log(obj.__proto__.__proto__);

let mang1 = [1, 2, 3];
console.log(mang1.__proto__); // Class Array
console.log(mang1.__proto__ == Array.prototype); // class Array

console.log(Array.prototype.__proto__ == Object.prototype); // true
console.log(mang1.__proto__.__proto__.__proto__);
console.log(mang1.__proto__.__proto__ == Array.prototype.__proto__); // true

//Nếu mang1.toString() thì nó xài toString() của Array hay Object -> Xài Array

console.log(mang1.toString()); // 1, 2, 3

let a = 5;

console.log(a.__proto__ == Number.prototype); // class Number
