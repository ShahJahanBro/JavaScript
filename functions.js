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
