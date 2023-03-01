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
      recordGuessers(userName, guessCount);
      alert(
        "Here is the history of guessers (name:attempts)" +
          JSON.stringify(guessers)
      );
      return;
    }
  }
}

// function to get the user to guess again
function tryAgain(input) {
  guessHistory.push(input);
  guess = prompt("Try again killer.");
  guessCount += 1;
  return guess;
}

//Play again function
function playAgain(input) {
  again = prompt("Would you like to play again? 'Yes' or 'No'");
  while (again.toLowerCase() === "yes") {
    userName = prompt("Enter your name, guesser.");
    guess = prompt("Guess an integer between (inclusive) 1-100 " + userName);
    guessCount = 0;
    guessHistory = [];
    guessInt(input);
    again = prompt("Would you like to play again? 'Yes' or 'No'");
  }
  return alert("All the fun is over.");
}

// function to record guessers information
function recordGuessers(name, number) {
  // we want to create a key (the username) with the value of the users guesses in the guessers object
  if (guessers[name] === undefined) {
    guessers[name] = number;
    return guessers;
  } else {
    if (guessers[name] < guessCount) {
      alert(
        `Sorry ${name}, you guessed ${
          number - guessers[name]
        } more times than last time.`
      );
      guessers[name] = number;
      return guessers;
    } else if (guessers[name] === guessCount) {
      alert(`Congratulations, you tied your best score.`);
      return;
    } else {
      alert(
        `Congratulaitons, you beat your previous record by ${
          guessers[name] - number
        }`
      );
    }
    return;
  }
}

/*setting the target number
var secretNumber = Math.floor(Math.random() * 100); 
*/

//Here user is prompted to guess an int b/w 1-100
var userName = prompt("Enter your name, guesser.");
var guess = prompt("Guess an integer between (inclusive) 1-100 " + userName);
//initializing a few of our variables
var guessCount = 0;
var guessHistory = [];
var guessers = {};

guessInt(Math.floor(Math.random() * 100));
playAgain(Math.floor(Math.random() * 100));
