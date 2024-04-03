// const sayHi = () => console.log('setTimeout--executed After 5 sec');
// setTimeout(sayHi,5000);

const sayHi = () => console.log("setInterval--Every 1 sec");
const timer = setInterval(sayHi, 1000);
setTimeout(() => clearInterval(timer), 5000); // this clears the setInterval after 5sec
