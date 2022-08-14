// Creating variables for storing the button, and the body tags
// Note that: document.getElementByClassName() wouldn't work
// only document.queerySelector() works



const button = document.querySelector("button");
const body = document.querySelector("body");


/* the first task
// the querySelector for button was used only for the first and third functions
// when we had one single button


// This array was used for only the third task 
const color = ["red", "pink", "violet", "blue", "green", "brown", "#fff", "purple"];

body.style.backgroundColor = "pink";


button.addEventListener("click", functionChanger);

 the first task 
the function for the first color changer, changing background-Color to red

function functionChanger(){
    const redCol = "red";
    
    body.style.backgroundColor = redCol;

}

*/

/* the second task function which is a function for creating
many buttons, when user clicks on any button, it changes to that specific color
*/

// function functionChanger(){
// const redBg = "red";
// const greyBg = "grey";
// const blueBg = "blue";
// const greenBg = "green";
// const whiteBg = "white";
// const darkBg = "black";

//     if( redBackground.isClicked()){

//     }


// used for the 2nd function when we add many buttons
const redBackground = document.querySelector("[data-red]");
const greyBackground = document.querySelector("[data-grey]");
const blueBackground = document.querySelector("[data-blue]");
const greenBackground = document.querySelector("[data-green]");
const whiteBackground = document.querySelector("[data-white]");
const blackBackground = document.querySelector("[data-black]");
const yellowBackground = document.querySelector("[data-yellow]");



// the eventListener's for all the new buttons

redBackground.addEventListener("click", functionRed);
greyBackground.addEventListener("click", functionGrey);
blueBackground.addEventListener("click", functionBlue);
greenBackground.addEventListener("click", functionGreen);
whiteBackground.addEventListener("click", functionWhite);
blackBackground.addEventListener("click", functionBlack);
yellowBackground.addEventListener("click", functionYellow);










// the variable colorWhenScreenIsAnyColor are for changing the text color, to make it 
// seeable to the user


function functionRed() {
    const redBg = "red";
    const colorWhenScreenIsRed = "white"

    body.style.backgroundColor = redBg;
    body.style.color = colorWhenScreenIsRed;
}

function functionGrey() {
    const greyBg = "grey";
    const colorWhenScreenIsGrey = "black";

    body.style.backgroundColor = greyBg;
    body.style.color = colorWhenScreenIsGrey;
}

function functionBlue() {
    const blueBg = "blue";
    const colorWhenScreenIsBlue = "black";

    body.style.backgroundColor = blueBg;
    body.style.color = colorWhenScreenIsBlue;
}

function functionGreen() {
    const greenBg = "green";
    const colorWhenScreenIsGreen = "white";

    body.style.backgroundColor = greenBg;
    body.style.color = colorWhenScreenIsGreen;
}

function functionWhite() {
    const whiteBg = "white";
    const colorWhenScreenIsWhite = "black"

    body.style.backgroundColor = whiteBg;
    body.style.color = colorWhenScreenIsWhite;
}

function functionBlack() {
    const blackBg = "black";
    const colorWhenScreenIsBlack = "white"

    body.style.backgroundColor = blackBg;
    body.style.color = colorWhenScreenIsBlack;
}


function functionYellow() {
    const yellowBg = "yellow";
    const colorWhenScreenIsYellow = "black"

    body.style.backgroundColor = yellowBg;
    body.style.color = colorWhenScreenIsYellow;
}



// }



/* the function for the third task,  create an array of colors
randomize those colors whenever we click on a button
function functionChanger() {
    const colorRed = parseInt(Math.random() * color.length);
    body.style.backgroundColor = color[colorRed];
}

*/


