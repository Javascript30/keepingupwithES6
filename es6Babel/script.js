const myDiv = document.getElementById("main");

const myArr = [1, 2, 3, 4, 5, 7, 8];

for (const prop of myArr) {
  myDiv.innerHTML += `<p>${prop}</p>`;
}
