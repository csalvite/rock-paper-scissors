'use strict';

// Function returns aleatory computer option
const computerOption = () => {
  let options = ['scissors', 'rock', 'paper'];

  return options[Math.floor(Math.random() * options.length)];
};

const result = (isUserWin) => {
  if (isUserWin === 'error') {
    return 'Ha ocurrido un error';
  } else if (isUserWin === 'empate') {
    return 'Ha ocurrido un empate';
  } else if (isUserWin) {
    return 'Gana el usuario';
  } else {
    return 'Gana la compu!';
  }
};

// This function compare two different types of options and returns true when user wins, false when computer wins
const compare = (myOption, computerOption) => {
  let result;

  switch (myOption) {
    case 'paper':
      if (computerOption === 'scissors') {
        result = false;
        break;
      } else if (computerOption === 'paper') {
        result = 'empate';
        break;
      }
      result = true;
      break;

    case 'scissors':
      if (computerOption === 'rock') {
        result = false;
        break;
      } else if (computerOption === 'scissors') {
        result = 'empate';
        break;
      }

      result = true;
      break;
    case 'rock':
      if (computerOption === 'paper') {
        result = false;
        break;
      } else if (computerOption === 'rock') {
        result = 'empate';
        break;
      }

      result = true;
      break;
    default:
      result = 'error';
      break;
  }

  return result;
};

export { compare, computerOption, result };
