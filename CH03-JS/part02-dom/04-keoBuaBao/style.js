const VALUES = [
  { id: "scissors", value: "✌🏿" }, // 0
  { id: "rock", value: "✊🏿" }, // 1
  { id: "paper", value: "🖐🏿" }, // 2
];

// phan tich logic
// khi nao nguoi dung thang
// 0 - 2 = -2
// 2 - 1 = 1
// 1 - 0 = 1

// indexPlayer - indexComputer = 1 | -2 laf thang return 1
// indexPlayer - indexComputer = 0      laf hoa return 0
// conf laij                            laf thua return -1
let i = 0;
const handleChange = () => {
  let computer = document.querySelector("#computer");
  computer.textContent = VALUES[i].value; // textContent la sua noi dung trong the
  computer.setAttribute("data-id", VALUES[i].id);
  i = i == VALUES.length - 1 ? 0 : ++i;
};

let interval = setInterval(handleChange, 100);
// lam ham so sanh hai hinh cua ng choi va may 1 | 0 | -1
let compare = (valuePlayer, valueComputer) => {
  let indexPlayer = VALUES.findIndex((item) => item.id == valuePlayer);
  let indexComputer = VALUES.findIndex((item) => item.id == valueComputer);
  let result = indexPlayer - indexComputer;
  // ket luan
  if (result == 1 || result == -2) return 1;
  else if (result == 0) return 0;
  return -1;
};

// dom toi 3 nut nhan cua ng dung
let playerItem = document.querySelectorAll(".user");

// duyet qua tung nut
playerItem.forEach((item) => {
  // neu co 1 nut bi nhan thi
  item.addEventListener("click", (even) => {
    // dung con may lai
    clearInterval(interval);
    // lay gia tri cua minh va may luc do va so sanh
    let valuePlayer = even.target.id;
    let computer = document.querySelector("#computer");
    let valueComputer = computer.dataset.id; // computer.getAttribute("data-id")
    let result = compare(valuePlayer, valueComputer);
    // xoa cac actived cua cac nut
    playerItem.forEach((_item) => {
      _item.classList.remove("actived");
      _item.style.pointerEvents = "none"; // disable tat ca cac nut
    });
    // them actived cho nut vua nhan
    even.target.classList.add("actived");
    // them thong bao
    let alertDiv = document.createElement("div");
    alertDiv.classList.add("alert");

    let msg = "";
    if (result == 1) {
      msg = "Bạn thắng";
      alertDiv.classList.add("alert-success");
    } else if (result == 0) {
      msg = "Bạn hòa";
      alertDiv.classList.add("alert-warning");
    } else {
      msg = "Bạn thua";
      alertDiv.classList.add("alert-dark");
    }
    alertDiv.textContent = msg;

    document.querySelector(".notification").appendChild(alertDiv);
    // hien nut choi lai
    document.querySelector("#play-again").classList.remove("d-none");
  });
});

document.querySelector("#play-again").addEventListener("click", () => {
  // cho bot chay lai
  clearInterval(interval);
  interval = setInterval(handleChange, 100);
  // xoa thong bao
  document.querySelector(".notification").innerHTML = ""; // truy cap ben trong the bao gom the con
  // xoa nut choi lai
  document.querySelector("#play-again").classList.add("d-none");
  // xoa actived tren cac nut va cho nut duoc bam lai
  playerItem.forEach((item) => {
    item.classList.remove("actived");
    item.style.pointerEvents = ""; // khoi phuc kha nang click
  });
});

