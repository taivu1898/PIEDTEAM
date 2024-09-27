// Bản thân của JS là ngôn ngữ đơn luồng
// JS chạy trên web là nodejs(JS runtime `Enviroment`), 2 thằng này hỗ trợ đa luồng cho JS (V8)

// php và java là đa luồng synchronuos đồng bộ:

// synchronous: đồng bộ
// anh có tác vụ l1(3s) và l2(2s)
// để hoàn thành l1 và l2 là 5s
// nhưng nếu l1 là nguyên nhân dẫn đến l2 thì mới hợp lý

// nhưng nếu l1 và l2 là 2 tác vụ độc lập thì ta muốn nó không cần đợi nhau nữa, chạy cùng lúc cho nhanh (3s)
// asynchronous: bất đồng bộ

// js của em luôn là bất đồng bộ asynchronous, việc này vừa tốt vừa xấu
// khi nào cần l2 đợi l1 thì mình phải chỉnh vè synchronous

//call stack là một cấu trúc dữ liệu dạng ngăn xếp (LIFO)

function a(x) {
  console.log(x);
}

function b(y) {
  a(y + 2);
}

function c(z) {
  b(z + 1);
}

c(5);

//c5 => z = 5 => b(z + 1) => z + 1 => y = z + 1 => y + 2 => log => log

// Event loop và callback queue(kiu)
// trong js runtime `Enviroment` (môi trường chạy js ) còn có nhiều thứ rất quan trọng, chứ không chỉ có call stack
// về vùng nhớ thì chia làm  2, heap và calltack
// Event loop liên tục lặp đi lặp lại chờ đợi 1 sự kiện "click, submit .."
// Event loop                                            callback queue
// web APIS: DOM | AJAX (XMLHttpRequest) | timeOut(settimeout, ...)
// demo sự bât đông bộ trong jj

function main() {
  console.log("command1");

  setTimeout(function () {
    console.log(command2);
  }, 10000);

  console.log("command3");

  setTimeout(function () {
    console.log(command4);
  }, 1000);
}

main(); // 1 3 4 2

//asynchronous callback: xử lý bất đồng bộ bằng callback
//docfile("productData.txt", (data) => {
//  console.log(data)
//})
//
//docfile = function (urlFile, func) {
//  // urlFile truy vaans file vaf dodjc file 3s thu vef data
//  func(data) // để xử lý
//}
//
//ưu điểm: để viết
//nhược điểm: khó fix bug, callback hell
//
//promise
for (var i = 0; i <= 3; i++) {
  // let thì như bth
  setTimeout(function () {
    console.log(i);
  }, 5000);
}

try {
  setTimeout(function () {
    throw new Error("Lôi chà bá");
  }, 3000);
} catch (err) {
  console.log(err);
}

// xử lý
setTimeout(function () {
  try {
    throw new Error("loi cha ba");
  } catch (err) {
    console.log(err);
  }
}, 3000);
