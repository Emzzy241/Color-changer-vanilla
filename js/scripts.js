// Creating variables for storing the button, and the body tags
// Note that: document.getElementByClassName() wouldn't work
// only document.queerySelector() works


const button = document.querySelector("button");
const body = document.querySelector("body");

const color = ["red", "pink", "violet", "blue", "green", "brown", "purple"];

body.style.backgroundColor = "pink";


button.addEventListener("click", functionChanger);

function functionChanger(){
    const colorRed = parseInt(Math.random() * color.length);
    body.style.backgroundColor = color[colorRed];
}