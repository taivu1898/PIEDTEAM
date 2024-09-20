//06 class classInheritance
//class là cái khuôn
//Bên trong class có constructor là cái phễu, thuộc tính, method
//class sẽ dùng constructor để tạo ra đối tượng (Object)

class User {
  constructor(fullname) {
    [this.firstName, this.lastName] = fullname.split(" ");
  }
  show() {
    console.log(`
      FirstName nè ${this.firstName}, 
      LastName nè ${this.lastName}
    `);
  }
}

//Tạo thử Object từ Class User

const Diep = new User("Lê Điệp");

//diep {
//  firstName: "Le",
//  lastName: "Diep",
//  [[Prototype]]: => User.prototype => class User
//                         constructor,
//                         show
//}
console.log(Diep);
console.log(Diep.__proto__ == User.prototype);
console.log(typeof User); // function
console.log(User.prototype.constructor == User);

//Class còn được gọi với cái tên là `syntactic sugar`
//`syntactic sugar` cú pháp kẹo đường => ý chỉ sự thay đổi về mặt syntax cho người mới tiếp cận
// Ta hoàn toàn có thể thay thế class bằng function
// Ta sẽ tạo ra Student là phiên bản nhái lại class User nhưng chỉ dùng function

function Student(fname) {
  [this.firstName, this.lastName] = fname.split(" ");
  //this.show = function () {
  //  console.log(`
  //    FirstName nè ${this.firstName},
  //    LastName nè ${this.lastName}
  //  `);
  //};
}

Student.prototype.show = function () {
  console.log(`
    FirstName nè ${this.firstName}, 
    LastName nè ${this.lastName}
  `);
};

// Điểm khác nhau giữa việc tạo Object từ classs User và function Student
// 1. constructor function không cần dùng toán tử new

//const hung = User("Hung"); // Lỗi thiếu new

let hung = Student("The Hung");
console.log(hung);

//Student suy cho cùng cũng chỉ là function mà thôi, nhưng là constructor function
//Nếu Student xài mà có new thì nó được hiểu là constructor function tạo ra Object
//Nếu Student xài mà không có new thì nó được hiểu là hàm bth mà thiếu return => undefined

//2. Về mặt hình ảnh
console.log(User);
console.log(Student);

//3. Code bên trong class thì luôn là 'use strict', hoisting variable

//III - class mà ta tạo ở trên là class declaration
//class Expression

let User1 = class Ahihi {
  constructor(fullname) {
    [this.firstName, this.lastName] = fullname.split(" ");
  }
  show() {
    console.log(`
      FirstName nè ${this.firstName}, 
      LastName nè ${this.lastName}
    `);
  }
};

//let tuan = new User1("Cuoi Tuan"); bug

class User5 {
  firstName = "Nguyễn";
  ["show" + "Name"]() {
    console.log("Hello");
  }
}

let hue = new User5();
hue.showName();

// symbol ?
//
// ôn lại OOP
// ôn lại method Arrau
// ôn lại this
