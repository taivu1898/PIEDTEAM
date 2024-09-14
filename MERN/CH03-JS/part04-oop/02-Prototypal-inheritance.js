// 02 Prototyppal - inheritance: kế thừa nguyên mẫu (kế thừa 2 object với nhau)
// [[Prototype]] đọc đầy đủ: ngoặc vuông * 2 Prototype
// trong bât cứ object nào thì cũng luôn có một thuộc tính ẩn tên là [[Prototype]]
//[[Prototype]] là thuộc tính chứa thong tin tiền thuân của object đó
//                 chứa hằng tạo ra nó | cha nó
//  Ta không thể .[[Prototype]] được
//  Muốn truy cập vào [[Prototype]] thì phải thông qua accessor property có tên là __proto__

let longEar = {
  ear: "long",
};

let pinkRabbit = {
  jump: true,
};

let conido = {
  eat: true,
  walk() {
    console.log("Tui chay bo ne");
  },
};

// congido là con của pinkRabbit, nhận longEar làm ông
conido.__proto__ = pinkRabbit;
conido.__proto__.__proto__ = longEar;
// conido > pinkRabbit > longEar
// com         cha        ông``
console.log(conido);
console.log(conido.ear); // long
console.log(pinkRabbit.eat); // undefined
console.log(pinkRabbit.ear); // long

// Giờ t muốn conido cập nhật ear thành "short"

//conido.ear = "short"; // js sẽ không cập nhật thằng ear của cha

//tránh ảnh hưởng những thằng con khác
//tạo ra một ear khác ở ngay lớp của nó => congido có 2 ear
//Khi nó xài thì nó ưu tiên ear gần
conido.__proto__.__proto__.ear = "short"; // không nên
console.log(conido.ear); // short
console.log(pinkRabbit.ear); // long

//Lưu ý với __proto__
//Trước ES6 không có cách nào đê truy cập vào [[Prototype]] cả
//Hầu hết các trình duyệt thêm vào accessor property __proto__ (không phải là cách truy cập chính thống)
//__proto__ tính tới thời điểm hiện tại vẫn chưa bị loại bỏ
//__proto__ có thể thay thế bằng Object.getPrototypeOf(obj)
//                               Object.setPrototypeOf(obj, obj2)
//
//Ví dụ nâng cao

let student = {
  lastName: "Diep", // value property
  firstName: "Le", // value property

  get fullname() {
    return this.firstName + " " + this.lastName;
  },

  set fullname(newName) {
    [this.firstName, this.lastName] = newName.split(" ");
  },
};

let user = {
  isUser: true,
  __proto__: student,
};

user.fullname = "Tra Long";
console.log(user);
