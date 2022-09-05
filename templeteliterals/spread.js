// Spread syntax

/* 

- Can be used in palces where (e.g) fxn expect multiple arguments


*/

function spreadFunction(...multipleArgs) {
  console.log(multipleArgs);
}

spreadFunction(1, 20, true, "hey", "kim");

// Map Object

const myMap = new Map();

myMap.set("key", "value");
myMap.set("anotherKey", "anotherValue");
myMap.set(0, "anotherValue2");

console.log(myMap);
console.log(myMap.size);

// myMap.clear();

console.log(myMap.get(0));
console.log(myMap.has(2));
