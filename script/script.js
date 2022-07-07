let userScore = 0;
let computerScore = 0;
const userScore_span = document.querySelector("#user-score");
const computerScore_span = document.querySelector("#computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p")
const rock_div = document.querySelector("#r");
const paper_div = document.querySelector("#p");
const scissors_div = document.querySelector("#s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    let uc = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    console.log(userChoice);
    console.log(computerChoice);
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!"`;

    uc.classList.add("green-glow");
    let cc = document.getElementById(computerChoice);
    cc.classList.add("red-glow");
    setTimeout(function() {
        uc.classList.remove("green-glow");
        cc.classList.remove("red-glow");
    }, 1000);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost!"`;
    let uc = document.getElementById(userChoice);
    uc.classList.add("red-glow");
    let cc = document.getElementById(computerChoice);
    cc.classList.add("green-glow");
    setTimeout(function() {
        uc.classList.remove("red-glow");
        cc.classList.remove("green-glow");
    }, 1000);


}
function draw(userChoice, computerChoice) {

    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw :!"`;
    let uc = document.getElementById(userChoice);
    uc.classList.add("gray-glow");
    let cc = document.getElementById(computerChoice);
    cc.classList.add("gray-glow");
    setTimeout(function() {
        uc.classList.remove("gray-glow");
        cc.classList.remove("gray-glow");
    }, 1000);


}


function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}
    function main() {
        rock_div.addEventListener('click', function() {
            game("r");
        });

        paper_div.addEventListener('click', function() {
            game("p");
        });
        scissors_div.addEventListener('click', function() {
            game("s");
        });

    }


main();
