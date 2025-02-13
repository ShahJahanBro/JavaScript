// 4 pillars of DOM

// 1. Selection of an Element
// 2. Chaning HTMl
// 3. Chaning CSS

// 1. Selection of an Element
var a = document.querySelector("h1");
console.log(a);


// 2. Chaning HTML
a.innerHTML = "Changed"

// 3. Chaning CSS
a.style.color="red";

// 4. Event Listener
var a = document.querySelector("h1");
function clicked(){
    a.innerHTML = "I have added an Event Listener";
    a.style.color = "Yellow";
}

a.addEventListener("click",clicked);



var offBulb = document.querySelector("div");
function ChangeTheModeOfTheBulb() {
    if (offBulb.style.backgroundColor === "yellow") {
        offBulb.style.backgroundColor = "black";
        offBulb.style.border = "4px solid yellow";
    } else {
        offBulb.style.backgroundColor = "yellow";
        offBulb.style.border = "4px solid black";
    }
    offBulb.style.height = "300px";
    offBulb.style.width = "300px";
}
offBulb.addEventListener("click",ChangeTheModeOfTheBulb);

const offLight = document.querySelector(".light");

    offLight.addEventListener("click", () => {
        const existingImg = offLight.querySelector("img");
        if (existingImg) {
            if (existingImg.src.includes("light_turn_off.jpeg")) {
                existingImg.src = "light_turn_on.jpeg"; // Switch to 'on' image
            } else {
                existingImg.src = "light_turn_off.jpeg"; // Switch to 'off' image
            }
        }
    });


var bulb = document.querySelector(".bulb");
var on = document.querySelector(".on");
var off = document.querySelector(".off");

on.addEventListener("click",function(){
    bulb.style.backgroundColor = "Yellow";
    offBulb.style.border = "4px solid black";
});

off.addEventListener("click",function(){
    bulb.style.backgroundColor = "black";
    offBulb.style.border = "4px solid yellow";
});

changeText = () => {
    var name = document.querySelector("h2");
    name.style.color="red"
}
