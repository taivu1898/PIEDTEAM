// index giống main
// muốn xài hàm sum

import logName, { sum } from "./helper.js";
// Default không cần nằm trong ngoặc nhọn, 1 file chỉ có 1 default, còn lại nằm trong cấu trúc phân rã

const ans = sum(1, 5);
console.log(ans);

logName();
