/* 
Control flow determines how JavaScript executes code, deciding which blocks of code run and 
in what order. It includes conditional statements, loops, and function calls to control 
execution
*/


// 1️⃣ Sequential Execution (Default Behavior)

// console.log("Shah Jahan");
// console.log("Shah Nawaz");
// console.log("Abbas");
// let name = "Ahad";
// console.log(name);

// ✅ JavaScript executes each line in order.


// 2️⃣ Conditional Statements (Decision Making)

/*
 Conditional statements control whether a block of code runs based on a condition.
 */

//  age = 17;

//  if (age>=18) 
//     console.log("You can vote...");
//     else
//     console.log("You can NOT vote...");
 
// 🔹 Ternary Operator (? :)   [A shorter way to write if-else]
// let eligible = (age>=18) ? "You can vote" : "You can NOT vote";s
// console.log(eligible);

// console.log((age>=18) ? "You can vote" : "You can NOT vote");

/*
🔹 switch Statement (Multiple Cases)
Used when comparing one value against multiple cases.
 */


// let day = "Monday";

// switch (day) {
//     case "Monday":
//         console.log("Start of the week!");
//         break;
//     case "Friday":
//         console.log("Weekend is coming!");
//         break;
//     case "Sunday":
//         console.log("Relax, it's the weekend!");
//         break;
//     default:
//         console.log("It's a regular day.");
// }


/*
3️⃣ Loops (Repetitive Execution)
Loops allow executing a block of code multiple times.
 */

    // for (let i = 1; i <= 5; i++) {
    //    console.log(`Repetetive Task number (Using for-loop): ${i}`);
    // }

    let counter = 1;

    // while (counter<=5) {
    //     console.log(`Repetetive Task number (Using while-loop) : ${counter}`);
    //     counter++;
    // }

    // do {
    //     console.log(`Repetetive Task number (Using do-while-loop) : ${counter}`);
    //     counter++;
    // } while (counter<=5);

    // 🔹 for...of Loop (Iterating Over Arrays)

    // const arr = [1,2,3,4,5,6,7,8,9,10]
    // for (const element of arr) {
    //     console.log(element);    
    // }


  //  🔹 for...in Loop (Iterating Over Object Keys)
// Used for iterating over object properties.

// const person = {
//     name: "Shah Jahan",
//     age: 21,
//     location: "Shahdadpur"
// }

// for (const key in person) {
//     console.log(person[key]);
    
// }

// 4️⃣ Control Statements (Breaking Loops Early)

for (let i = 1; i <=10; i++) {
    console.log(`Printing ${i}`);
    if (i==5) {
        console.log(`Breaking the flow of loop after : ${i}th Iteration`);
        break;
    }
}

// 🔹 continue (Skip Current Iteration)
// Skips to the next iteration when a condition is met
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;  // Skip 3
    console.log(i);
}