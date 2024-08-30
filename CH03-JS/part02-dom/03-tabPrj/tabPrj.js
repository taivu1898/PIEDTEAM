let btnList = document.querySelectorAll(".navtab-btn");
let contentList = document.querySelectorAll(".tab-content-item");

// duyet tung nut vaf noi tung cai nut lang nghe su kien
btnList.forEach((btn) => {
  // neu ma co 1 nut bi click thi
  btn.addEventListener("click", (event) => {
    // duyet cac nut va xoa het actived cu di
    btnList.forEach((_btn) => {
      _btn.classList.remove("actived"); // xoa actived trong class
    });
    // thang nao vua bi click thi them actived di
    event.target.classList.add("actived");
    // duyet danh sach content va xoa actived
    contentList.forEach((content) => {
      content.classList.remove("actived");
    });
    // lay id cua thang bi nhan
    let id = event.target.id;
    let contentChecked = document.querySelector(
      `.tab-content-item[data-id="${id}"]`,
    );
    contentChecked.classList.add("actived");
  });
});

