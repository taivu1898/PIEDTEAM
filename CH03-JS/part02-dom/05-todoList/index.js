document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); // Chặn sự kiện reset trang khi submit
  let name = document.querySelector("#name").value;
  // Tạo ra đối tượng item
  const item = {
    id: new Date().toISOString(),
    name: name.trim(),
  };
  // Hiển thị object item lên ui
  addItemtoUI(item);
  // Lưu trữ item lên LocalStorage
  addItemtoLS(item);
});

// addItemtoUI: hàm nhận vào item và hiển thị lên UI
const addItemtoUI = (item) => {
  const { name, id } = item; // destructuring
  let newCard = document.createElement("div");
  newCard.className =
    " d-flex flex-row card justify-content-between align-items-center p-2 mb-3";
  newCard.innerHTML = `
      <span>${name}</span>
      <button data-id="${id}" class="btn btn-danger btn-sm btn-remove">Remove</button>
    `;
  document.querySelector(".list").appendChild(newCard);
};

// getList: lấy danh sách các item từ LocalStorage về
const getList = () => {
  return JSON.parse(localStorage.getItem("list")) || [];
};

const addItemtoLS = (item) => {
  let list = getList(); // Lấy danh sách từ LocalStorage về
  list.push(item); // Nhét item vào danh sách
  localStorage.setItem("list", JSON.stringify(list)); // Lưu list đã nhét item lên lại
};

// Hàm render tất cả item lên ui mỗi khi vào trang
const init = () => {
  let list = getList(); // Lấy danh sách từ LocalStorage về
  list.forEach((item) => {
    addItemtoUI(item);
  });
};

init();

document.querySelector(".list").addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-remove")) {
    const nameItem = event.target.previousElementSibling.textContent;
    const isConfirmed = confirm(
      `Bạn có chắc là muốn xóa item: ${nameItem} không ?`,
    );
    if (isConfirmed) {
      // Xóa trên ui
      event.target.parentElement.remove();
      // Xóa trên LocalStorage
      const idRemove = event.target.dataset.id; // Lấy id cần remove từ data-id của nút xóa
      removeItemFromLocalStorage(idRemove);
    }
  }
});

//hàm nhận vào id từ btn-remove đã nhấn, dùng id để dò tìm và xóa item trong localStorage
const removeItemFromLocalStorage = (idRemove) => {
  let list = getList(); // Lấy danh sách item về
  list = list.filter((item) => item.id != idRemove); // Lọc những thằng khác với id cần xóa
  localStorage.setItem("list", JSON.stringify(list)); // Lưu list đã cập nhật lên lại
};

// Remove all
document.querySelector("#button-remove-all").addEventListener("click", () => {
  const isConfirmed = confirm("Bạn có chắc là muốn xóa toàn bộ item không");
  // Xóa hết trên UI và LocalStorage
  if (isConfirmed) {
    document.querySelector(".list").innerHTML = "";
    localStorage.removeItem("list");
  }
});

// Chức năng filter
document.querySelector("#filter").addEventListener("keyup", (event) => {
  let inputValue = event.target.value; // Lấy value từ ô input diễn ra sự kiện
  let list = getList();

  list = list.filter((item) => item.name.includes(inputValue));
  // Xóa các item trong list để render list vừa lọc
  document.querySelector(".list").innerHTML = "";
  list.forEach((item) => {
    addItemtoUI(item);
  });
});
