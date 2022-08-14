// Creating variables for storing the button, and the body tags
// Note that: document.getElementByClassName() wouldn't work
// only document.queerySelector() works

// the querySelector for button was used only for the first and third functions
// when we had one single button
const button = document.querySelector("button");
const body = document.querySelector("body");

// used for the 2nd function when we add many buttons
const redBackground = document.querySelector("[data-red]");
const greyBackground = document.querySelector("[data-grey]");
const blueBackground = document.querySelector("[data-blue]");
const greenBackground = document.querySelector("[data-green]");
const whiteBackground = document.querySelector("[data-white]");
const blackBackground = document.querySelector("[data-black]");


// the eventListener's for all the new buttons

redBackground.addEventListener("click", functionRed);
greyBackground.addEventListener("click", functionGrey);
blueBackground.addEventListener("click", functionBlue);
greenBackground.addEventListener("click", functionGreen);
whiteBackground.addEventListener("click", functionWhite);
blackBackground.addEventListener("click", functionBlack);










const arrayColors = [redBg, greyBg, blueBg, greenBg, whiteBg, darkBg]

function functionRed(){
    const redBg = "red";

    body.style.backgroundColor = redBg;
}

function functionGrey(){
    const greyBg = "grey";

    body.style.backgroundColor = greyBg;
}

function functionBlue(){
    const blueBg = "blue";

    body.style.backgroundColor = blueBg;
}

function functionGreen(){
    const greenBg = "green";

    body.style.backgroundColor = greenBg;
}

function functionWhite(){
    const whiteBg = "white";
    const colorWhenScreenIsWhite = "black"

    body.style.backgroundColor = whiteBg;
    body.style.color = colorWhenScreenIsWhite;
}

function functionBlack(){
    const blackBg = "black";
    const colorWhenScreenIsBlack = "white"

    body.style.backgroundColor = blackBg;
    body.style.color = colorWhenScreenIsBlack;
}




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

// function functionChanger(){
    // const redBg = "red";
    // const greyBg = "grey";
    // const blueBg = "blue";
    // const greenBg = "green";
    // const whiteBg = "white";
    // const darkBg = "black";

//     if( redBackground.isClicked()){
        
//     }


// }



/* the function for the third task,  create an array of colors
randomize those colors whenever we click on a button
function functionChanger() {
    const colorRed = parseInt(Math.random() * color.length);
    body.style.backgroundColor = color[colorRed];
}

*/


