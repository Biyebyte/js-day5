'use strict';
/*
console.log(document.querySelector('.message').textContent); // we start by reading the content of the element
document.querySelector('.message').textContent = '🎉 correct secretNumber';

document.querySelector('.secretNumber').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0; // state varibale, because the data is part of our application

const displayMessage = function (Message) {
  document.querySelector('.message').textContent = Message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // when there is no input
  if (!guess) {
    displayMessage('⛔️ No Number');
    //document.querySelector('.message').textContent = '⛔️No Number';

    //when Player wins, Display the following.
  } else if (guess === secretNumber) {
    displayMessage('🎉 correct Number'); // Right message
    //document.querySelector('.message').textContent = "🎉 Correct Number"
    document.querySelector('.number').textContent = secretNumber; // Right Number (secretNumber)

    //Green Background Color
    document.querySelector('body').style.backgroundColor = '#60b347'; //Display the right background color
    document.querySelector('.number').style.width = '30rem'; // this is saying increase the pixels of the number

    if (score > highscore) {
      // this is for setting up the highscore
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //when guess is wrong: either higher or lower than secret number.
    // Alternative else if '?' (else ) and  ':' (if)
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too Low');
      // document.querySelector('.message').textContent =   guess > secretNumber ? '📈 Too high!' : '📉 Too Low';
      score--;

      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🫣 Game over'); // Message to show
      // document.querySelector('.message').textContent = 'Game over;
      document.querySelector('.score').textContent = 0; // score to show =  0
    }
  }
  //   //When Guess is too high!
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;

  //     // when score = 0
  //   } else {
  //     document.querySelector('.message').textContent = '🫣 Game over!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   // when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low';
  //     score--;

  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🫣 Game over!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  // document.querySelector('.message').textContent = 'Start Guessing...';

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// Having Again restart the game

/*
///////////////////////////////////////////////
/// Coding Challenge #1
Implement a game reset functionality, so that the player 
can make a new guess! Here is how:

1. Select the element with 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and number variables
3. Restore the initial conditions of the message, number, score and guess input field 
4.Also restore the original background color (#222)
*/
