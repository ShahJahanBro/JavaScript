// console.log("Welcome to the Numbers and Maths world...");

// const score = 500; // score is a primitve data type
// console.log(score);

// //  console.log(`The type of score is : ${typeof score}`);
// console.log(`The type of score is : ${typeof(score)}`);

// let balance = new Number(100); // balance in an Object{Non Primitive5}
// console.log(balance);

// console.log(score.toString().length);

// console.log(`Precision upto 2 : ${score.toFixed(5)}`); // Used in E-commerce like websites

// balance = 1000000;
// console.log(balance.toLocaleString()); // 1,000,000
// ****************** Maths ******************

// maths library comes by default with Js

// console.log(Math.sqrt(25));
// console.log(Math.abs(-6));
// console.log(Math.round(7.6));
// console.log(Math.ceil(7.3));
// console.log(Math.floor(9.9));
// console.log();

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(`Minimum value : ${Math.min(...arr)}`); //
// console.log(`Maximum value : ${Math.max(...arr)}`);
// // alternatively
// console.log(`Minimum value : ${Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)}`); //
// console.log(`Maximum value : ${Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)}`);
// Math.min(...arr) and Math.max(...arr) spread the array elements, so Math.min() and Math.max() receive each number as an individual argument (like Math.min(1, 2, 3, ...)), allowing them to work correctly.


console.log(Math.random()); // a randome value between o and 1
console.log(Math.random()*10); // right after the point value will come ex: 0.123 = 1.23
console.log((Math.random()*10)+1); // value will always be >= 1
// what if you need values greater betweem 10 $ 20;

const min = 10;
const max = 20;

console.log(Math.floor((Math.random()* (max-min))+1)+min);
