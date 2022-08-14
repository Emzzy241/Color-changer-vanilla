// Creating variables for storing the button, and the body tags
// Note that: document.getElementByClassName() wouldn't work
// only document.queerySelector() works


const button = document.querySelector("button");
const body = document.querySelector("body");

// This array was used for only the third task 
const color = ["red", "pink", "violet", "blue", "green", "brown", "#fff", "purple"];

body.style.backgroundColor = "pink";

// This array was used for only the second task

const color2Task = ["red", "grey", "blue", "green", "white", "black"]


button.addEventListener("click", functionChanger);

/* the first task 
the function for the first color changer, changing background-Color to red

function functionChanger(){
    const redCol = "red";
    
    body.style.backgroundColor = redCol;

}

*/

/* the second task function which is a function for creating
many buttons, when user clicks on any button, it changes to that specific color
*/

function functionChanger(){
    const redBg = "red";
    const greyBg = "grey";
    const blueBg = "blue";
    const greenBg = "green";
    const whiteBg = "white";
    const darkBg = "black"
}



/* the function for the third task,  create an array of colors
randomize those colors whenever we click on a button
function functionChanger() {
    const colorRed = parseInt(Math.random() * color.length);
    body.style.backgroundColor = color[colorRed];
}

*/


