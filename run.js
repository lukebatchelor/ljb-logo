/* eslint-disable no-loop-func */
function getPossibleMoves(state) {
  return state.map((val, idx) => (val === ' ' ? idx : null))
    .filter(val => val !== null);
}

function gameIsOver(state) {

}

function stateStrToClassStr(stateStr) {
  const moves = [];
  for (let i = 0; i < stateStr.length; i += 1) {
    const player = stateStr.charAt(i);
    if (player !== ' ') {
      moves.push(`${player}${i}`);
    }
  }
  return moves.join(' ');
}

function generateStates(knownStates, curStates, turn) {
  const newStates = [];

  curStates.forEach((state) => {
    const possibleMoves = getPossibleMoves(state);
    const player = turn % 2 === 0 ? 'a' : 'b';

    possibleMoves.forEach((move) => {
      const newState = [...state];
      newState.splice(move, 1, player);
      const stateStr = newState.join('');
      if (knownStates.includes(stateStr)) return;
      knownStates.push(stateStr);
      newStates.push(newState);
    });
  });

  if (newStates.length === 0) return knownStates;

  // if (knownStates.length > 100) {
  //   console.log(knownStates);
  //   process.exit();
  // }
  return generateStates(knownStates, newStates, turn + 1);
}

const startingState = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
const htmlTemplate = `<input type="checkbox" id="a0 b1">
<div class="game b0 a4">
  <label for="a0 b1">
    <div class="choice"></div>
  </label>
  <label for="a0">
    <div class="choice"></div>
  </label>
  <label for="a0">
      <div class="choice"></div>
  </label>
  <label for="a0">
      <div class="choice"></div>
  </label>
  <label for="a0">
      <div class="choice"></div>
  </label>
  <label for="a0">
      <div class="choice"></div>
  </label>
  <label for="a0">
      <div class="choice"></div>
  </label>
  <label for="a0">
      <div class="choice"></div>
  </label>
  <label for="a0">
      <div class="choice"></div>
  </label>
</div>`


const possibleStates = generateStates([], [startingState], 0);
const classStrings = possibleStates.map(stateStrToClassStr);
const htmlStrings = [possibleStates[100]].map((state) => {
  const stateStr = stateStrToClassStr(state);
  const possibleMoves = 
  let str = `<input type="checkbox" id="${stateStr}">
  <div class="{stateStr}">
    ${}
  </div>`
});

console.log(possibleStates.length);

const fs = require('fs');

fs.writeFileSync('states.json', JSON.stringify(possibleStates));
fs.writeFileSync('classes.json', JSON.stringify(classStrings));
