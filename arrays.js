// console.log("*************************Welcome to the world of Arrays*************************");
//  // Resizeable and contain different data types
//  const std = ["Shah Jahan", "Shah Nawaz", "Abbas"];
//  console.log(std);
//  console.log(std[0]+" : "+std[1]+" : "+std[2]);

//  std["brother"] = "Siblings"
//  console.log(std["brother"]); // It is just a property, it does noy add an item to the array
//  console.log(std);
//  console.log(`Length of the array is : ${std.length}`); //this only counts the elements indexed by numbers (0, 1, and 2), not properties with string keys.
 
//  std['0'] = "Shahjoo";
//  console.log(std);
//  console.log(`Length of the array is : ${std.length}`); //this only counts the elements indexed by numbers (0, 1, and 2), not properties with string keys.
 
//  std.push("Yasin"); // it will puch the data in the last of the array before the property
//  console.log(std);
//  console.log(`Length of the array is : ${std.length}`); 

//  std.push("Ahad", "Daud"); // you can push multiple at the same time...
//  console.log(std);
//  console.log(`Length of the array is : ${std.length}`); 
//  console.log(Object.keys(std)); // printing the indexes along with the property


// const siblings = ["Shah Nawaz","Saira","Shah Jahan","Mariyam","Abbas"];
// console.log(siblings);
// siblings.forEach((item,index) =>{
//     console.log(`${index} : ${item}`);
    
// });

console.log("************Arrays Everywhere************");
// Reference data types
//  - Arrays
//  - Objects
//  - Function
// => Stored in Heap
// arr = [1,2,3];
// 'arr' is the refernce whihc is stored in Stack Memory
// The actual data is stored in Heap Memory 

// Object:
// Collection of Key value pairs

// let obj1 = {
//     name: "Shah Jahan",
//     age: 21,
//     greet: function(){
//         console.log("Hello everyone");
//     }
// };
// console.log(obj1.name);
// obj1.greet();
// // name = key;
// // value = "Shah Jahan"

// let obj2 = obj1;
// obj2.greet();
// obj2.depart = "Computer Science";
// console.log(obj2.depart);
// console.log(obj1.depart);
// console.log(obj1);


// a few built in functions in Array

// const arr = [9,1,6,2,8,4,7,5,3];
// console.log(`Original Array : ${arr}`);
// console.log(`Sorted Array : ${arr.sort()}`);
// arr.push(10); // pushes an element in the end, right most side of the array
// console.log(`Pushing 10 in Array : ${arr}`);
// arr.pop(); // deletes the right most element in the array
// console.log(`Pop in Array : ${arr}`);
// arr.shift(); // removes the left most element, first element
// console.log(`Shift in Array : ${arr}`);
// arr.unshift("Shah jahan") // adds an element at the left most position
// console.log(`Unshift in Array : ${arr}`);

// console.log(`Sliced Array :  ${arr.slice(1,5)}`); // slice method return a piece of Array : [starting, ending)

// arr.splice(1,2,"Abbas")
// console.log(arr); 
// // splice(startingIndex, number of Index from whihc you wanto remove Data, newData)
// arr.splice(0,1,"Shah Nawaz")
// console.log(arr);
// arr.splice(0,0,"Abdul Ahad")
// console.log(arr);

// let mappedArr = arr.map((val) =>{
//     return val*2;
// });

// console.log(`Mapped Array : ${mappedArr}`);

// let filtredArr = arr.filter((val)=>{
//     if(val>=5)
//        return true; 
//     else
//     return false;
// });

// console.log(`Filtered Array : ${filtredArr}`);

const arr = [10,20,20,30,10];
// let reducedArray = arr.reduce((acc,curr)=>{
//     return acc+curr;
// },10);
// console.log(`Reduced Array : ${reducedArray}`);
console.log(arr.sort());

// // // // Arrays: Collection of multiple itmes under a single variable

// // // const arr = [1,2,3,4,5,6,7,8,9, "Shah Jahan"] // can be used for multi data types

// // // const broz = ["Shah Nawaz", "Shah Jahan","Abbas"]

// // // const myArr = new Array("Shah Nawaz", "Shah Jahan","Abbas")

// // // console.log(myArr[2]);

// // // console.log(typeof myArr);


// // const arr = [1,2,3,4,5]
// // const num = new Array(1,2,3,4,5) // an issue If You Pass a Single Number
// // const str = new Array(5); // If new Array() is given a single number, it creates an empty array with that length instead of an array containing the number.


// // // let length = myArr.length; //The length property is always one more than the highest array index.
// // // console.log(`The lenght of the Array is :  ${length}`);

