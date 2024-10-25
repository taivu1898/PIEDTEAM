const express = require("express");
const { query, validationResult, matchedData } = require("express-validator");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get(
  "/hello",
  query("person").notEmpty().withMessage("Person Query is required").escape(),
  // Cách kiểm tra cũ là validation chain
  // escape(): Dọn rác đầu vào
  (req, res) => {
    const errors = validationResult(req); // Lấy lỗi từ req đã note trước đó
    if (errors.isEmpty()) {
      const data = matchedData(req); // Lấy những dữ liệu đã được lọc qua
      console.log(data);

      res.send("Hello bạn " + req.query.person);
    } else {
      res.status(400).json({
        message: "invalid value",
        errors,
      });
    }
  }
);

app.listen(PORT, () => {
  console.log("server test ESP valiedator running at PORT " + PORT);
});
