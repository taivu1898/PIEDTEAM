//03 async await

//ngày xưa nta dùng callback để xử lý bất đồng bộ, dễ callback hell
//ES6: nta dùng Promise
//ES7: async await dùng để kết hợp với Promise
//async: là một hàm return Promise

function handle() {
  return Promise.resolve("ahihi");
}

async function handle() {
  return "ahihi"; // return  Promise.resolve("ahihi")
}

// await
let getProfile = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Điệp", age: 25 });
    }, 3000);
  });
};

let getArticle = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Hoàng tử bé", "Mèo dạy hải âu bay", "Cây cam ngọt của tôi"]);
    }, 2000);
  });
};

//Cách 1: Nguyên nhân kết quả 5s
//let getData = async () => {
//  let profile = await getProfile();
//  let articles = await getArticle();
//  console.log(profile, articles);
//};
//
//getData();

//Cach độc lập  3s
//let getData = async () => {
//  const [profile, articles] = await Promise.all([getProfile(), getArticle()]);
//  //                                               profile, articles
//  console.log(profile, articles);
//};
//
//getData();

//Xử lý lỗi
// mô phỏng server bị ép hứa sẽ trả dữ liệu student về trong 3s nhung xui do bị lỗi
let getStudent = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Lỗi kinh hoàng");
    }, 3000);
  });
};

// Xử lý lỗi bằng Promise
//getStudent()
//  .then((value) => {
//    console.log(value);
//  })
//  .catch((error) => {
//    console.log(error);
//  });

// Xử lý bằng await async
//let handle = async () => {
//  try {
//    return (student = await getStudent());
//  } catch (err) {
//    console.log(err);
//  }
//};
//
//handle();
//
//(async () => {
//  try {
//    let student = await getStudent();
//    console.log(student);
//  } catch (err) {
//    console.log(err);
//  }
//})();

//trong async function đừng dùng toán tử đồng bộ
let x = 0;

let handle4 = async () => {
  x += 1;
  console.log(x);
  return 5; // return Promise.resolve(5)
};

let handle5 = async () => {
  let tmp = await handle4();
  x += tmp;
  console.log(x);
};

handle5();
