/* eslint-disable no-unused-vars */
// fetch API
// returns a promise

const myDiv = document.getElementById("planet");
const myBtn = document.querySelector("button");

myBtn.addEventListener("click", () => {
  const n = Math.floor(Math.random() * 20) + 1;
  fetch(`https://swapi.dev/api/planets/${n}/`)
    .then((res) => res.json())
    .then((data) => populatePlanet(data))
    .catch((err) => console.log(err));
});

const populatePlanet = ({ name }) => {
  console.log(name);
  //   const newPara = document.createElement("p");
  //   newPara.innerText = name;
  //   myDiv.appendChild(newPara);
};
