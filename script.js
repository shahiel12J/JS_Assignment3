const choice = ["ROCK", "PAPER", "SCISSORS"];
let result = '';
let result2 = '';
let playerScore = 0;
let computerScore = 0;
let score = 0;
let gameCount = 1;

function computerPlay(){
    return choice[Math.floor(Math.random()*choice.length)];
}

function playRound(playerSelect,computerSelect){

    if(playerSelect === computerSelect){
        result = 'Draw, Play again';
        console.log(result);
    }
    else if(playerSelect == 'ROCK'){
        if(computerSelect == 'PAPER'){
            score = computerScore++;
            result = 'You lose!';
            console.log(result);
        }else{
            score = playerScore++;
            result = 'You Win!';
            console.log(result);
        }
    }
    else if(playerSelect == 'PAPER'){
        if(computerSelect == 'SCISSORS'){
            score = computerScore++;
            result = 'You lose!';
            console.log(result);
        }else{
            score = playerScore++;
            result = 'You Win!';
            console.log(result);
        }
    }
    else if(playerSelect == 'SCISSORS'){
        if(computerSelect == 'ROCK'){
            score = computerScore++;
            result = 'You lose!';
            console.log(result);
        }else{
            score = playerScore++;
            result = 'You Win!';
            console.log(result);
        }
    }
    return score;
}


function game(){
    for(let i = 0; i < 5; i++){
        const playerSelect = (prompt("Please enter your choice", "Rock, Paper or Scissors")).toUpperCase();
        const computerSelect = computerPlay();

        playRound(playerSelect,computerSelect);
        console.log("Computer Score: " + computerScore) 
        console.log("Player Score: " + playerScore) 
        console.log("Round " + gameCount)
        gameCount++
    }   

    if(playerScore > computerScore){
        return "You Win"
    }
    else if(playerScore < computerScore){
        return "You Lose"
    }else if(playerScore = computerScore){
        return "Draw"
    }
}

console.log(game());

