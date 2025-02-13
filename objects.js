/*
Objects in JavaScript are collections of key-value pairs. They are used to store multiple related values.
 */

const userDetails = {
  name: "Shah Jahan",
  "full name": "Shah Jahan Brohi", // it can't be accesed as [userDetails.full name]
  age: 21,
  email: "Shahjahan@google.com",
  location: "Sukkur",
  isLoggerd: false,
};

// console.log(userDetails.name);
// console.log(userDetails["name"]); // its also a way to print the object elements. it, on backend, treates the keys as 'Strings'
// console.log(userDetails["full name"]);
// console.log(userDetails);

// userDetails.greetings = function () {
//   console.log(`Hello ${this["full name"]}, Its been a while...`);
// };
// console.log(userDetails);
// console.log(userDetails.greetings());


// console.log(Object.keys(userDetails)); 
// console.log(Object.values(userDetails)); 
// console.log(Object.entries(userDetails));

// console.log("age" in userDetails);
// console.log(userDetails.hasOwnProperty("age"));


// const person = {
//     name: "Shah Jahan",
//     depart: "Computer Science",
//     age: 21
// };
// console.log(person);

// const student = {
//     "cms-id": "023-22-0173",
//     section: "C",
//     batch: 2022
// };
// console.log(student);

// const std = {...person,...student , salary:"$10,000"}
// console.log(std);

// function createUser(name, age) {
//     return { greet() { console.log(`Hi, ${name}`); } };
//   }
//   const user1 = createUser("Ayesha", 22);
//   user1.greet();

const person = {
    name: "Shah Jahan",
    "cms-id": "023-22-0173",
    age: 21
};

/*
Object destructuring is a convenient way to extract values from an object and assign them to variables in a single statement.
 */

const {name} = person;
console.log(name);


