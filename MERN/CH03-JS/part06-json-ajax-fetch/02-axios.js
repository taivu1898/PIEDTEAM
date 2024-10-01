import axios, { Axios } from "axios";

// Axios: là một http client dùng để gửi request và nhận và response
// - Một thư viện giúp tương tác với API như GET, POST, PUT, DELETE, PATCH

// Axios không có sẵn trong trình duyệt (phải tự cài đặt)
const baseURL = "https://66fb75a38583ac93b40bd2e5.mockapi.io";

// Lấy dữ liệu từ server các user trong table users bằng công nghệ axios
//axios({
//  method: "GET",
//  url: `${baseURL}/users`,
//  // trả về Promise
//})
//  .then((response) => {
//    // Nhận kiện hàng
//    //console.log(response); // Mở ra xem thử
//    if ([200, 201].includes(response.status)) {
//      return response.data;
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

// Thêm 1 user mới vào users
//axios({
//  method: "POST",
//  url: `${baseURL}/users`,
//  data: {
//    name: "Mua Bán Nợ Song Long",
//  },
//})
//  .then((response) => {
//    // Nhận kiện hàng
//    //console.log(response); // Mở ra xem thử
//    if ([200, 201].includes(response.status)) {
//      return response.data;
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

// Dùng alias post
//axios
//  .post(`${baseURL}/users`, {
//    data: {
//      name: "Mua Bán Nợ Đất Bắc",
//    },
//  })
//  .then((response) => {
//    // Nhận kiện hàng
//    //console.log(response); // Mở ra xem thử
//    if ([200, 201].includes(response.status)) {
//      return response.data;
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

// instance: bản thể
// cho phép mình tạo ra bản thể của nó nhưng có thể config
//const instance = axios.create({
//  baseURL: baseURL,
//  timeout: 10000, // sau 10s thì tự hủy
//  headers: {
//    "Content-Type": "application/json",
//  },
//});
//
//instance
//  .post(`${baseURL}/users`, {
//    data: {
//      name: "Mua Bán Nợ Đất Bắc",
//    },
//  })
//  .then((response) => {
//    // Nhận kiện hàng
//    //console.log(response); // Mở ra xem thử
//    if ([200, 201].includes(response.status)) {
//      return response.data;
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

class Http {
  constructor() {
    this.instance = axios.create({
      baseURL: baseURL,
      timeout: 10000, // sau 10s thì tự hủy
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.instance.interceptors.response.use(
      (response) => {
        return {
          data: response.data,
          status: response.status,
        };
      },
      (response) => {
        return Promise.reject({
          status: response.status,
          statusText: response.statusText,
        });
      },
    );
  }
}

// TEST:
let http = new Http().instance;

http
  .post(`users`, {
    name: "Tài Lựu Đạn",
  })
  .then((response) => {
    console.log(response);
  });
