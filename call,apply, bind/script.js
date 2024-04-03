function getFullName(age, city) {
  console.log(`${this.firstName} ${this.lastName} ${age} ${city}`);
}
const emp = {
  firstName: "kalyan",
  lastName: "Panchal",
};
const cust = {
  firstName: "John",
  lastName: "Doe",
};

console.log("==================call()===============================");
getFullName.call(emp, 25, "AP");
getFullName.call(cust, 25, "Goa");

console.log("==================apply()===============================");
getFullName.apply(emp, [25, "AP"]);
getFullName.apply(cust, [25, "Goa"]);

console.log("==================bind()===============================");
const getEmpDetails = getFullName.bind(emp, 30, "AP");
getEmpDetails();

const getCustDetails = getFullName.bind(cust, 30, "GOA");
getCustDetails();
