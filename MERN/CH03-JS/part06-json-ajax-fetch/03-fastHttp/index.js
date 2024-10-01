const baseURL = "https://66fb75a38583ac93b40bd2e5.mockapi.io/users";

// class + promise + fetch
class FastHttp {
  send(method, url, body) {
    return fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : null,
    }).then((response) => {
      if (response.ok) {
        return response.json(); // Khui hàng
      } else {
        throw new Error(response.statusText);
      }
    });
  }
  get(url) {
    return this.send("GET", url, null);
  }
  delete(url) {
    return this.send("DELETE", url, null);
  }
  post(url, body) {
    return this.send("POST", url, body);
  }
}

let http = new FastHttp();
http // get(baseURL)
  //.delete(`${baseURL}/6`)
  .post(baseURL, {
    name: "Tài Chó Điên",
  })
  .then((data) => {
    console.log(data);
  });
