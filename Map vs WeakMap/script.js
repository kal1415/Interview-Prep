let myMap = new Map();
myMap.set("name", "Alice");
myMap.set(1, "number value");
myMap.set(true, "boolean value");

console.log(myMap.get("name")); // Output: Alice

let myWeakMap = new WeakMap();
let obj = { name: "Bob" };
myWeakMap.set(obj, "some data");
console.log(myWeakMap.get(obj)); // some data
obj = null;
console.log(myWeakMap.get(obj));// undefined
