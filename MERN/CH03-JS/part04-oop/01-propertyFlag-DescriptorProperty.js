// 01-propertyFlag-DescriptorProperty
// propertyFlag - Descriptor Property: bộ cờ - bộ mô tả

// value là giá trị của property
// writable: true thì value có thể thay đổi | false thì không đổi được
// enumbertable: true thì có thể duyệt trong vòng lặp | false thì không thể
// configurable: true thì prop có thể cập nhật các lá cờ
//               false thì không thể cập nhật được enumerable nữa
//               writable thì từ T -> F được (F -> F thì không được)
//               value thì dựa vào writable

// bất cứ property nào của Object cũng đều sở hữu 4 lá cờ (1 bộ cờ) và có tên là propertyflag - property descriptor

let profile = {
  fname: "Diep",
  age: 18,
};

// 1. Ta có thể lấy ra bộ cờ của 1 property bất kỳ trong Object
console.log(Object.getOwnPropertyDescriptor(profile, "fname"));
//{ value: 'Diep', writable: true, enumerable: true, configurable: true }

//2. Cập nhật/Thêm 1 property vào bộ cờ của nó
//2.1 Cập nhật bộ cờ của một property trong Object

Object.defineProperty(profile, "fname", {
  writable: false,
});

profile.fname = "Hung"; // Dòng này có chạy nhưng không đổi giá trị
console.log(profile);

//2.2 Tạo mới thuộc tính kèm bộ cờ mô tả
//profile.job = "yangho";

Object.defineProperty(profile, "job", {
  value: "yangho",
  writable: true,
}); // Những lá cờ nào không liệt kê là false

console.log(Object.getOwnPropertyDescriptor(profile, "job"));
//{
//  value: 'yangho',
//  writable: true,
//  enumerable: false,
//  configurable: false
//}
// và với enumerable là false thì chúng ta sẽ khong thể duyệt được thuộc tính này trong các vòng foy

console.log(profile);

//dùng for in duyệt key

for (const key in profile) {
  console.log(key);
} // chỉ có fname và age vì job là enumerable false

//II - non-configurable: không thể cấu hình
//configurable: false => nghĩa là không cho ta set giá trị của bộ cờ ngoại trừ writable: T - F
//                                                                             value thì dựa vào writable
//Người ta thường dùng configurable cho những prop đặc biệt như math.PI
//Khi đã configurable là false thì không thể dùng defineProperty để fix configurable về true nữa
//Khi đã configurable là false thì:
//  - 1. Không thể thay đổi configurable nữa
//  - 2. Không thể thay đổi enumerable nữa
//  - 3. Không thể thay đổi writable F - T nữa (T - F thì được)
//  - 4. value dựa vào writable
//  - 5. Không thể thay đổi được getter và setter của accessor property
//
//3. Ta có thể thêm/cập nhật nhiều prop kèm bộ cờ cùng lúc

Object.defineProperties(profile, {
  point: { value: 9, writable: true },
  student_id: { value: "SE111", writable: true },
});
// Ta có thể lấy tât cả các bộ cờ của các property trong Object

console.log(Object.getOwnPropertyDescriptors(profile));
// Làm sao để có thể clone được 1 Object
// # spread: ... phân rã, clone các prop bth khong sao chép bộ cờ

let objClone = { ...profile };
console.log(Object.getOwnPropertyDescriptors(objClone));

//clone thông qua việc định nghĩa
objClone = Object.defineProperties(
  {},
  Object.getOwnPropertyDescriptors(profile),
);
console.log(Object.getOwnPropertyDescriptors(objClone));

//Sealing an object globally - niêm phong toàn bộ 1 object
//      những thằng này rất ít dùng trong dự án nhưng cũng rất là nhanh tiện
// Object.preventExtensions(obj)
//      Ngăn cấm thêm thuộc tính mới vào object
//      muốn biết 1 object có đang preventExtensions không  ta dùng Object.isExtensible(object)

// Object.seal(obj)
//      Ngăn cấm thêm mới/xóa thuộc tính object
//      set configurable : false cho tất cả các pro
//      muốn biết 1 object có đang seal không  ta dùng Object.isSealed(object)

// Object.freeze(obj)
//      Ngăn cấm thêm mới/xóa/thay đổi thuộc tính object
//      set configurable : false và writable: false cho tất cả các pro
//      muốn biết 1 object có đang freeze không  ta dùng Object.isFrozen(object)
//      -------------------
// Trong Object có 2 loại property
// value property, accessor property

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

console.log(student.fullname);
student.fullname = "Tra Long";
console.log(student);

//lastName: value     writable     enumerable configurable
//fullname: get       set          enumerable configurable

console.log(Object.getOwnPropertyDescriptor(student, "fullname"));

//III. getter và setter thông minh ứng dụng từ accessor property
//vd: cấm người code set giá trị có độ dài bé hơn 4

student = {
  get fname() {
    return this._fname;
  },

  set fname(newName) {
    if (newName.length < 4) {
      alert("Name is to short");
      return;
    } else {
      this._fname = newName;
    }
  },
};

student.fname = "ádd";
console.log(student.fname);
