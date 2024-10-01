const baseURL = "https://66fb75a38583ac93b40bd2e5.mockapi.io/users";

// class + promise + async await
class FastHttp {
  async send(method, url, body) {
    let response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : null,
    });
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
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
  put(url, body) {
    return this.send("PUT", url, body);
  }
}

let http = new FastHttp();
(async () => {
  try {
    let data = await http.put(`${baseURL}/2`, { name: "Lunar Vim" });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
})();
