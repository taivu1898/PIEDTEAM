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

// Cảnh giác this trong các method của class
class Button {
  constructor(value) {
    this.value = value;
  }
  click() {
    console.log("Giá trị là " + this.value);
  }
}

let btn = new Button("Ahihi");

//btn {
//  value: "Ahhi"
//  [[Prototype]]: Button.prototype => class Button
//                                    constructor
//                                    click()
//}

//btn.click();

//anh muốn hàm click được chạy sau 3s thì sao ?
//setTimeout(btn.click, 3000); // BUG: btn.click() là sai, sẽ chạy liền ngay lập tức nhưng kết quả đúng

// ra undefined vì là window chạy vì trong click có this, mà khi công thức được gọi trễ thì không còn người gọi nữa
// this => windown => window.value = undefined
// Truyền vào btn.click là xài đúng
// btn.click là công thức, và sau đó 3s thì công thức được lôi ra chạy

//Cách 1:
//setTimeout(() => {
//  btn.click();
//}, 3000);

//Cách 2: bind

//class Button1 {
//  constructor(value) {
//    this.value = value;
//    this.click = this.click.bind(this);
//  }
//  click() {
//    console.log("Giá trị là " + this.value);
//  }
//}
//
//let btn1 = new Button1("Ahihi");
//setTimeout(btn1.click, 3000);

//*btn1 {
//  value: "Ahhi"
//  click() được độ thêm có this
//  [[Prototype]]: Button.prototype => class Button
//                                    constructor
//                                    click()
//}

//Cách 3: dùng arrow
//class Button2 {
//  constructor(value) {
//    this.value = value;
//  }
//  click = () => {
//    console.log("Giá trị là " + this.value);
//  }; // NOTE: Đây là một câu lệnh `bind`
//}
//// BUG: bị sếp chửi
//
//let btn2 = new Button2("Ahihi");
//setTimeout(btn2.click, 3000);

//II. class inheritance: kế thừa bằng class
//trước khi có class thì chúng ta chỉ có constructor function mà thôi
//việc kế thừa chắc chắn không phải thông qua từ khóa 'extends'

class Animal {
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }
  //method
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still`);
  }
}

let ani = new Animal("Ahihi do cho");

class Rabbit extends Animal {
  constructor(name) {
    super(name); // new Animal()
  }
  hide() {
    console.log(`${this.name} hides !!!`);
  }
  stop() {
    setTimeout(() => {
      super.stop();
    }, 1000);
  }
}

let yellowRabbit = new Rabbit("yellowRabbit");
//yellowRabbit.hide();
//yellowRabbit.run(6);
//yellowRabbit.stop();
//ani.hide(); // BUG:

//yellowRabbit: {
//  name: "yellowRabbit",
//  speed: 0,
//  [[Prototype]]: Rabbit.prototype => class Animal
//}

console.log(yellowRabbit);

//class field
class Animal2 {
  name = "isAnimal"; // class field
  constructor() {
    console.log(this.name);
  }
}

//bên trong obj là property, còn bên trong class là class field

class Rabbit2 extends Animal2 {
  constructor() {
    super();
  }
}

let an2 = new Animal2(); // isAnimal
let rb2 = new Rabbit2(); // isAnimal
// class field k có kế thừa, k có override, chỉ có overWrite

console.log(rb2);

//8 - static: tĩnh, trong java static nghĩa là prop thuộc về class, instance được phép truy cập và sử dụng, dùng chung
//Trong js, static nghĩa prop CHỈ thuộc về class, instance không được phép truy cập

class User9 {
  name = "Diep";
  static name2 = "Lan";
}

let obj1 = new User9();
console.log(obj1.name);
console.log(obj1.name2); // BUG: undefined (java chạy được)
console.log(User9.name2);

// ----------------------------------------------

class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

// Danh sách mấy bài báo lá cải
let articleList = [
  new Article("Hoài Linh để quên 14 tỷ trong ngân hàng", new Date(2023, 3, 6)),
  new Article("Jack bán áo có chữ ký Messi để từ thiện", new Date(2023, 0, 6)),
  new Article(
    "Người mua áo Messi dùng tiền để từ thiện trẻ mồ côi",
    new Date(2022, 8, 6),
  ),
];

articleList.sort(Article.compare);

console.log(articleList);
//Access modifier : đây là đại diện của tính đóng gói trong OOP ở js

//trong js chỉ chia ra 2 là Internal và External interface
// Internal interface - phương thức và thuộc tính chỉ có thể được truy cập bên trong các phương thức trong class, không phải từ bên ngoài.
// External interface - phương thức và thuộc tính có thể truy cập được từ ngoài và trong class.
// Trong Javascript, có 2 loại thuộc tính và phương thức:

// Public: có thể truy cập từ bất kỳ đâu. Nghĩa là external interface. Cho đến bây giờ thì chúng ta chỉ sử dụng thuộc tính public
// Private: có thể truy cập bên trong class. Nghĩa là internal interface
// Trong nhiều ngôn ngữ khác thì còn tồn tại trường "protected": chỉ có thể truy cập bên trong class và những class kế thừa.

// Trường Protected không được quy định trong Javascript ở cấp độ ngôn ngữ, những trong thực tế để cho tiện lợi thì chúng ta có thể giả lập để quy ước với nhau.

//ReadOnly
//nếu khai báo get mà k có set, thì nó sẽ thành readOnly, không đổi giá trị đc
//nếu không có set/get thì nó tự tạo , sẽ gán bt
//các dev quy ước tên _ ở trước là private chỉ dùng trong class, nên truy cập bằng get/set
//không nên . tới
//việc quy ước này không đảm bảo được ngôn ngữ, chỉ là quy ước

class CoffeeMachine {
  constructor(power) {
    this._power = power;
  }
  get power() {
    return this._power;
  }
}

let cfm = new CoffeeMachine(100);
cfm.power = 1000;
cfm._power = 1000; // thoải mái, người không thích là xếp
console.log(cfm.power);

class CoffeeMachine1 {
  #power;
  constructor(power) {
    this.#power = power;
  }
  get power() {
    return this.#power;
  }
}

let cfm1 = new CoffeeMachine1(100);
cfm1.power = 1000;
//cfm1.#power = 1000; // NOTE: Mức độ ngôn ngữ
console.log(cfm1.power);
