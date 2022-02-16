'use strict';

// Generate random number between 1 & 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Set score to 20
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number!';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You Lose!';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
      // When player loses
    } else {
      document.querySelector('.message').textContent = '💥 You Lose';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // Restore initial value of score variable
  score = 20;
  // Restore initial value of secretNumber variable
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // Restore initial conditions of the message
  document.querySelector('.message').textContent = 'Start guessing...';
  // Restore initial conditions of the score
  document.querySelector('.score').textContent = score;
  // Restore initial conditions of the number
  document.querySelector('.number').textContent = '?';
  // Restore initial conditions of the input field
  document.querySelector('.guess').value = '';
  // Restore initial background color
  document.querySelector('body').style.backgroundColor = '#222';
  // Restore initial number element width
  document.querySelector('.number').style.width = '15rem';
});