// // // broz.push="Yasin";
// // // console.log(broz);

// // // broz[6] = "Ahad"

// // // console.log(broz);
// // // console.log(`The lenght of the broz array is :  ${broz.length}`);

// // // console.log(Array.isArray(broz)) // to recognize an array

// // const num = [1,2,3,4,5,6,7,8,9,10]
// // // num.push(6); // pushes a number at the end of the array
// // // console.log(num);
// // // num.pop(); // removes the last index number
// // // console.log(num);

// // // num.unshift(10) // adds the data on the first index
// // // console.log(num);
// // // num.shift(); // removes the first index number in the array
// // // console.log(num);

// // // console.log(num.includes(1));
// // // console.log(num.indexOf(20));

// // //console.log("Shah Jahan", num);

// // console.log(num.slice(0,2));
// // console.log("Shah Jahan", num);

// // console.log(num.splice(0,2));
// // console.log("Shah Jahan", num);

// // const brozz = ["Shah Nawaz","Shah Jahan","Abbas"]
// // const czns = ["Daud","Saud","Rauf","Musa","Baqar"]

// // console.log(`The lenght of the array is : ${brozz.length}`);
// // brozz.push(czns); // It will create an array in an array
// // console.log(brozz);
// // console.log(`The lenght of the brozz array after the push method is : ${brozz.length}`);
// // // console.log(`The lenght of the array is : ${brozz.length}`);
// // brozz.concat(czns)
// // console.log(brozz);
// // console.log(`The lenght of the brozz array afte the concat method is : ${brozz.length}`);


// // console.log(`Original brozz array :  ${brozz}`);
// // console.log(`Original czns array :  ${czns}`);

// // // console.log("*************************");

// // // const newBrozConcat = brozz.concat(czns) // does not modify original array
// // // console.log(`Original brozz array :  ${brozz}`);
// // // console.log(`Newbrozz array :  ${newBrozConcat}`);

// // console.log("*************************");

// // const newBrozPush = brozz.push(czns)  // modify original array and return the length of the updated array into newBrozPush
// // // console.log(`Original brozz array :  ${brozz}`);
// // console.log(newBrozPush);


// // console.log(typeof newBrozPush);


// /* .concat() does not change the original array; instead, it creates and returns a new array that contains the elements of both arrays.
// It does not modify brozz, so you must assign the result to a new variable or overwrite brozz.

// .push() modifies the original array by adding the argument(s) as a single element at the end of the array.
// It returns the new length of the array.
// */


// // const newBroCzn = [...brozz,...czns]
// // console.log(newBroCzn);


// // const word = "Hello";
// // const letters = [...word];

// // console.log(letters);

// // console.log(typeof word);
// // console.log(typeof letters);

// // const arr1 = [1, 2, 3];
// // const arr2 = [4, 5, 6];

// // const mergedArraySpread = [...arr1, ...arr2]; // Works with objects as well
// // const mergedArrayConcat = arr1.concat(arr2); // Only works with arrays
// // console.log(mergedArraySpread);
// // console.log(mergedArrayConcat);

// // console.log(typeof mergedArraySpread);
// // console.log(typeof mergedArrayConcat);

// // console.log(mergedArraySpread.length);
// // console.log(mergedArrayConcat.length);


// // Array.from()

// // const str = "Shah Jahan";
// // const newStr = Array.from(str)

// // console.log(str);
// // console.log(newStr);

// // console.log(typeof str);
// // console.log(typeof newStr);

// // Array.of()
// // let n1 = 100;
// // let n2 = 200;
// // let n3 = 300;
// // let n4 = 400;
// // let n5 = 500;

// // const newNum = Array.of(n1,n2,n3,n4,n5)
// // console.log(newNum);


// /* 
// ✅ Use Array.from() → When converting iterable or array-like objects (strings, sets, NodeLists, etc.) into an array.
// ✅ Use Array.of() → When creating an array from a list of values (especially to avoid new Array() confusion).
// ✅ Use Array.isArray() → When checking if a variable is actually an array.
// */

// // at()	Returns an indexed element of an array

// const arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr.at(5));

// const ages = [32, 33, 19, 40];

// // Create a Test Function
// function checkAge(age) {
//   return age > 18;
// }

// // Are all ages over 18?
// const pass = ages.every(checkAge) // returns a boolean
// console.log(pass);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.fill("Kiwi");

// console.log(fruits);

// array.fill(value, start, end): // fills specified elements in an array with a value.

// const arr =  [15,16,17,18,19,20]

// function check(age){
//     return age>=18;
// }

// const ages = arr.filter(check); // return an array
// console.log(ages);
