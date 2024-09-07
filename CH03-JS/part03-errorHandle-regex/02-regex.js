// Regex là gì ?
// Regex hay là regular expression | pattern | Biểu thức chính quy
// Mẫu định dạng cho các chuỗi
// Hơi giống like trong SQL
// Regex là một Obj
// Mình dùng method .test() | thay vì matches() java

let regex1 = /name/;
console.log(regex1.test("Điệp is my name")); // true

regex1 = /name/; // bỏ qua hoa thường
console.log(regex1.test("Điệp is my Name")); // false

regex1 = /name/i; // bỏ qua hoa thường, i: ignore case
console.log(regex1.test("Điệp is my Name")); // true

// Một vài method xài cùng regex
console.log(regex1.exec("Điệp is my Name"));
console.log("Điệp is my Name".match(regex1));
console.log("Điệp is my Name".search(regex1)); // 11

// replace

// Regex metcharacter symbols: phần này nên test ở trong regexr.com
// Bắt đầu chuỗi ^asda
// Kết thúc chuỗi asda$
// trong chuỗi chỉ có ^asda$

// .: một kí tự bất kỳ (ngoại trừ enter)
// * lặp lại từ 0 đến n
// + lặp lại từ 1 đến n
// ? lặp lại từ 0 đến 1
// {start, end}: từ start dến end lần

// [] hoặc \ để thoát chuỗi escape character

/// III. regex character sét và quantifiers
// character set [...]
// character set [^...]
// set digit [0-9]
// set alpha [A-Z] [a-z] [a-zA-Z]
// Gom nhóm () và hoặc |

// Short hand
// muốn chữ và số \w phủ định \W
// muốn số \d phủ định \D
// muốn space \s \S
// a(?=n) tìm a mà kế bên là n
// a(?!=n) tìm a mà kế bên không là n

// Ký tự biên \b
// Ký tự biên là gì, và năm ở đâu trong câu
// Ký tự biên nằm giữa cấu trúc
// Ký tự từ + ký tự biên + không phải ký tự từ
// Không phải ký tự từ + ký tự biên + không phải ký tự từ

// vd
// exp: \bword\b
// new word
//words in my letter
//sword in my hand
//the 'word' is shiet
// Tiumf tu word và chỉ từ word

// Về nhà học Form bootstrap https://getbootstrap.com/docs/4.0/components/forms/
// HOF: callback curying closure
// method xử lý mảng
