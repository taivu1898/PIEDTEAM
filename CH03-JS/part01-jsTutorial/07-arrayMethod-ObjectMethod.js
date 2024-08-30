console.log("07 Array Method - Object Method");

// Mảng trong js không nhất thiết phải cùng kiểu
let arr1 = [1, 2, "a", { lname: "Huệ", age: 10 }, [3, 5]];
console.log(arr1);
//2. length cung cấp độ dài
console.log(arr1.length);
// 3. Array.isArray(arr): kiểm tra xem biến arr có phải là arr không
console.log(Array.isArray(arr1)); // true
console.log(arr1 instanceof Array); // true

// 4. .toString(): biến mảng thành chuỗi kèm ','
let workerList = ["Huệ", "Lan", "Trà"];
console.log(workerList.toString()); // Huệ,Lan,Trà

// 5. split(token) | join(token)

// II - chèn mảng
// Array là mutable: có các method có khả năng chỉnh sửa Object
// 6. push(item): nhét item vào cuối của mảng
workerList = ["Huệ", "Lan", "Trà"];
result = workerList.push("Cúc");
console.log(workerList, result);

// 7. unshift(item): nhét item vào đầu mảng
workerList = ["Huệ", "Lan", "Trà"];
result = workerList.unshift("Cúc");
console.log(workerList, result);

// 8. pop(): xóa phần tử ở cuối mảng | return phần tử đã xóa
workerList = ["Huệ", "Lan", "Trà"];
result = workerList.pop();
console.log(workerList, result);

// 9. shift(): xóa phần tử ở đầu mảng | return phần tử đã xóa
workerList = ["Huệ", "Lan", "Trà"];
result = workerList.shift();
console.log(workerList, result);

// 10. delete array[index]: xóa phần tử ở vị trí index (Khong nên xài)
workerList = ["Huệ", "Lan", "Trà"];
delete workerList[1]; // ["Huệ", empty, "Trà"]
console.log(workerList[1]); // undefined

// 11. splice(start, length, ..pt muốn thêm)
// từ start: xóa số lượng length phần tử
//           nhét vào phần tử muốn thêm
// return mảng các phần tử bị xóa
workerList = ["Huệ", "Lan", "Trà"];
workerList.splice(1, 0, "Điệp", "Cường");
console.log(workerList);

// Xóa mà không thêm
workerList = ["Huệ", "Lan", "Trà"];
result = workerList.splice(0, 1);
console.log(workerList, result);

// vừa xóa vừa thêm
workerList = ["Huệ", "Lan", "Trà"];
result = workerList.splice(0, 2, "Điệp", "Cường");
console.log(workerList, result);

// 12. slice(start, end): chiết xuất chuỗi con từ start đến end - 1

// 13. concat(...array): nối mảng
//workerGirl = ["Huệ", "Lan", "Tân"];
//let workerBoy = ["Điệp", ["Cường", "Hùng"]];
//workerList = wokerGirl.concat(wokerBoy, "Hồng", ["Trúc", "Lâm"]);
//console.log(workerList);
//wokerBoy[1][0] = "Tuấn";
//console.log(workerList);

// shallow copy: sao chép nông
// sao chép giá trị nhưng không cắt hết dây mơ rễ má

// 14. spread operator: destructuring | phân rã mảng | Object | ...
//workerList = [...workerGirl, ...workerBoy];
//console.log(workerBoy[1] == workerList[4]);
//console.log(workerList);

// 15. foreach(cf): lập mảng
// cf: val, index, arr => {}
arr1 = ["Huệ", "Cúc", "Hồng"];
arr1.forEach((item, key, array) => {
  console.log(item, key, array);
});
console.log(arr1);

// 16. *** map(cf): biến đổi từng pt theo 1 công thức
// ct: (val, index, array) => {}

arr1 = [2, 6, 9];

result = arr1.map((item) => item + 2);

console.log(arr1);
console.log(result);

// 17. filter(cf): hàm duyệt qua các item, item nào bỏ vào cf true thì giữ lại
// cf: (item) => true(giữ) | false(bỏ)

arr1 = [1, 2, 3, 4, 5, 6];
arr1 = arr1.filter((item) => item % 2 == 0);

console.log(arr1);

// 18. find(cf): hàm duyệt các item, tìm item đầu tiên mà bỏ vào cf được true thì lấy
// cf: (val, key, array) => {}: true | false
arr1 = [1, 2, 3, 4, 5, 6];
result = arr1.find((item) => item % 3 == 2);

