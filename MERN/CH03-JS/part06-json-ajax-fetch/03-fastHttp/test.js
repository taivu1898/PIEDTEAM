const baseURL = "https://66fb75a38583ac93b40bd2e5.mockapi.io";
fetch(`${baseURL}/users`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: {
    name: "Viet Tai",
  },
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
