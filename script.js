const jokes = document.querySelector(".jokes");
const apiUrl = "https://icanhazdadjoke.com";

const fetchData = () => {
  fetch(apiUrl, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.joke);
      jokes.textContent = `${data.joke}`;
    })
    .catch((err) => {
      console.log(err);
    });
};

fetchData();
document.querySelector("#fetch-joke").addEventListener("click", fetchData);
