let btnAdd = document.querySelector("#btn-add");

btnAdd.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.target);
  //return ra element vua dinh su kien
  let inputNode = document.querySelector("#name");
  let newItem = document.createElement("li");
  newItem.className = "card mb-3 p-2";
  newItem.innerHTML = `<p>${inputNode.value}</p>`;
  let list = document.querySelector("#list");
  list.appendChild(newItem);

  inputNode.value = "";
});
// tham so event la thong tin su kien dang dien ra
// clientX, clientY, offsetX, offsetY
// btn nam trong tag form khi gui se reset lai trang
// click | mouseover | mouseout | dblclick

// keyboard event
let inputNode = document.querySelector("#name");

inputNode.addEventListener("change", (event) => {
  console.log(event);
  console.log(inputNode.value);
});
// kedown | keypress | keyup | input | change

// cookie | localStorage

localStorage.setItem("name", "diep 10 ring");

// localStorage chi co the luu duoc chuoi hoac so ma thoi
// neu muon luu object | mang thi phai chuyen thanh chuoi dang json

const profile = {
  name: "Diep dep trai",
  age: 25,
};

console.log(profile);

let str = JSON.stringify(profile);
console.log(str);
localStorage.setItem("profile", str);

// lay gia tri tu localStorage ra xai
let data = localStorage.getItem("profile");
let object = JSON.parse(data);
console.log(object);

// on boostrap
// function
// bai hom nay

