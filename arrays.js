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


const siblings = ["Shah Nawaz","Saira","Shah Jahan","Mariyam","Abbas"];
console.log(siblings);
siblings.forEach((item,index) =>{
    console.log(`${index} : ${item}`);
    
});