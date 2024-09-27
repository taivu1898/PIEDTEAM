//Promise là một lời hứa diễn ra trong tương lai: anh sẽ làm điều gì đó
//Promise are eager not lazy

//Anh hứa anh sẽ đi Vũng Tàu và mua cho em bánh bông lan trứng muối ?
//Nếu được thì anh sẽ: "1 nụ hôn"
//Nếu không được     : "1 sự thất vọng"

//Một lời hứa có 3 trạng thái:
//- pending: đang chờ kết quả, đang thực hiện
//  - Nếu đầu tháng 10 sếp ép ảnh đi công tác vũng tàu một ngày thì ảnh có cơ hội mua bông lan trứng muối => lời hứa thành công
//  onFulfilled: cái Promise sẽ dùng resolve("1 nụ hôn")
//  - Nếu hứa xong thời đánh thánh vật, cả tháng 10 ảnh bệnh không ngóc đầu lên
//  onRejected: cái Promise sẽ dùng Reject("1 sự thất vọng")

//Cú pháp của Promise

//new Promise((resolve, reject) => {});
//new Promise( function(resolve, reject) {});

// Tạo tác nhân ngoại cảnh: Chúa
//let wallet = 500;

// -- Vai: anh trai hứa với cô gái rằng
// "anh sẽ mua cho em chiếc cà rá 5000$"
//let p1 = new Promise((resolve, reject) => {
//  if (wallet >= 5000) {
//    resolve("1 nụ hôn");
//  } else {
//    reject("1 sự thất vọng");
//  }
//});

// vai: cô gái kiểm chứng lời hứa
//p1.then((value) => {
//  console.log(`
//  Nếu khi kiểm chứng lời hứa mà vào then nghĩa là lời hứa đã thành công
//  onFulfilled và value là những gì có trong resolve
//  `);
//  console.log(value);
//}).catch((error) => {
//  console.log(`
//  Nếu khi kiểm chứng mà code lọt vào catch, nghĩa là lời hứa đã thất bại,
//  thằng chó đó không có tiền, thứ tôi nhận được sau kiểm chứng laf những gì
//  có trong reject
//  `);
//  console.log(error);
//});

//Ứng dụng của Promise trong async callback
//let data;
// server sẽ mất một lượng thời gian trong quá trình giao tiếp với client
// Sau ít giây thì server sẽ trả dữ liệu cho mình

//setTimeout(() => {
//  console.log("Gán giá trị");
//  data = { name: "Điệp", age: 24 };
//}, 3000);
//
//console.log(data);
//
// TODO: Dùng Promise dể khắc phục, Ép server phải hứa với ảnh rằng, sau 1 ít thời gian thì gửi cho mình data nhé
//
//let p2 = new Promise((resolve, reject) => {
//  setTimeout(() => {
//    resolve({ name: "Điệp", age: 24 });
//  }, 3000);
//});
//
// NOTE: server không có thất bại
//
//// Kiểm chứng
//p2.then((value) => {
//  data = value;
//  console.log(data);
//});

//Từ 0s đến 3s là pending
//nếu sau 3s server dùng resolve thì nghĩa là Promise này sẽ chuyển thành onFulfilled
//và người kiểm chứng sẽ nhận được ở mệnh đề then
//Nếu sau 3s server dùng reject thì nghĩa là Promise này sẽ chuyển thành onRejected và người kiểm chứng sẽ nhận được ở mệnh đề catch

// Promise are eager not lazy
// Ví dụ: cách cùi

//let a = 1;

//let p2 = new Promise((resolve, reject) => {
//  a++;
//});

//console.log(a);

//Ví dụ: cách 2: hơi cùi: function

//let a = 1;
//
//function handle() {
//  let p3 = new Promise((resolve, reject) => {
//    a++;
//  });
//  return p3;
//}
//
//handle().then
//console.log(a);

// Cách 3: cách chuẩn
//let a = 1;
//
//let p3 = () => {
//  return new Promise((resolve, reject) => {
//    a++;
//  });
//};
//
//p3().then();
//console.log(a);

//1 Promise chỉ có thể rơi vào 1 trong 3 trạng thái
//pending | onFulfilled | onRejected
//          resolve        reject

//resolve(trả về giá trị dưới dạng value cho then)
//reject(trả về giá trị dưới dạng error cho catch)
//resolve và reject đều k làm cho code dừng lại như return
// resolve và reject ai đến trước thì sẽ quyết định trạng thái của Promise

//let p4 = () => {
//  return new Promise((resolve, reject) => {
//    resolve("ahihi");
//    reject("Lỗi rồi nè");
//    console.log("XIn chào các bạn mọi người");
//  });
//};
//
//// Xác thực
//p4()
//  .then((value) => {
//    console.log("Thành công " + value);
//  })
//  .catch((eror) => {
//    console.log("Thất bại" + eror);
//  });

// NOTE: Nếu return trong then hoặc catch thì ta sẽ đưa Promise về thành onFulfilled
//let p5 = () => {
//  return new Promise((resolve, reject) => {
//    reject("Lỗi chà bá");
//  });
//};
//
//// Xác thực
//p5()
//  .then((value) => {
//    console.log("P5 dã thành công và có " + value);
//  })
//  .catch((error) => {
//    console.log("P5 đã thất bại và có lỗi " + error);
//    return "Lê Hồ Điệp"; // NOTE: return Promise.resolve("Lê Hồ Điệp")
//  })
//  .then((value) => {
//    console.log("Lần này anh ấy có được " + value);
//  });

// NOTE: throw trong then | catch thì ta sẽ đưa lời hứa về onRejected
//let p5 = () => {
//  return new Promise((resolve, reject) => {
//    resolve("Vui vẻ");
//  });
//};

// xác thực
//p5()
//  .then((value) => {
//    console.log("Value là: " + value);
//    throw "ahuhu"; // return 1 cái Promise.reject("Ahuhu")
//  })
//  .catch((error) => {
//    console.log("P5 đã thất bại và có lỗi " + error);
//    return "Lê Hồ Điệp"; // NOTE: return Promise.resolve("Lê Hồ Điệp")
//  })
//  .then((value) => {
//    console.log("Lần này anh ấy có được " + value);
//  })
//  .catch((error) => {
//    console.log("Lỗi nè mày " + error);
//  });

//ứng dụng Promise để xử lý bất đồng bộ
//Anh đang có 2 task cần làm
//task1: lấy profile từ server về (3s)
//task1: lấy article từ server về (2s)

// Ép server hứa sẽ trả dữ liệu sang 1 ít giây
let getProfile = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Điệp", age: 25 });
    }, 3000);
  });
};
//
let getArticle = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Hoàng tử bé", "Mèo dạy hải âu bay", "Cây cam ngọt của tôi"]);
    }, 2000);
  });
};
//
//// Muốn nó độc lập: 3s
//getProfile().then((value) => {
//  console.log(value);
//});
//
//getArticle().then((value) => {
//  console.log(value);
//});
// Muốn nguyên nhân kết quả: 5s
// Cách 1: cùi
//getProfile().then((value) => {
//  console.log(value);
//  getArticle().then((value) => {
//    console.log(value);
//  });
//}); // nhưng sẽ bị Promise hell
//
// Cách 2: tà giáo, prolayer
getProfile()
  .then((value) => {
    console.log(value);
    return getArticle();
  })
  .then((value) => {
    console.log(value);
  });
