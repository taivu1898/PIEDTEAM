import axios from "axios";

const baseURL = "https://66fb75a38583ac93b40bd2e5.mockapi.io";

class FastHTTP {
  async send(method, url, body) {
    let response;
    try {
      response = await axios({
        method: method,
        url: url,
        headers: {
          "Content-Type": "application/json",
        },
        data: body,
      });
      return response.data;
    } catch (err) {
      throw new Error(err.response ? err.response.statusText : err.message);
    }
  }
  get(url) {
    return this.send("GET", url, null);
  }
  delete(url) {
    return this.send("DELETE", url, null);
  }
  post(url) {
    return this.send("POST", url, body);
  }
  puts(url) {
    return this.send("PUTS", url, body);
  }
}

const http = new FastHTTP();
(async () => {
  try {
    let data = await http.puts(`${baseURL}/2`, { name: "ewerwer" });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
})();
