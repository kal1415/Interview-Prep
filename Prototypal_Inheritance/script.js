//Example 1
let userDetails = {
  getFullname: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
let cust = {
  firstName: "kalyan",
  lastName: "panchal",
};
let emp = {
  firstName: "John",
  lastName: "Doe",
};
cust.__proto__ = userDetails;
emp.__proto__ = userDetails;
console.log(cust.getFullname()); //kalyan panchal
console.log(emp.getFullname()); //John Doe


// Example -2:
let animal = {
  animalEats: true,
};
let rabbit = {
  rabbitJumps: true,
};
// Sets rabbit.[[Prototype]] = animal
rabbit.__proto__ = animal;
console.log(rabbit.animalEats); //true
console.log(rabbit.rabbitJumps); //true
