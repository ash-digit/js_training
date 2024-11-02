const fs = require("fs").promises;

function firstPromis() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("first promise");
    }, 1000);
  });
}

function secondPromis() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("second promise");
    }, 3000);
  });
}
Promise.all([firstPromis(), secondPromis()]).then((x) => {
  console.log(x);
});

const fetchAshkanInfo = fs.readFile("./data/ashkan.json", "utf-8");
const fetchPastelColours = fs.readFile("./data/pastel.json", "utf-8");

Promise.all([fetchAshkanInfo, fetchPastelColours]).then((values) => {
  return Promise.all(values.map(response => JSON.parse(JSON.stringify(response)))).then(x => console.log(x))
});


