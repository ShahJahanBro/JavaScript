// console.log("Hello World...");

// console.log(typeof(null));

// var globarlVar = "Hi there! I am a Global Variable";

// function showVar(){
//     console.log(globarlVar+" Being printed from Function...");
//     var localVar  = "I am a Local Variable...";
//     console.log(localVar);

// }

// showVar();
// console.log(globarlVar+" Being printed  Outdide...");
// // console.log(localVar);

// // const c=0;
// // let a;
// // var b;

// // console(a);
// // console(b);
// // // console(c);

// // // const bio = {
// // //     fname:  "Shah Jahan",
// // //     lname: "Brohi",
// // //     age: 21,
// // //     depart: "CS"
// // // };

// // // // console.log(bio);

// // // for (let key in bio) {
// // //     console.log(key+" : "+bio[key]);
// // // }

// // const map = new Map();
// // map.set("fname","Shah");
// // map.set("lname","Jahan");
// // map.set("Age",21);

// // for (const [key,value] of map) {
// //     console.log(`${key}: ${value}`);
// // }

// // const set = new Set([1,1,2,3,4,5,"Shah Jahan","Shah Jahn"]);
// // for (const val of set) {
// //     console.log(val);
// // }

// // arr1 = ["fname","lname",'age'];
// // arr2 = ["Shah","Jahan",21,"CS"];

// // console.log(arr1);
// // console.log(arr2);
// // console.log(...arr1,1,2);

// // const city = ["Lundo","Shd","Tdm"];

// // const findCity = function(city){

// // }

// // Write a function called printEmails which console.log's each email for
// // the users.

// const users = [
//     {
//         name: "Shah Jahan",
//         email: "Shahjahan@gmail.com"
//     },
//     {
//         name: "Shah Nawaz",
//         email: "Shahnawaz@gmail.com"
//     },
//     {
//         name: "Abbas",
//         email: "Abbas@gmail.com"
//     },
//     {
//         name: "Ahad",
//         email: "Ahad@gmail.com"
//     },
//     {
//         name: "Yasin",
//         email: "Yasin@gmail.com"
//     }
// ];

// function emails(users) {
//     users.forEach(bio => {
//         console.log(`Name: ${bio.name} and his Email: ${bio.email}`);
//     });
// }

// emails(users);

// function Person() {
//     this.age = 0;

//     setInterval(() => {
//         this.age++; // `this` refers to the Person object
//         console.log(this.age);
//     }, 1000);
// }

// const person = new Person(); // Logs 1, 2, 3... every second

// Write a function called printHobbies which console.log's each hobby for
// each user.

// const users = [
//     {
//         name: "Shah Jahan",
//         hobbies: ["Cricket","Football"]
//     },
//     {
//         name: "Shah Nawaz",
//         hobbies: ["Cricket","Football","Hockey"]
//     },
//     {
//         name: "Abbas",
//         hobbies: ["Cricket","Football","Hockey","Basketball"]
//     }
// ]

// function showHobbies(users){
//     users.forEach(user => {
//         console.log(`Name: ${user.name}`);
//         for (const val of user.hobbies) {
//             console.log(val);
//         }
//     });
// }

// showHobbies(users)

// Write a function called findHometownByState which returns the first
// user which has a hometown of the state that is passed in

// const details = [
//     {
//         name: "Shah Jahan",
//         city: "Lundo",
//     },
//     {
//         name: "Shah Nawaz",
//         city: "Shahdadpur",
//     },
//     {
//         name: "Abbas",
//         city: "Tando Adam",
//     },
// ];

// function findCity(details, town) {
//     // Find the first user with the specified city
//     const foundCity = details.find(user => user.city === town);
    
//     // Check if a user was found
//     if (foundCity) {
//         console.log("Found User Details:");
//         // Log each key and value of the found user
//         for (const [key, value] of Object.entries(foundCity)) {
//             console.log(`${key}: ${value}`);
//         }
//     } else {
//         console.log("No user found in the specified town.");
//     }
    
//     return foundCity;
// }

// // // Example usage
// // console.log(findCity(details, "Lundo")); // Logs the user details for Lundo


// const user = {
//     name: "Shah Jahan",
//     age: 21,

//     welComemsg: function(){
//         console.log(`${this.name} , Welcome to the club mate`);
//     }
// }

// user.welComemsg();
// user.name="Shah Nawaz";
// user.welComemsg();
// var bio= "Shah";
// function tea(){
    
//     // console.log(this);
//     console.log(this.bio);
//     console.log(bio);
    
// }

// tea();


// function add(arr){
//     arr.forEach(element => {
        
//     });
// }

const arr1 = [1,2,3,4,5,6];

    arr1.findIndex(ageChk);


function double(num){
    return num*2;
}

// console.log(arr2);


function ageChk(age){
    if(age>3)
        console.log(age);
        
}
console.log(arr1);


