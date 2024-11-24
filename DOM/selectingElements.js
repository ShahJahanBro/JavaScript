// const tags = document.getElementsByTagName("h1"); // returns a HTMLCOLLECTION 
// console.log(tags);
// const heading = document.querySelectorAll(".one")
// console.log(heading);

// const all = document.querySelector(".container");
// const all = div.querySelector(".one");

// const chk = document.getElementById("example");
// console.log(chk);

// const name = document.querySelector(".name").getAttribute("name");

 let example = document.getElementById("example");

 let heading = document.createElement("h1");

 heading.textContent = "This is Shah Jahan";

 example.appendChild(heading);
example.insertAdjacentElement('afterend',heading);