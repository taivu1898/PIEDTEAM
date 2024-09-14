//03-F-prototype
//Trong js nta thích dùng function hơn class
//Bên Java nếu muốn tạo 1 Object(bức tường)
//             thì mình cần tạo class(khuôn) => constructor(phễu)
//Bên js: ta không cần class, ta chỉ cần 1 cái hàm là đúc được
//Tức là function dùng để tạo Object(k cần dùng class để làm gì cả)
//Muốn tạo ra một chiến xe

//function Car(name, price) {
//  this.name = name;
//  this.price = price;
//  prototype: class Car
//}

class Car {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

let audi = new Car("audi", "2 ty");
console.log(audi);

//audi{
//  name: "audi",
//  price: "2 ty",
//  [[Prototype]]: prototype của function Car => class Car {
//    constructor {
//      prototype: class Car(...)
//    }
//  }
//}

//Ví dụ khác:
let factory = {
  date: 2024,
};

Car.prototype = factory;

let rollRoyce = new Car("RR", "1,2 ty");
console.log(rollRoyce);
// JS không đảm bảo constructor nếu như ta chủ động thay đổi prototype của constructor

//Ôn lại bài trên
//F.prototype mặc định là thuộc tính của constructor function
//Mỗi constructor function đều sẽ có prototype
//prototype mặc định là Object chứa constuctor trỏ ngược lại constructor function đó

function Animal(name) {
  this.name = name;
  // prototype: class Animal
  //            constructor(name) {
  //              this.name = name
  //              prototype: class Animal(...)
  //            }
}

console.log(Animal.prototype); // class Animal
console.log(Animal.prototype.constructor == Animal); // function Animal

let dog = new Animal("Chi pu");
console.log(dog.__proto__); // class Animal
console.log(dog.__proto__ == Animal.prototype); // True
console.log(dog.constructor); // function Animal

let newPet = new dog.constructor("qua da");
