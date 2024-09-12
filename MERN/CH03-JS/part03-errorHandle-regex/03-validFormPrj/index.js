// mỗi công ty và mỗi business rule thì các trường giá trị sẽ có các
// quy định đầu vào khác nhau, mình phải tuân thủ theo các quy ước trên

// rule validate (những yêu cầu để công nhận là validate)
// email: isRequired, isEmail
// name: isRequired, isName(có thể tiếng việt, tiếng anh, max 50)
// gender: isRequired
// country: isRequired
// password: isRequired, min 8 , max 30
// confirmedPassword: isRequired, min 8 , max 30, isSame(password)
// agree: isRequired
const REG_EMAIL =
  /^[a-zA-Z\d\.\-\_]+(\+\d+)?@[a-zA-Z\d\.\-\_]{1,65}\.[a-zA-Z]{1,5}$/;
const REG_NAME =
  /^[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]+((\s[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]+)+)?$/;

// viết hàm nhận vào value và kiểm tra value theo một tiêu chí nào đó
// nếu như value đó hợp lệ thì return ""
// nếu value ko hợp lệ thì return "câu chửi tương ứng"

const isRequired = (value) => (value ? "" : "That field is required");
const isEmail = (value) => (REG_EMAIL.test(value) ? "" : "Email is invalid");
const isName = (value) => (REG_NAME.test(value) ? "" : "Name is valid");
const min = (numBound) => (value) =>
  value.length >= numBound ? "" : `Min is ${numBound}`;
const max = (numBound) => (value) =>
  value.length <= numBound ? "" : `Max is ${numBound}`;
const isSame = (paramValue, fieldName1, fieldName2) => (value) => {
  return value == paramValue
    ? ""
    : `${fieldName1} isn't match with ${fieldName2}`;
};

// ta có 1 object có cấu trúc như sau
/*
    {
        value: giá trị của controlNode
        funcs: mảng các hàm mà value cần check
        parentNode: là div cha mà controlNode dùng để chứa câu chửi
        controlNodes: mảng các input cần thêm class is-invalid nếu lỗi
    }
*/

// let nameNode = document.querySelector("#name")
// paramObject = {
//     value: nameNode.value,
//     funcs: [isRequired, isName],
//     parent: nameNode.parentElement,
//     controlNodes: [nameNode]
// }

// tạo hàm thông báo chửi
const createMsg = (parentNode, controlNodes, msg) => {
  // Tạo div và bỏ câu muốn chửi vô
  let invalidDiv = document.createElement("div");
  invalidDiv.innerHTML = msg;
  invalidDiv.className = "invalid-feedback";
  parentNode.appendChild(invalidDiv); // nhét vào div cha để hiển thị
  // duyệt từng ô input thêm class is-invalid
  controlNodes.forEach((inputNode) => {
    inputNode.classList.add("is-invalid");
  });
};

// ví dụ mình muốn chửi thằng name
// let genderNode = document.querySelector("#gender")
// createMsg(genderNode.parentElement, [genderNode], "Ngu")

/*
hàm isValid: hàm nhận vào 1 object có dạng
// paramObject = {
//     value: nameNode.value,
//     funcs: [isRequired, isName],
//     parent: nameNode.parentElement,
//     controlNodes: [nameNode]
// }
hàm sẽ duyệt danh sách các hàm có tên funcs và cho value chạy qua từng hàm trong đó
chỗ nào bị chửi thì nó sẽ gọi hàm createMsg để render câu chửi 
*/

const isValid = ({ value, funcs, parentNode, controlNodes }) => {
  //destructuring
  // duyệt mảng các funcs và cho chúng chạy với value để kiểm tra
  for (const funcCheck of funcs) {
    let msg = funcCheck(value);
    // khi có câu chửi
    if (msg) {
      createMsg(parentNode, controlNodes, msg);
      return msg;
    }
  }
  return "";
};

// hàm xóa hết thông báo
const clearMsg = () => {
  document.querySelectorAll(".is-invalid").forEach((item) => {
    item.classList.remove("is-invalid");
  });
  document.querySelectorAll(".invalid-feedback").forEach((item) => {
    item.remove();
  });
};

// hàm sự kiện diễn ra
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); // chặn reset trang
  clearMsg();
  // lấy ra danh sách các nút input
  let emailNode = document.querySelector("#email");
  let nameNode = document.querySelector("#name");
  let genderNode = document.querySelector("#gender");
  let passwordNode = document.querySelector("#password");
  let confirmedpasswordNode = document.querySelector("#confirmedPassword");
  let countryNode = document.querySelector("input[name='country']:checked");
  let agreeNode = document.querySelector("input#agree:checked");

  const errorMsgs = [
    // email
    isValid({
      value: emailNode.value,
      funcs: [isRequired, isEmail],
      parentNode: emailNode.parentElement,
      controlNodes: [emailNode],
    }),
    // name
    isValid({
      value: nameNode.value,
      funcs: [isRequired, isName],
      parentNode: nameNode.parentElement,
      controlNodes: [nameNode],
    }),
    // gender
    isValid({
      value: genderNode.value,
      funcs: [isRequired],
      parentNode: genderNode.parentElement,
      controlNodes: [genderNode],
    }),
    // password
    isValid({
      value: passwordNode.value,
      funcs: [isRequired, min(8), max(30)],
      parentNode: passwordNode.parentElement,
      controlNodes: [passwordNode],
    }),
    // confirmedPassword
    isValid({
      value: confirmedpasswordNode.value,
      funcs: [
        isRequired,
        min(8),
        max(30),
        isSame(passwordNode.value, "Confirmed Password", "Password"),
      ],
      parentNode: confirmedpasswordNode.parentElement,
      controlNodes: [confirmedpasswordNode],
    }),
    // country
    isValid({
      value: countryNode ? countryNode.value : "",
      funcs: [isRequired],
      parentNode: document.querySelector(".form-check-country").parentElement,
      controlNodes: document.querySelectorAll("input[name='country']"),
    }),
    // agree
    isValid({
      value: agreeNode ? agreeNode.value : "",
      funcs: [isRequired],
      parentNode: document.querySelector("#agree").parentElement,
      controlNodes: [document.querySelector("#agree")],
    }),
  ];
  console.log(errorMsgs);
  const isValidForm = errorMsgs.every((item) => item == "");
  if (isValidForm) {
    alert("Form is valid");
    clearMsg();
  }
});
