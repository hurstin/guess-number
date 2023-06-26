'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct number!';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number');
document.querySelector('.score');
document.querySelector('.guess')
*
const number = Math.trunc(Math.random() * 20) + 1;
let score = (document.querySelector('.number').textContent = number);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'no number!';
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'correct number';
  } else if (guess < number) {
    document.querySelector('.message').textContent = 'too low';
  } else {
    document.querySelector('.message').textContent = 'too high';
  }
});
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (guess === secretNumber) {
    displayMessage('correct number');
    displayNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high...' : 'Too low...');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you loose');
      document.querySelector('.score').textContent = 0;
    }
  } else if (!guess) {
    displayMessage('no number');
  }
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you loose';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you loose';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  displayMessage('start guessing....');
  document.querySelector('.guess').value = '';
  displayNumber('?');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
