function showMessage(){
    alert("Hello, I am External JavaScript...");
}

let person = {name: "John", age: 30, city: "New York"};

// console.log("These are the properties that the object name Person has...");
// for (let key in person) {
//   console.log("Property of object: " + key);
// }

console.log("These are the actual values the the object name Person has...");
for (let key in person) {
    console.log("Value of property : "+key +" => "+ person[key]);
  }

let arr = ["Shah Jahan", 21, "Computer Science","Lundo",3]
console.log(arr);

for (const prop of arr) {
    console.log(prop);
}

let shahInfo = new Map();
shahInfo.set("Name :", "Shah Jahan");
shahInfo.set("Depart : ","Computer Science");
shahInfo.set("Age : ",21);
for (const [key, value] of shahInfo) {
    console.log(key+" : "+value);
}

let nodeList = document.querySelectorAll('p');
for (let child of nodeList) {
    console.log(child.textContent);
}

let arrowFucn = (a,b) => a+b;
let sum = arrowFucn(2,5);
console.log("Sum of two numbers using the Arrow Function => "+sum);

var b = [ [ 1, 2 ], [ 3, 4, 5 ] ];
console.log(b);