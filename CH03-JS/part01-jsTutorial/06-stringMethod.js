console.log("06 String Method");

// Chuỗi trong js được đặt trong dấu '', "", `` (template string)

// 1. length là prop của string cung cấp độ dài

let str = `ahihi`;
console.log(str.length);

// 2. indexOf(str): nhận vào chuỗi và trả ra vị trí tìm được chuỗi đó
console.log(str.indexOf("h")); // 1
console.log(str.indexOf("ih")); // 2
console.log(str.indexOf("s")); // -1

// tách chuỗi
// 1. slice(start, end): chiết xuất chuỗi con trong chuỗi cha
// tính từ start dến end - 1

let x = "Xin chào PiedTeam, mình là Điệp";

let result = x.slice(9, 17);
console.log(result); // PiedTeam

// string là immutable: obj có method không làm method không làm thay đổi obj đó mà return về obj kết quả

// cắt ngược
result = x.slice(-22, -14);
console.log(result); // PiedTeam

// Cắt bằng 1 parameter
result = x.slice(9);
console.log(result);

// Cắt bằng 1 parameter nhưng ngược
result = x.slice(-12);
console.log(result);

// 3. substring(start, end): chiết xuất chuỗi con trong chuỗi cha tính từ start đến end - 1
// giống slice nhưng không có ngược
// 4. substr(start, length): chiết xuất từ chuỗi con từ start có độ dài là length - đã bị loại bỏ khỏi hệ thống js

// II - các method phổ biến
// 1. replace(thay thế chuỗi)
let str1 = "PiedTeam có nhiều bạn rất nhiều tiền";
str1 = str1.replace("nhiều", "ít");
console.log(str1);
// 2. replaceAll()
str1 = "PiedTeam có nhiều bạn rất nhiều tiền";
str1 = str1.replaceAll("nhiều", "ít");
console.log(str1);

// dùng regex
str1 = "PiedTeam có nhiều bạn rất nhiều tiền";
str1 = str1.replace(/nhiều/g, "ít");
console.log(str1);

// Chuyển đổi hoa thường .toUpperCase(), .toLowerCase
// 3. concat() nối chuỗi
str1 = "Xin chào";
str2 = "PiedTeam";

str3 = str1.concat(" " + "mừng bạn đến với" + " " + str2);
str3 = `${str1} mừng bạn đến với ${str2}`;
console.log(str3);

// 4. trim(): xóa khoảng cách thừa ở 2 đầu
str1 = "     Xin         Chào    Các       Bạn        ";
str1 = str1.trim();
console.log(str1);

// Cách 1: replace
str1 = "     Xin         Chào                          Các     Bạn        ";
str1 = str1.replace(/\s+/g, " ").trim();
console.log(str1);

// Cách 2: pro player có kinh nghiệm xử lý mảng và chuỗi
// .split
// .filter
// .join
str1 = "     Xin         Chào                          Các     Bạn        ";
str1 = str1
  .split(" ")
  .filter((item) => item != "")
  .join("-");
console.log(str1);

// 5. So sánh chuỗi == | ===
// 6. charAt(index): trả ra kí tự ở vị trí index trong chuỗi
x = "Lê Mười Điệp";
console.log(x.charAt(3));
console.log(x[3]);
x[3] = "L";
console.log(x); // immutable
// :"lÊ mười đIỆp" => "Lê Mười Điệp" về làm bài này (hint, tác chuỗi và đổi lại)