console.log(result); // 2

// 19. findIndex(cf): hàm duyệt các item, tìm item đầu tiên mà bỏ vào cf được true thì lấy
// cf: (val, key, array) => {}: true | false
arr1 = [1, 2, 3, 4, 5, 6];
result = arr1.findIndex((item) => item % 3 == 2);

console.log(result); // 2

// 20. indexOf(value): tìm vị trí của value nằm đâu trong mảng
arr1 = [3, 5, 9, 2, 0];
console.log(arr1.indexOf(9)); // 2

// filter(cf): lọc các item thỏa cf => item[]
// find(cf): tìm item đầu tiên thỏa cf => item[]
// findIndex(cf): tìm item đầu tiên thỏa cf và trả ra index
// indexOf(val): tìm val trong mảng -> index của val đó

// 21. every(cf): giống ALL trong DBI
// cf:(val, key, array) => {}: true | false
// duyệt qua các item, nếu tất cả các item đi qua cf đều được true thì every mới return true
arr1 = [1, 2, 3, 4, 5, 6];
result = arr1.every((item) => item % 3 == 2);
console.log(result);

result = arr1.every((item) => item >= 1);
console.log(result);

// 22. some(cf): giống như In trong DBI
// chỉ cần 1 phần tử thảo cf thì cả some là true
arr1 = [1, 2, 3, 4, 5, 6];
result = arr1.some((item) => item % 3 == 2);
console.log(result);

// 23. includes(val) tìm xem val có tồn tại trogn mảng không
console.log([1, 3, 5, 7, 8, 10, 12].includes(2));

// 24 reverse()
// 25 sort(cf?): sắp xếp
// 1. string
arr1 = ["Điệp", "An", "Bụp"];
arr1 = arr1.sort();
console.log(arr1);
// 2 number
arr1 = [1, 2, 3, 20, 100];
arr1.sort();
console.log(arr1);

// dạy nó

arr1 = [1, 2, 3, 20, 100];
arr1.sort((a, b) => a - b);
console.log(arr1);

// 25. *** reduce(cf, initial)
// cf: (total, current(item - val), currentIndex(index - key)) => {}
// nếu map dùng dể thay đổi các phần tử trong mảng theo 1 công thức thì reduce có khả năng biến đổi các phần tử và dồn hết về 1 biến

arr1 = [1, 3, 28, 100];
result = arr1.reduce((total, item) => (total += item + 2), 0);
console.log(result);

// Ứng dụng
let productList = [
  { proname: "xe", desc: "audi" },
  { proname: "nhaf", desc: "biet thu" },
  { proname: "nguoi yeu", desc: "ngoc trinh" },
];

let content = productList.reduce((total, product) => {
  return total + `<h1>${product.proname}</h1> <p>${product.desc}</p>`;
}, "");

document.querySelector(".demoReduce").innerHTML = content;

// không cần quan tâm: dùng reduce beiens array thành Object
arr1 = ["Diệp", 10, 22];
newObj = arr1.reduce((total, val, key) => {
  total[key] = val;
  return total;
}, {});

console.log(newObj);
// entry của Object gồm key: val
// key thì luoon là string number
// var: Object

let worker1 = {
  lname: "Điệp 10 điểm",
  age: 25,
  showInfor() {
    console.log(this.lname + " " + this.age);
  },
};

worker1.showInfor();
worker1.point = 10;
worker1["point"] = 10;

// update prop

worker1.lname = "ĐIệp đẹp trai";

delete worker1.age;

// Object assign()
// giống concat thay vì là nối, thì nó merge Object
// có rồi thì ghi đè, chưa thì thêm
let person1 = {
  lname: "Điệp",
  age: 25,
  job: ["yangho", "coder"],
};

let person2 = {
  lname: "Lan",
  age: 24,
  company: "PiedTeam",
};

//Object.assign(person1, person2);
console.log(person1);

// tất nhiên là trên thực tế thì k thích dùng cái này
// ưu tiên dùng spread
person3 = { ...person1, ...person2 };
console.log(person1);
console.log(person3);

person3.job = { ...person3.job };
console.log(person1.job == person3.job);
console.log(Object.keys(person3));
console.log(Object.values(person3));
console.log(Object.entries(person3));

// forin duyệt key của Object chê set
