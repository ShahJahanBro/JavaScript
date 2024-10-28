console.log("Hello world!...");
 
const studentId = 220183; // This can not be changed
console.log(studentId);
// studentId = 123; // This will throw an error
/*Note that objects and arrays declared with const can still be modified.*/ 
let name = "Shah Jahan";
var depart = "CS";
console.log(name + " : "+ depart);
console.table([studentId,name, depart]); 

name = "Shah Nawaz";
depart = "EE";
console.table([studentId,name, depart]);

city = "Shahdadpur"; // not an efficient way 
console.table([studentId,name, depart,city]);

const uni = "SIBA";
console.table([studentId,name, depart,uni,city]);

let hobby; // undefined if no value there
console.log(hobby);
// const age; // it must be initialized...
