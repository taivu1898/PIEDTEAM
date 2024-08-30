// 03 - Loop
console.log("Bài 3: Loop - Vòng lặp");

// reUse: dừng lại, ví dụ như hàm muốn xài khi nào cũng được - Đại diện là hàm
// Repeat: lặp lại liên tục, khoảng cách giữa các chu trình đều nhau - Đại diện là vòng lặp
// Repeat - Loop
// for | do-while | while
// plain obj: obj phẳng

let student1 = {
  // property | entry: gọi cái này
  name: "Điệp",
  point: 10,
  major: "SE",
  // key: value
}; // obj phẳng

let array1 = [12, 15, 19];
// array > obj > con trỏ
// array1 {
//   0: 12
//   1: 15
//   2: 19
// }
// array thì vẫn có key: value nhưng thay vì gọi là key thì người ta gọi là index

console.log(student1.name);
console.log(student1["name"]); // truy cập bằng key
console.log(array1[1]);

//Bàn về các vòng for
// Vòng for cơ bản duyêt từ start đến end theo nhu cầu khai báo
// for (let i = 0; i <= 10; i++) {}

// Vòng for cải tiến: duyệt đến hết, không vận hành bằng index
// forin: duyệt các key của obj

for (const key in student1) {
  console.log(student1[key]);
}

// lấy ra danh sách thuộc tính trong obj

// set
let demoSet = new Set(["Điệp", "Huệ", "Lan", "Huệ"]);
// Set là tập hợp loại trùng
// index không hợp lý, không lấy phàn tử dựa vào index
console.log(demoSet);
// Khi loại trùng thì các phần tử nằm vị trí index(key) ban đầu
// nên key lúc này vô dụng => set bỏ key => trong set không có key => không chạy forin được
// Đa phần các obj đều có tính khả duyệt - có chiều sâu (iterable),
// Nhưng thường các obj mà mình tự tao ra nó không có chiều sâu

// forof | foreach không duyệt bằng index và key, duyệt bằng iterable => không sử dụng được với obj-phẳng

// Nói về forof duyệt values nhưng dùng iterable => chê obj-phẳng
for (const val of array1) {
  console.log(val);
}

for (const iterator of demoSet) {
  console.log(iterator);
}

// foreach: duyệt val đi kèm key và dùng cơ chế iterable
// Xử lý các lần lặp bằng callback

array1.forEach((val, key) => {
  console.log(val, key)
});
// foreach laf method | function nhận vòa một hàm khác
demoSet.forEach((val, key) => {
  console.log(val, key)
});

// Không có key nên lấy luôn value
// forin là duyệt key (chơi được với mọi obj) (để ý thằng set)
// forof là duyệt value bằng iterable (chê plain obj - lỗi)
// foreach duyệt value kèm key bằng iterable (chê plain obj - lỗi)
