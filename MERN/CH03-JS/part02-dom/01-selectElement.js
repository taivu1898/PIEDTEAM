// DOM: document object model
// lien ket DOM | moc mot bien vao mot doi tuong trong dom
// neu muon dom 1 doi tuong thi co 2 cach
let inputNode = document.getElementById("name"); // truyen vao gia tri Id
// Node la the | tag
inputNode = document.querySelector("#name"); // truyen vao Selector css
console.log(inputNode);

// querySelector: cho phep ta query tim kiem phan tu dua tren selector css
// du dung class hay id thi van thu ve duoc 1 phan tu

// Vay thi neu ma minh lay ve 1 mang cac the card thi sao
// let cardList = [...document.getElementsByClassName(".card")] // HTML collection
let cardList = document.getElementsByClassName(".card"); // NodeList
console.log(cardList);

// cardList.array.forEach((item) => {
//     console.log(item);
// });
// HTML Collection giong mang nhung thieu cac method can thiet de xu ly pt
// NodeList giong mang nhung day du hon 1 ty
let firstCard = document.querySelector(".card");
console.log(firstCard);
console.log(firstCard.childNodes); // {text, h2, text, p text}
console.log(firstCard.children); // HTML Collection [h2, p]
console.log(firstCard.classList); // [ "card", "p-2", "mb-3" ], cho them xoa
console.log(firstCard.className); // "card p-2 mb-3", them nhieu class
console.log(firstCard.parentElement); // tim thang cha
console.log(firstCard.nextElementSibling); // tim thang giong ban than
console.log(firstCard.firstChild); // text
console.log(firstCard.firstElementChild); // h2

// tao moi 1 element
let newCard = document.createElement("div");
// newCard.classList("card", "mb-3", "p-2")
newCard.className = "card mb-3 p-2";
newCard.innerHTML = `
    <h2>Tao dc tao bang js</h2>
    <p>Tao la 1 node fakee</p>
`;
let cardGroup = document.querySelector(".card-group");
// cardGroup.appendChild(newCard)
cardGroup.replaceChild(newCard, cardGroup.children[1]);

// them atribute vao node
firstCard.setAttribute("ahihi", "1");
console.log(firstCard.getAttribute("ahihi")); // 1
firstCard.removeAttribute("ahihi");

