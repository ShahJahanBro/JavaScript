console.log("Hello World...");

console.log(window);

console.log(window.innerHeight);
console.log(window.innerWidth);
// window.alert("Hello from BOM!");

// console.log(document);

// document.body.style.background = "red";
// console.log(prompt());



function changeText(){
    document.getElementById("heading-2").innerHTML="The Text of the heading has been changed";  
}

function changeClr(){
    const myElement = document.getElementById("heading-2");
    myElement.style.color="red";

    // const collection = document.getElementsByClassName("p1");

    // for (let i = 0; i < collection.length; i++) {
    //     collection[i].style.color="Yellow";
    // }

    const collection = document.getElementsByTagName("p");
      for (let i = 0; i < collection.length; i++) {
        collection[i].style.color="green";
    }
}