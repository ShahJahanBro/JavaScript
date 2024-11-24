// console.log("******************Hello To The World Of Strings******************");
const name = "Shah Jahan";
// console.log(name);
// console.log(name[0]);
// console.log(name.__proto__); // {}, You can see all the methods in console

// // A modern way:
// console.log(`My name is : ${name}`);
// //String is an Object:
const broName = new String("Shah Nawaz");
// console.log(`The name of my elder brother is ${broName}`); // Check this console

// // Few of the prototype methods

// console.log(broName.length);
// console.log(broName.toLocaleUpperCase());// because these both are Functions/methods
// console.log(broName.toLocaleLowerCase()); // Original String is not modified as they are Primitive Data types, Only the copy is changed...
// console.log(`Character at 5th index : ${name.charAt(5)}`);
// console.log(`Index of N : ${broName.indexOf('N')}`);

// const similar = broName.substring(0,4); // End index is not included...
// console.log(similar);

// console.log(`Index : (0,4) ${broName.substring(0,4)}`);
// console.log(`Index : (0) ${broName.substring(0)}`); // Whole string will be printed starting from the zeroth index
// console.log(`Index : (4) ${broName.substring(4)}`); // Start to the end if end is not specifed, Always remember that the start is always included...
// console.log(`Index : (-10) ${broName.substring(-10,6)}`); // Ignores -ve and considers it as 0...

// console.log(broName.slice(-4,-1));// It just accepts -ve values as well

// const trimName = "  Shah   -Jahan     ";
// console.log(`Without Trim : ${trimName}`);
// console.log(`With Trim : ${trimName.trim()}`);// It removes extrac spaces from the start and end

const newName = name.replace("Jahan", "Abbas");
console.log(newName);
