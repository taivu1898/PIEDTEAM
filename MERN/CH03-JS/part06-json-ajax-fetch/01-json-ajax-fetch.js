// JSON: JavaScript Object Notation
// JSON là một chuỗi được viết dưới dạng JS Object
// - Là một chuỗi được viết dưới dạng JS Object
// - Dùng dể lưu trữ và trao đổi dữ liệu giữa các ngôn ngữ khác
// - Có thể lưu trữ dữ Liệu các dạng: number, string, boolean, array, object, null
// BUG:  không nên lưu null

// Có 2 thao tác chính: JSON.parse() và JSON.stringify()

const obj1 = {
  name: "Điệp đẹp trai",
  age: 22,
  status: "Hay dận dỗi",
  stydy() {
    console.log("Hello");
  },
};

let myJson = JSON.stringify(obj1);

console.log(obj1);
console.log(myJson); // {"name":"Điệp đẹp trai","age":22,"status":"Hay dận dỗi"}

// Cú pháp của JSON
// - Với Object thì data là cặp key: value (prop)
// - Data được ngăn cách bởi dấu phẩy
//   - Object được bao bọc bởi dấu {}
//   - array được bao bọc bởi []
//   - stirng được bọc bởi ""
//   - key phải là string và được bọc bởi ""
//   - value phải thuộc các dạng : number, string boolean, array, object, null
// Không lưu trữ được function và method

// AJAX: Asynchronouse JavaScript and XML
// AJAX k phải ngôn ngữ lập trình, là kết hợp rất nhiều công nghệ
//   - html: hiển thị dữ liệu và giao tiếp người dùng
//   - css: trang trí cho giao diện
//   - js: xử lý logic
//   - XML: định dạng dữ liệu cần lưu trữ (lỗi thời)
//   - JSON: định dạng dữ liệu cần lưu trữ
// JS và DOM

// AJAX giúp chúng ta đọc dữ liệu từ server trả về
// - Giúp gửi dữ liệu lên server ở chế độ ngầm
// - Cập nhật trang web mà không cần reset trang
// - Là nền tảng phát triển của React, Angular, Vue

// Các cách để giao tiếp với 1 server side:
// 1. XMLHttpRequest(XHR): lỗi thời rồi, đây là phương pháp giao tiếp cổ xưa nhất
// 2. FetchAPI: cung cấp cho mình khả năng gửi request / nhận response thông qua trình duyệt lên server
//   - request: yêu cầu
//   - response: kiện hàng (nếu đi đúng dường dẫn và không rớt mạng)

// Fetch dùng công nghệ Promise

// Trong hệ thống backend của mockAPI thì endpoint được quy định là resource/collection/table
const baseURL = "https://66fb75a38583ac93b40bd2e5.mockapi.io";
// Tạo ra 1 request yêu cầu server hứa rằng sẽ trả dữ liệu về cho mình bằng cách sử dụng Fetch
//fetch(`${baseURL}/users`)
//  .then((response) => {
//    // B1: log response ra để nghiên cứu
//    // B2: server trả về response, nếu oke thì
//    if (response.ok) {
//      // Khui kiện hàng
//      return response.json(); // BUG: nếu .then là Promise hell
//    } else {
//      throw new Error(response.statusText);
//    }
//  })
//  .then((data) => {
//    console.log(data);
//  })
//  .catch((err) => {
//    console.log(err);
//  });

// Demo post 1 user mới vào table users của server
fetch(`${baseURL}/users`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Vũ Viết Tài",
  }),
})
  .then((response) => {
    // B1: log response ra để nghiên cứu
    // B2: server trả về response, nếu oke thì
    if (response.ok) {
      // Khui kiện hàng
      return response.json(); // BUG: nếu .then là Promise hell
    } else {
      throw new Error(response.statusText);
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });