# JavaScript Tutorial

## Khái niệm cơ bản

- [Variable](#variable)
  - [Scope](#scope)
  - [Hoisting](#hoisting)
- [Pass by Value vs Pass by Reference](#pass-by-vale-vs-pass-by-reference)
- [Loops](#loops)
- [Function](#function)
  - [Function Declarations](#function-declarations)
  - [HOF](#hof)
  - [Bind](#bind)
- [Methods](#methods)
  - [String Methods](#string-methods)
  - [Array Methods](#array-methods)
  - [Object Methods](#object-methods)

## DOM - Document Object Model

- [Select element](#select-element)
- [Mouse keyboard event](#mouse-keyboard-event)

---

## Variable - Biến

Khai báo biến trong JavaScript

- Cách 1: var - xuất hiện từ phiên bản ES đầu tiên

```js
let msg = "Hello World";
```

- Cách 2: let và const - xuất hiện từ phiên bản ES6

```js
let a = 10;
var b = 11;
```

Const và Object

```js
const profile = {
  name: "Oggy",
  height: 160,
};
```

> Một đối tượng sẽ được tham chiếu tới một vùng nhớ nằm ở `stack`, đối tượng và thuộc tính sẽ ở `heap`

`const` (hằng số) sẽ là tham chiếu hằng, ví dụ như `profile`

### Scope

Có 3 loại `scope`:

1. **Global Scope**: `var`

```js
if (true) {
  var x = 10;
}

console.log(x);
```

2. **Block Scope**: `const`, `let`
3. **Function Scope**: `var`

### Hoisting

Các biến được khai báo bằng `var` được hoitsed, nghĩa là khai báo biến được đưa lên đầu phạm vi nhưng giá trị thì không được hoisted
