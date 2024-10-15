// index giống main nhưng mình sẽ dùng expressjs để dựng server thay cho http

const express = require("express");
// Tạo server với express
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send(`hello from PORT: ${PORT}`);
});

app.get("/user", (req, res) => {
  res.send("Hhihiihihihi");
});

// mở server ở PORT 4000
app.listen(PORT, () => {
  console.log(`Server is running on: ${PORT} `);
});
