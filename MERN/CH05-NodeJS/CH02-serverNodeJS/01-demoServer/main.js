// trong module có http là một module chứa các method giúp mình tạo ra và thao tác với server
// module: CommonJS

const http = require("http"); // module mặc định
const PORT = 4000;

// dùng http tạo server
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(`{"msg":"Ahihi json nè"}`);
});

// server mở ở PORT 4000
server.listen(PORT, () => {
  console.log("Server đang chạy trên port: " + PORT);
});
