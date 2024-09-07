// runtimeError: lỗi khi vận hành | do người dùng
// syntaxError : lỗi sai cú pháp  | do người code
// logicError  : Lỗi sai tư duy   | do người code => lỗi nguy hiểm nhất

// tryCatch: dùng để xử lý lõi phát sinh trong runtimeError
// Nhớ rằng tryCatch không vận hàng trong syntaxError
// `Try Catch` chỉ hoạt động trong môi trường đồng bộ mà thôi
// JS là đơn luồng

// Đồng bộ
//try {
//  diepPiedTeam;
//} catch (error) {
//  console.log(error);
//}

// Bất đồng bộ
//try {
//  setTimeout(() => {
//    diepPiedTeam;
//  }, 1000);
//  console.log("Hello");
//} catch (err) {
//  console.log(err);
//}

//setTimeout(() => {
//  try {
//    setTimeout(() => {
//      diepPiedTeam;
//    }, 1000);
//    console.log("Hello");
//  } catch (err) {
//    console.log(err);
//  }
//}, 1000);

// trycatch giống 'use strict'
// Nên code cấu trúc như thế này
// CH06: promise.then.catch
//Cấu trúc của một Error trông như nào
//
//* Vì mình làm Backend nên mình phải xử lý lỗi rất nhiều
//* Xử lý lỗi: `làm cho lỗi tường minh, dễ nhìn, giấu đi những thông tin nhạy cảm`

// Gõ thư "new Error" và ctrl + click || gd xem trong đó có gì

//try {
//  diepPiedTeam;
//  console.log("Hello");
//} catch (error) {
//  console.log(error);
//  console.log(error.name);
//  console.log(error.message);
//  console.log(error.stack);
//}

// flow;
// stack là prop mà mình không muốn người dùng nhìn thấy nhất
// flow: omit stack
// Error:       new Error
// name         name
// message  --> message
// stack

// flow2: custom Error
// Error:       ErrorWithStatus extends Error
// name         status
// message  --> message
// stack
// Khi nào học Backend sẽ được học

// Mình có thể tự điều hướng về catch thông qua lệnh throw

//let money = 9999999999999999;
//
//try {
//  if (money > 999999999999999) {
//    throw new Error("Số quá lớn với sức chưa");
//  }
//  console.log(money);
//} catch (err) {
//  console.log(err);
//}

// EvalError():     tạo 1 instance đại diện cho một lỗi xảy ra liên quan đến hàm toàn cục Eval()
// InternalError(): tạo 1 instance đại diện cho một lỗi xảy ra khi 1 lỗi bên trong jsEngine
//                  được ném. vd: quá nhiều đệ quy
// RangeError()   : tạo 1 instance đại diện cho một lỗi xảy ra khi một biến số hoặc tham chiếu
//                  nằm ngoài phạm vi hợp lệ của nó
// ReferenceError : tạo 1 instance đại diện cho một lỗi xảy ra khi hủy tham chiếu của 1 tham chiếu
//                  không hợp lệ
// SyntaxError    : tạo 1 instance đại diện cho một lỗi xảy ra trong khi phân tích cú pháp
//                                                                          mã trong Eval()
// TypeError      : tạo 1 instance đại diện cho một lỗi xảy ra khi một biến hoặc 1 tham số
//                  có kiểu không hợp lệ
// URIError       : tạo 1 instance đại diện cho một lỗi xảy ra khi encodeURI() hoặc decodeURI()
//                  truyền các tham số không hợp lệ
// > những cái trên chỉ để bổ nghĩa cho lỗi

// Finally
//loading = true;
//
//try {
//  getData(); // Hàm chưa có => lỗi
//  loading = false;
//} catch (err) {
//  loading = true;
//} finally { // thừa -> không xài đâu
//  loading = false;
//}

// Tạo ra một dạng lỗi mới
class ErrorWithStatus extends Error {
  constructor({ status, message }) {
    super(message);
    this.status = status;
  }
}

try {
  throw new Error("Tôi bị hack ròi");
} catch (err) {
  let newError = new ErrorWithStatus({
    status: 401,
    message: "Mày là thằng gà",
  });
  console.log(newError);
}
