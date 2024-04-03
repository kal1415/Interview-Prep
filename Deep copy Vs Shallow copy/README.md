-------------------------------------Deep copy Vs Shallow copy--------------------------------------------
Shallow copy:

-Shallow copying creates a new object with references to the same memory locations as the original object.

-It creates a copy where the source and the copied variable reference remain the same. Changing one, would change the other as well.

-Shallow copying can be more efficient in terms of performance, but may result in unexpected behavior if changes to a copied object affect the original object.

-A shallow copy can be achieved using the spread operator (…) or using Object.assign().

-Shallow copy: means that only the first level of the object is copied. Deeper levels are referenced.

-Common methods like Array.concat(), Array.from(), Object.assign(), etc creates a shallow copy.

Ex:
const first_person = {
name: "Jack",
age: 24,
}
const second_person = first_person;
second_person.age = 25;
console.log(first_person.age); // output: 25
console.log(second_person.age); // output: 25

Deep copy :

-Deep copying creates a new object with new memory locations for all of its properties and nested objects or arrays.

-Deep copy method creates a copy where the source and the copied variable reference are entirely different. Changing one, would not affect the other one.

-Deep copying ensures that changes to a copied object do not affect the original object, but may be more expensive in terms of performance.

-Deep copy: means that all levels of the object are copied. This is a true copy of the object.

-Spread(...) operator, creates a deep copy when there is no nesting.

-A deep copy can be achieved using JSON.parse() + JSON.stringify()

-While using JSON.parse() and JSON.stringify() is an easy way to create a deep copy of an object, it may not work in all cases.

-If you need to create a deep copy of an object, using JSON.parse() and JSON.stringify() is an easy option.

-However, if the object being copied contains functions or circular references, a recursive deep copy function may be necessary.

Ex-1: 
const first_person = {
name: "Jack",
age: 24,
}
const second_person = { ...first_person };
second_person.age = 25;
console.log(first_person.age); // 24
console.log(second_person.age); // 25

Ex-2:

const originalObj = {
  company: "HCL",
  location: "Chennai",
  country: "India",
  address: {
    pin: 235888,
    area: "kothapeta",
  },
};

console.log("---------Original Object-----------", originalObj);

const copiedObj = JSON.parse(JSON.stringify(originalObj));

copiedObj.location = "Banglore";
copiedObj.address.area = "AjithsinghNagar";

console.log("---------After change originalObj-----------", originalObj);
console.log("---------After change copiedObj-----------", copiedObj);