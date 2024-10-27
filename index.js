const CHOICES = [
	{choice: "rock", win: "scissors"},
	{choice: "paper", win: "rock"},
	{choice: "scissors", win: "paper"}
];

//1. get computer's choice

function getComputerChoice() {
	const number = Math.floor(Math.random() * 3);
	console.log("Getting computer's choice...");
	if (number === 0) {
		return CHOICES[0];
	} else if (number === 1) {
		return CHOICES[1];
	} else {
		return CHOICES[2];
	}
}

//2. get human's choice

function getHumanChoice() {
	let humanChoice;

	while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
		humanChoice = prompt("Now your turn. Rock, Paper, or Scissors");
		if (!humanChoice) {
			console.log("Game canceled");
			break;
		}
		humanChoice = humanChoice.toLowerCase();
		if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
			break;
		} else {
			alert("Enter valid choice: Rock, Paper, or Scissors");
		}
	}
	return humanChoice;
}

//3. play round

function playRound() {
	const computerChoice = getComputerChoice();
	const humanChoice = getHumanChoice();
	if (!humanChoice) {
		return -1;
	}
	console.log("Computer chooses " + computerChoice.choice + ".");
	if (computerChoice.win === humanChoice) {
		console.log("Computer wins this round!");
		return 0;
	} else if (computerChoice.choice === humanChoice) {
		console.log("Round tied!");
		return 1;
	} else {
		console.log("You win this round!");
		return 2;
	}
}

//4. play game

function playGame() {
	let computerScore = 0;
	let humanScore = 0;

	while (humanScore < 3 && computerScore < 3) {
		console.log("YOU " + humanScore + " : " + computerScore + " PC");
		const ret = playRound();
		if (ret === -1) {
			return ;
		} else if (ret === 0) {
			computerScore++;
		} else if (ret === 2) {
			humanScore++;
		}
	}
	if (humanScore > computerScore) {
		console.log("You win!");
	} else {
		console.log("Computer wins");
	}
}

playGame();