'use strict';

// Recupero una funcion que compara y devuelve un resultado
import { compare, computerOption, result } from './helpers.js';

// Recuperamos los componentes importantes
const score = document.querySelector('span.points');
const game = document.querySelector('section#game');

// Para poder generar un resultado tendremos que guardar el click que hace sobre una opcion
const userOption = (user, compu) => {
  // Igualo el resultado de pasar mi resultado y el aleatorio de la compu a una variable (true o false)
  return compare(user, compu);
};

// Funcion que pinta el html según el resultado
const htmlResult = (user, result, computer) => {
  game.style.backgroundImage = 'none';

  game.classList.add('result-container');

  game.innerHTML = `
        <div class="result-option">
          <h3>YOU PICKED</h3>
          <div class="result ${user}-result">
            <img src="./images/icon-${user}.svg" alt="${user}" />
          </div>
        </div>

        <div class="result-text">
          <h2>${result}</h2>
          <button>PLAY AGAIN</button>
        </div>

        <div class="result-option">
          <h3>THE HOUSE PICKED</h3>
          <div class="result ${computer}-result">
            <img src="./images/icon-${computer}.svg" alt="${computer}" />
          </div>
        </div>
    `;
};

const htmlReset = () => {
  game.classList.remove('result-container');
  game.style.backgroundImage = 'url(/images/bg-triangle.svg)';
  game.innerHTML = `
    <div id="paper" class="option paper"></div>

    <div id="scissors" class="option scissors"></div>

    <div id="rock" class="option rock"></div>
    `;
};

// Variable que acumula la puntuacion
let points = 1;

game.addEventListener('click', (e) => {
  const { target } = e;

  if (target.matches('button')) {
    // Button Reset Game
    htmlReset();
  }

  // Rock Option
  if (target.matches('.option')) {
    // Recupero la opcion de la compu
    const computer = computerOption();

    // Recupero si el usuario ha ganado
    const isUserWin = userOption(target.id, computer);

    // Variable que usare para establecer puntuacion y texto resultado
    let resultText;
    if (isUserWin === true) {
      score.innerHTML = `${points++}`;
      resultText = 'YOU WIN';
    } else if (isUserWin === 'empate') {
      resultText = 'DRAW';
    } else {
      resultText = 'YOU LOSE';
    }

    // Funcion que manipula el html resultante según lo ocurrido
    htmlResult(target.id, resultText, computer);
  }
});
