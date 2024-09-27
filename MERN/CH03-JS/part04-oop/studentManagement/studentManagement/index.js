// quản lý sinh viên bằng constructor function và kế thừa bằng prototype
// tạo constructor function cho Student
function Student(name, birthday) {
  this.name = name;
  this.birthday = birthday;
  this.id = new Date().toISOString();
}
//---------------------Store-------------------------
// store tạo ra các object chứa các method xử lý localStorage
function Store() {}
// hàm lấy danh sách student từ localStorage
Store.prototype.getStudents = function (student) {
  return JSON.parse(localStorage.getItem("students")) || [];
};
// hàm thêm mới student vào localStorage
Store.prototype.add = function (student) {
  //lây danh sách sinh viên về
  let students = this.getStudents();
  //nhét sinh viên vào danh sách
  students.push(student);
  //lưu students lên lại localStorage
  localStorage.setItem("students", JSON.stringify(students));
};

// .getStudent(id): hàm nhận vào id, tìm student trong students
Store.prototype.getStudent = function (id) {
  let students = this.getStudents();
  let student = students.find((student) => student.id == id);
  return student;
};

// .remove(id): hàm nhận vào id, tìm và xóa student trong students
Store.prototype.remove = function (id) {
  let students = this.getStudents();
  // Tìm vị trí của student trng students
  let indexRemove = students.findIndex((student) => student.id == id);
  // xong rồi dùng vị trí đó xóa bằng splice
  students.splice(indexRemove, 1);
  // lưu lại students lên ls
  localStorage.setItem("students", JSON.stringify(students));
};

//---------------------RenderUI----------------------
// RenderUI tạo ra object chứa các method xử lý giao diện
function RenderUI() {}
// thêm student vào giao diện UI
RenderUI.prototype.add = function (student) {
  // lây danh sách sinh viên
  const { name, birthday, id } = student;
  let students = new Store().getStudents();
  let newTr = document.createElement("tr");
  newTr.innerHTML = `
      <td>${students.length}</td>
      <td>${name}</td>
      <td>${birthday}</td>
      <td>
        <button class="btn btn-danger btn-sm btn-remove" data-id=${id}>
          Xóa
          </button>
      </td>
    `;
  // nhét vào tbody
  document.querySelector("tbody").appendChild(newTr);
  //   xóa giá trị trong các ô input
  document.querySelector("#name").value = "";
  document.querySelector("#birthday").value = "";
};

// alert: tạo thông báo khi thêm thành công lên giao diện
RenderUI.prototype.alert = function (msg, type = "success") {
  // tạo div thông báo
  let divAlert = document.createElement("div");
  divAlert.className = `alert alert-${type}`;
  divAlert.innerHTML = msg;
  document.querySelector("#notification").appendChild(divAlert);
  //   sau 2s thì mất nha
  setTimeout(() => {
    divAlert.remove;
  }, 2000);
};

// .renderAll() hàm này sẽ vào danh sách students và biến từng student thành
// hiển thị lên table
RenderUI.prototype.renderAll = function () {
  //lấy danh sách students từ localStorage
  let store = new Store(); // Tạo ra instance của store
  let students = store.getStudents();
  // duyệt students và biến mỗi thằng student thành tr
  let htmlContent = students.reduce((total, student, studentIndex) => {
    const { id, name, birthday } = student;
    let str = `
      <tr>
        <td>${studentIndex + 1}</td>
        <td>${name}</td>
        <td>${birthday}</td>
        <td>
        <button class="btn btn-danger btn-sm btn-remove" data-id="${id}">
          Xóa
        </button>
        </td>
      </tr>
    `;
    return total + str;
  }, "");
  document.querySelector("tbody").innerHTML = htmlContent;
};

// -------------------Main flow (event)---------------------
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); //chặn reset trang
  //   lấy data từ các ô input để tạo Student
  let name = document.querySelector("#name").value;
  let birthday = document.querySelector("#birthday").value;
  //   từ 2 giá trị thu được tạo student
  let newStudent = new Student(name, birthday);
  // lưu vào localStorage
  let store = new Store(); // tạo ra anh chuyên quản lý localStorage
  store.add(newStudent); // chưa làm
  // render lên ui
  let ui = new RenderUI(); //UI là anh chuyên vai trò RenderUI
  ui.add(newStudent); // chưa làm
  // thông báo đã thêm thành công
  ui.alert(`Bạn vừa lùa thành công ${name}`);
});

// productList []
// dùng reduce => html

document.addEventListener("DOMContentLoaded", () => {
  let ui = new RenderUI();
  ui.renderAll();
});

// sự kiện xóa
document.querySelector("tbody").addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-remove")) {
    let idRemove = event.target.dataset.id;
    // idRemove là mã của student cần xóa
    // Từ idRemove này tìm student cần xóa trong students
    let store = new Store();
    let student = store.getStudent(idRemove);

    // getStudent(id) là hàm tìm student bằng id trong students | hàm chưa làm
    let isConfirmed = confirm(
      `Có chắc là bạn muốn xóa sinh viên ${student.name} ?`,
    );
    if (isConfirmed) {
      // Xóa ls
      store.remove(idRemove); // chưa làm
      // Xóa ui
      let ui = new RenderUI();
      ui.renderAll(); // hiệu nặng thấp
      // Hiện thông báo xóa thành công
      ui.alert(`sv ${student.name} đã bị xóa`, "danger");
    }
  }
});
