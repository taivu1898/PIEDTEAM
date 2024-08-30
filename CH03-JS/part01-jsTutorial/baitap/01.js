let n = prompt("Nhập một số nguyên dương: ");

function pttsn(n) {
  let arr = [];
  for (let i = 1; i <= Math.sqrt(n); ++i) {
    if (n % i === 0) {
      arr.push(i);
      if (n / i !== i) {
        arr.push(n / i);
      }
    }
  }
  arr.sort((a, b) => a - b);
  return arr;
}

function sumDivisor(n) {
  let sum = 0;
  for (let i = 1; i <= Math.sqrt(n); ++i) {
    if (n % i === 0) {
      sum += i;
      if (n / i !== i) {
        sum += n / i;
      }
    }
  }
  return sum;
}

console.log(pttsn(n));
console.log("Tổng ước: " + sumDivisor(n));

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); ++i) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

console.log(isPrime(n) ? n + " là số nguyên tố" : n + " không là số nguyên tô");

function sumDigit(n) {
  if (n < 10) {
    return n;
  }
  return sumDigit(Math.floor(n / 10)) + (n % 10);
}

console.log("Tổng các số: " + sumDigit(n));

let inp = prompt("Nhập lần lượt ngyaf tháng năm: ");
let [day, mount, year] = inp.split("/").map(Number);

console.log(inp);

