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

const populatePlanet = (planetObj) => {
  const { name, climate, terrain, population, orbital_period } = planetObj;
  let pop;
  population === "unknown"
    ? (pop = population)
    : (pop = parseInt(population).toLocaleString());
  const planetDiv = `
    <div>
    <h1>${name}</h1>
    <p>${name} has a climate that is ${climate}. <br> 
    The terraine is ${terrain}, with a population of ${pop}. <br>
    The orbital period of ${name} is ${orbital_period} days.
    </p>
    </div>
  `;

  myDiv.innerHTML += planetDiv;
  console.log(planetDiv);
};
