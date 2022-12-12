/*

Create the game of rock, paper and scissors. We can take the following tips as reference:
- Generate the corresponding variables
- Produce conditionals that compare your result with that of the machine and your choice (can be random).
- Encapsulate the conditionals in a function that receives the variables, 
compare them and return the value.

*/

function PlayRockPaperScissors(theValue){
    let thePlay = ["rock","paper","scissors"]
    var index = Math.floor( Math.random()* 3);
    var cpu = thePlay[index]

    if (theValue == cpu) {
        console.log("Draw 🙃 " + theValue + " vs " + cpu)
    }else if (theValue == "rock" && cpu == "scissors"){
        console.log("You Won! 🥳 " + theValue + " vs " + cpu)
        theValue
    }else if (theValue == "paper" && cpu == "rock") {
        console.log ("You Won! 🥳 " + theValue + " vs " + cpu)
        theValue
    } else if (theValue == "scissors" && cpu == "paper") {
        console.log ("You Won! 🥳 " + theValue + " vs " + cpu)
        theValue
    }else {
        console.log("You lost 😭 " + theValue + " vs " + cpu)
        theValue
    }
}

// tu jugada se pasa como un string
PlayRockPaperScissors("paper")