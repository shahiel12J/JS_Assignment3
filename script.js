const choice = ["ROCK", "PAPER", "SCISSORS"];
let playerSelect = ''
let computerSelect = ''
let result = '';
let result2 = '';
let playerScore = 0;
let computerScore = 0;
let score = 0;
let gameCount = 1;
let playerChoice = '';

function computerPlay(){
    return choice[Math.floor(Math.random()*choice.length)];
}

function playerPlay(){
    playerChoice = prompt("Please enter your choice")


    if( playerChoice === null){
        return "end"
    }else
    if ((playerChoice.toUpperCase()).toString() == "ROCK" || (playerChoice.toUpperCase()).toString() == "PAPER" || (playerChoice.toUpperCase()).toString() == "SCISSORS"){
        return playerChoice;
    }
    else{
        return "invalid"
    }
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
    alert("Welcome to Rock, Paper, Scissors")

    for(let i = 0; i < 5;){
        playerSelect = playerPlay();
        computerSelect = computerPlay();

        if (playerSelect == "invalid"){
            alert("Invaild Choice")
            continue;
        }else 
        if(playerSelect == "end"){
            confirm("Are you sure")
            break;
        }else{
            playRound(playerSelect,computerSelect);
            console.log("Computer Score: " + computerScore) 
            console.log("Player Score: " + playerScore) 
            console.log("Round " + gameCount)
            gameCount++
            i++
        }
    }   

    if(playerScore > computerScore){
        return "You Win"
    }
    else if(playerScore < computerScore){
        return "You Lose"
    }else if(playerScore = computerScore){
        return "Draw"
    }else{
        return "Game Over"
    }
}

console.log(game());

