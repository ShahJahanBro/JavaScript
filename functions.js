function sayHello(){
    console.log("Hello Beautiful People");
}
sayHello()

function sayMyName(name){
    console.log(`My name is : ${name}`);
}
sayMyName("Shah Jahan");

// print table given by user

function table(num){
    console.log(`Below is the Table  of ${num} : `);
    
    for (let i = 1; i <=10; i++) {
        console.log(`${num} * ${i} = ${num*i}`);
    }
}
table(2)

// Find the sum of numbers to a given number entered by user:
function sum(range){
    let avg = 0;
    for (let i = 1; i <= range; i++) {
        avg += i;
    }
    return avg;
}
let range = 6;
console.log(`The sum of number upto ${range} is => ${sum(range)}`);
 
console.log("********************************8");


// find the power of a number

function power(num, power){
    return num**power;
}
console.log(`Power of a number is 1st method : ${power(2,5)}`);

const ans = function power(num, power){
    return num**power;
}
console.log(`Power of a number is 2nd method : ${power(2,5)}`);

const product = (num, power) => {
    return num**power;
}
console.log(`Power of a number is 3rd method : ${product(2,5)}`);

// // // functions

// // function greet(name){
// //     console.log(`Hello dear ${name}...`);
// // }
// // greet("Shah Jahan");


// // const arr = [15,1,6,17,18,82,87]

// // function check(age){
// //     return age>=18;
// // }

// // const checked = arr.filter(check)
// // console.log(checked);

// // rest operator

// // function calc(n1,n2,...num){
// //     return num;
// // }
// // console.log(calc(10,20,30,40,50));

// // // spread operator
// // const arr = [10,20,30,40,50]

// // function checkNum(...num){
// //     return num;
// // }
// // console.log(checkNum(...arr));


// // const add = (a, b) => {
// //     return a + b;
// // };
// // console.log(add(3, 5));



// // console.log("***********Scope of Variables***********");


// // let globalVar = "I am global";

// // function showGlobal() {
// //     console.log(globalVar); 
// // }

// // showGlobal(); 
// // console.log(globalVar);





