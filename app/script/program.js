'use strict';

function guess() {
  let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  let randomNumber = Math.floor(Math.random() * Math.floor(100)) + 1;
  console.log('Рандомное число: ', randomNumber);

  let checkNumber = function() {
      let userNumber = +prompt('Угадай число от 1 до 100?');
      if (userNumber === null) {
          alert('Игра закончена');
      } else if (isNumber(userNumber)) {
          userNumber += userNumber;
          if(userNumber > randomNumber) {
              alert('Загаданное число меньше');
              checkNumber();
          } else if ( userNumber < randomNumber) {
              alert('Загаданное число больше');
              checkNumber();
          } else  {
              alert('Вы победили');
              return;
          }
      } else {
          alert('Введи число!');
          checkNumber();
        }   
    }
    return checkNumber;

}
let guessNumber = guess();
guessNumber();