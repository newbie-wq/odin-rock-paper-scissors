function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return (`It is a tie. The computer chose ${computerSelection}`);
    } else if(playerSelection === 'rock' && computerSelection === 'paper') {
        return (`You lost. The computer chose ${computerSelection}`);
    } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        return (`You won. The computer chose ${computerSelection}`);
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        return (`You won. The computer chose ${computerSelection}`);
    } else if(playerSelection === 'paper' && computerSelection === 'scissors') {
        return (`You lost. The computer chose ${computerSelection}`);
    } else if(playerSelection === 'rock' && computerSelection === 'scissors') {
        return (`You won. The computer chose ${computerSelection}`);
    } else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        return (`You lost. The computer chose ${computerSelection}`);
    } else return ('Invalid input')
    
}

// let computerSelection = computerPlay();
// let playerSelection = prompt('Enter either rock, paper or scissors').toLowerCase();

function game() {
    for (let i = 0; i < 5; i++) {
        let player = prompt('Enter either rock, paper or scissors').toLowerCase();
        let computer = computerPlay();
        let score = playRound(player, computer);
        console.log(score);
    }
}

console.log(game());