let userScore = 0;
let compScore = 0;
let para = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");

const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        para.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        para.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        para.innerText = `You lost! ${compChoice} beats Your ${userChoice}`;
        para.style.backgroundColor = "red";
    }
} 

const genCompChoice = () => {
    const options = ["rock" , "paper" , "scissor"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}

const drawGame = () => {
    para.innerText = "Game is Draw.";
    para.style.backgroundColor = "#081b31";

}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice) {
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ?false:true;
        }
        else if(userChoice === "paper") {
            userWin = compChoice === "scissor" ?false:true;
        }
        else{
            userWin = compChoice === "rock" ?false:true;

        }
        showWinner(userWin , userChoice , compChoice);
    }


}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})