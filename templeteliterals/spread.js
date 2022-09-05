// Spread syntax

/* 

- Can be used in palces where (e.g) fxn expect multiple arguments


*/

function spreadFunction(...multipleArgs) {
  console.log(multipleArgs);
}

spreadFunction(1, 20, true, "hey", "kim");
