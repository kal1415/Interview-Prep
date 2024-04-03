//Shallow copy
const first_person = {
  name: "Jack",
  age: 24,
  city: {
    state: "AP",
  },
};
const second_person = first_person;

console.log(first_person.age); // output: 25
console.log(second_person.age); // output: 25
second_person.age = 25;

console.log(first_person.age);
console.log(second_person.age);

console.log(first_person.city.state); // output: 25
console.log(second_person.city.state); // output: 25

second_person.city.state = "HYD";

console.log(first_person.city.state); // output: 25
console.log(second_person.city.state); // output: 25
//If we change the new copied object, the old(source) object will also change automatically as they are referenced to the same memory location as the original object.

//Deep copy
const firstPerson = {
  name: "Jack",
  age: 24,
};
const secondPerson = { ...firstPerson };
secondPerson.age = 25;
console.log(firstPerson.age); // 24
console.log(secondPerson.age); // 25
// ================================================
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

// const copiedObj = { ...originalObj };
const copiedObj = JSON.parse(JSON.stringify(originalObj));
// const copiedObj = originalObj;

copiedObj.location = "Banglore";
copiedObj.address.area = "AjithsinghNagar";

console.log("---------After change originalObj-----------", originalObj);
console.log("---------After change copiedObj-----------", copiedObj);
