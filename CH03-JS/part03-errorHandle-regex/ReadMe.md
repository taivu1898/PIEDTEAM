# tryCatch

`runtimeError`: lỗi khi vận hành | do người dùng

`syntaxError` : lỗi sai cú pháp  | do người code

`logicError`  : Lỗi sai tư duy   | do người code => lỗi nguy hiểm nhất

> tryCatch: dùng để xử lý lõi phát sinh trong runtimeError

Nhớ rằng tryCatch không vận hàng trong syntaxError

 `Try Catch` chỉ hoạt động trong môi trường đồng bộ mà thôi
 JS là đơn luồng

 Đồng bộ
```js
try {
  diepPiedTeam;
} catch (error) {
  console.log(error);
}
```

 Bất đồng bộ
```js
try {
  setTimeout(() => {
    diepPiedTeam;
  }, 1000);
  console.log("Hello");
} catch (err) {
  console.log(err);
}
```

```js
setTimeout(() => {
  try {
    setTimeout(() => {
      diepPiedTeam;
    }, 1000);
    console.log("Hello");
  } catch (err) {
    console.log(err);
  }
}, 1000);
```

Nên code cấu trúc như thế này

CH06: promise.then.catch

Cấu trúc của một Error trông như nào

* Vì mình làm Backend nên mình phải xử lý lỗi rất nhiều
* Xử lý lỗi: `làm cho lỗi tường minh, dễ nhìn, giấu đi những thông tin nhạy cảm`
