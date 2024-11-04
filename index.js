const CHOICES = [
	{choice: "rock", win: "scissors", icon: "✊"},
	{choice: "paper", win: "rock", icon: "✋"},
	{choice: "scissors", win: "paper", icon: "✌️"}
];
const gameContainer = document.querySelector("#game-container")
const playerScoreText = document.querySelector("#player-score");
const computerScoreText = document.querySelector("#computer-score");
const playerChoiceText = document.querySelector("#player-choice");
const computerChoiceText = document.querySelector("#computer-choice");
const result = document.querySelector("#result");
const choices = document.querySelectorAll(".choice");
const reset = document.querySelector("#reset");
const endModal = document.querySelector("#end-modal");
const winnerMessage = document.querySelector("#end-message");
const playAgain = document.querySelector("#play-again");


let computerScore = 0;
let playerScore = 0;
//1. get computer's choice

function getComputerChoice() {
	const randomIdx = Math.floor(Math.random() * 3);
	return CHOICES[randomIdx];
}

//2. play round

function update() {
	playerScoreText.innerText = playerScore;
	computerScoreText.innerText = computerScore;
}

function checkEndGame() {
	if (playerScore === 3 || computerScore === 3) {
		gameContainer.style.visibility = "hidden";
	}
	if (playerScore > computerScore) {
		winnerMessage.innerText = "You win 😎";
	} else {
		winnerMessage.innerText = "You lose 😔";
	}
}

function playRound(playerChoice) {
	const computerChoice = getComputerChoice();
	computerChoiceText.innerText = computerChoice.icon;
	playerChoiceText.innerText = CHOICES.find(c => c.choice === playerChoice).icon;
	if (computerChoice.win === playerChoice) {
		computerScore++;
		result.innerText = "Computer wins this round.";
	} else if (computerChoice.choice === playerChoice) {
		result.innerText = "Round tied";
	} else {
		playerScore++;
		result.innerText = "You win";
	}
	update();
	checkEndGame();
}

choices.forEach(button => {
	button.addEventListener('click', () => {
		playRound(button.dataset.choice);
	});
});

reset.addEventListener('click', () => {
	playerChoiceText.innerText = "❔";
	computerChoiceText.innerText = "❔";
	result.innerText = "";
	playerScore = 0;
	computerScore = 0;
	update();
});

playAgain.addEventListener('click', () => {
	playerChoiceText.innerText = "❔";
	computerChoiceText.innerText = "❔";
	result.innerText = "";
	playerScore = 0;
	computerScore = 0;
	update();
	gameContainer.style.visibility = "visible";
});