//This function will ask the user to guess a number and report to them if they were correct or not and if they need to go higher or lower
function guessInt(randomInt) {
  while (guess <= randomInt || guess >= randomInt) {
    //edge case, user doesn't comply with my number constraints and is outside of 1-100
    if (guess < 1 || guess > 100) {
      alert(
        "You" +
          userName +
          " entered a number outside of the appropriate range, try again"
      );
      tryAgain(guess);
    }

    if (guess < randomInt) {
      alert(userName + ", your guess was less than the secret number.");
      tryAgain(guess);
    } else if (guess > randomInt) {
      alert(userName + ", your guess was higher than the secret number.");
      tryAgain(guess);
    } else {
      guessCount += 1;
      alert(
        `You guessed right! Good job ${userName}, it only took you ${guessCount} guesses to guess ${guess}. Your other guesses were ${guessHistory}`
      );
      return;
    }
  }
}

// function to get the user to try again
function tryAgain(input) {
  guessHistory.push(input);
  guess = prompt("Try again killer.");
  guessCount += 1;
  return guess;
}

//Play again function
function playAgain() {
  var again = prompt("Would you like to play again? 'Yes' or 'No'");
  if (again === "Yes") {
    return guessInt(Math.floor(Math.random() * 100));
  }
  return alert("All the fun is over.");
}

//setting the target number
let secretNumber = Math.floor(Math.random() * 100);

//Here user is prompted to guess an int b/w 1-100
const userName = prompt("Enter your name, guesser.");
var guess = prompt("Guess an integer between (inclusive) 1-100 " + userName);
var guessCount = 0;
var guessHistory = [];

guessInt(secretNumber);
playAgain();
