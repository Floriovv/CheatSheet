let computerChoice = "scissors";
let userChoice = "paper";
let result;

if (computerChoice == "rock") {
    if (userChoice == "paper") {
        result = "win"
    } else if (userChoice == "rock") {
        result = "draw"
    } else if (userChoice == "scissors") {
        result = "lose"
    }
} else if (computerChoice == "paper") {
    if (userChoice == "paper") {
        result = "draw"
    } else if (userChoice == "rock") {
        result = "lose"
    } else if (userChoice == "scissors") {
        result = "win"
    }
} else if (computerChoice == "scissors") {
    if (userChoice == "paper") {
        result = "lose"
    } else if (userChoice == "rock") {
        result = "win"
    } else if (userChoice == "scissors") {
        result = "draw"
    }
}
switch (computerChoice) {
    case "rock":
        switch (userChoice) {
            case "paper":
                result = "win";
                break;
            case "rock":
                result = "draw";
                break;
            case "scissors":
                result = "lose";
        }
        break;
    case "paper":
        switch (userChoice) {
            case "paper":
                result = "draw";
                break;
            case "rock":
                result = "lose";
                break;
            case "scissors":
                result = "win";
        }
        break;
    case "scissors":
        switch (userChoice) {
            case "paper":
                result = "lose";
                break;
            case "rock":
                result = "win";
                break;
            case "scissors":
                result = "draw";
        }
        break;
}

switch (computerChoice + userChoice) {
    case "paperpaper":
    case "rockrock":
    case "scissorsscissors":
        result = "draw";
        break;
    case "paperscissors":
    case "rockpaper":
    case "scissorsrock":
        result = "win";
        break;
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
        result = "lose";
        break;
}
document.write(`<h1>${result}`)