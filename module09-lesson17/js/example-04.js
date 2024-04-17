//Date and Time

// const date = new Date();
// console.log(date);

//date in ms
// console.log(Date.now());

console.log(new Date("2020-03-16"));
console.log(new Date("2020-03"));
console.log(new Date("2020"));
console.log(new Date("03/16/2030"));
console.log(new Date("2030/3/16"));
console.log(new Date("May 12, 2030"));
console.log(new Date("May 12, 2030 13:14:00"));

const date = new Date();

//returns day of the month from 1 to 31
console.log(date.getDate());

//returns days of the week 0-6
console.log(date.getDay());

//returns month from 0-11
console.log(date.getMonth());

//returns hour
console.log(date.getHours());

//returns minutes
console.log(date.getMinutes());

//returns seconds
console.log(date.getSeconds());

//returns milliseconds
console.log(date.getMilliseconds());

//subtract dates
const start = new Date("2024-05-12");
const end = new Date("2024-05-20");
//subtracting dates will return a number
console.log(end - start);
