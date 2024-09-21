// Quản lý sinh viên bằng OOP
// Tất nhiên là không sử dụng class
"use strict";

function Student(name, birthday) {
  this.name = name;
  this.birthday = birthday;
  this.id = new Date().toISOString();
}

// Khi mà mình tạo ra sinh viên rồi thì mình sẽ lưu vào Local Storage
// ----------------------------- Store --------------------------------
// hàm này giúp xử lý liên quan đến Local Store
function Store() {}
// .getStudents(): hàm lấy danh sách students từ Local Store
Store.prototype.getStudents = function () {
  return JSON.parse(localStorage.getItem("students")) || [];
};
// .add(student): hàm nhận vào student và thêm vào Local Storage
Store.prototype.add = function (student) {
  // Lấy danh sách students về
  let students = this.getStudents();
  // Nhét student vào students
  students.push(student);
  // Lưu lên lại Local Storage
  localStorage.setItem("students", JSON.stringify(students));
};

// Dùng student có được để hiển thị lên giao diện
// ---------------------Render UI ----------------------------
// Render UI là thăng chuyên các methdo quản lý giao diện
function RenderUI() {}
// .add(student): nhận vào student và biến nó thành tr để hiển thị table
RenderUI.prototype.add = function ({ id, name, birthday }) {
  let store = new Store();
  let students = store.getStudents();
  let newTr = document.createElement("tr");
  newTr.innerHTML = `
    <tr>
      <td>${students.length}</td>
      <td>${name}</td>
      <td>${birthday}</td>
      <td>
        <button class="btn btn-danger btn-sm btn-remove" data-id="${id}">
          Xoá
        </button>
      </td>
    </tr>
  `;
  document.querySelector("tbody").appendChild(newTr);
  //reset các input field
  document.querySelector("#name").value = "";
  document.querySelector("#birthday").value = "";
};

// Làm hàm hiển thị thông báo lên ui
RenderUI.prototype.alert = function (msg, type = "success") {
  let divAlert = document.createElement("div");
  divAlert.className = `alert alert-${type}`;
  divAlert.innerHTML = msg;
  document.querySelector("#notification").appendChild(divAlert);
  setTimeout(() => {
    divAlert.remove();
  }, 2000);
};

// main flow (dòng chảy sự kiện chính)
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); // chặn reset trang
  // lấy data từ các inp
  let name = document.querySelector("#name").value;
  let brithday = document.querySelector("#birthday").value;
  // Dùng data thu được từ các inp tạo student
  let newStudent = new Student(name, brithday);
  // lưu vào ls
  let store = new Store(); // Tạo instance của Store
  // hiển thị ui
  let ui = new RenderUI();
  ui.add(newStudent);
  ui.alert(`Đã thêm thành công sinh viên có tên ${name}`);
});
