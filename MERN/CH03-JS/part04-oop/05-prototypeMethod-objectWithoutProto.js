// 05 prototypeMethod objectWithoutProto

//Chúng ta đang code ở 2024, ai cũng biết __proto__ là gì
//Xài như thế nào, nhưng !!!
//Chúng ta phải xem như __proto__ đã bị loại bỏ rồi, không được dùng nữa phải xài các method thay thế
// Object.getPrototypesOf(obj)
// Object.setPrototypesOf(obj, newProto)
// Object.create(proto, {descriptors})
// - Tạo ra Object rỗng có [[Prototype]] là proto kèm với các method có bộ mô trả như ntrong param

let animal = {
  eat: true,
  // [[Prototype]]: Object.prototype => class Object
};

//trong animal ngoài eat ra thì ta còn có [[Prototype]]
console.log(animal.__proto__ == Object.prototype); // true

//Vì animal được tạo từ constructor function của Object nên animal.[[Prototype]] sẽ là prototype của constructor function mà Object.prototype == class Object

//==> animal.[[Prototype]] là class Object
//==> animal.__proto__ là class Object

//prototypal inheritance: kế thừa nguyên mẫu (giữa 2 object với nhau)
//Cách 1:

//let rabbitYellow = {
//  jump: true,
//};
//
//rabbitYellow.__proto__ = animal;

//Cách 2:
//Object.setPrototypeOf(rabbitYellow, animal);

// Cách 3:
let rabbitYellow = Object.create(animal);
//rabbitYellow là {} có [[Prototype]] là animal
rabbitYellow.jump = true;

rabbitYellow = Object.create(animal, {
  jump: {
    value: true,
    writable: true,
    enumerable: false,
    configurable: true,
  },
});

//Cách clone Object
//Giờ ta muốn clone rabbitYellow thì sao ?
//
//C1: spread ... toán tử phân rã destructuring

let objClone = { ...rabbitYellow };
// Chỉ clone được prop, không chép được bộ cờ
console.log(objClone);

//Cách 2: Object.defineDescripties

objClone = Object.defineProperties(
  {},
  Object.getOwnPropertyDescriptors(rabbitYellow),
);

console.log(objClone);
//clone được thuộc tính với bộ cờ, nhưng không clone được [[Prototype]]
//
//C3: Object.create(proto, {descriptor})

objClone = Object.create(
  Object.getPrototypeOf(rabbitYellow),
  Object.getOwnPropertyDescriptors(rabbitYellow),
);

console.log(objClone); // Tạo ra Object bằng proto của rabbitYellow và bộ mô tả của rabbitYellow

// II - very plain object - Object siêu phẳng | base Object
// 1. [[Prototype]] của một object có thể là Object, class, null, không được là string
let obj = {}; // tạo ra Object rỗng

obj.__proto__ = animal;

console.log(obj);

//object siêu phẳng

obj = Object.create(null); // tạo ra {} và có [[Prototype]] là null
console.log(obj);
obj.__proto__ = animal; // Phẳng đến nỗi __proto__ không nhận ra
console.log(obj);
