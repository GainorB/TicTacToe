// SELECT ELEMENTS FROM THE DOM
const boxes = document.querySelectorAll('.box');
let status = document.getElementById('status');

// CONVERT NODELIST TO AN ARRAY
const boxesArr = [...boxes];

// USED TO FLIP BETWEEN PLAYERS
// PLAYER X IS TRUE
// PLAYER O IS FALSE
let player = true;

// LOOP THROUGH DOM ELEMENTS AND ADD CLICK EVENTS TO EACH
boxesArr.forEach(e => e.addEventListener('click', markASpot));

// THIS FUNCTION IS RESPONSIBLE FOR MARKING SPOTS ON THE GRID (PLACING X OR O)
function markASpot(e) {
  // PLAYER X
  if (player) {
    e.target.innerHTML = 'X'; // CHANGE THE DOM ELEMENT TO X
    boxesArr.splice(event.target.id, 1, 'X'); // REPLACE THE DOM ELEMENT IN THE ARRAY WITH THE CURRENT MARK (X)
    e.target.classList.add('player1'); // ADD A CLASS TO THE DIV FOR STYLING
    checkForPrevious(e.target, 'X'); // PREVENTS DOUBLE CLICKING ON A DIV/CHANGING THE MARK
    checkForWinner('X'); // CHECK FOR A WINNER
    player = false; // SWITCH PLAYER
  } else {
    // PLAYER O
    e.target.innerHTML = 'O';
    boxesArr.splice(event.target.id, 1, 'O');
    e.target.classList.add('player2');
    checkForPrevious(e.target, 'O');
    checkForWinner('O');
    player = true;
  }
}

// THIS FUNCTION IS RESPONSIBLE FOR CHECKING IF THE CURRENT POSITION IS ALREADY USED
// POSITION: IS THE CURRENT TARGET (WHERE THE MARK IS TRYING TO BE PLACED)
// PLAYER: EITHER X OR O
function checkForPrevious(position, player) {
  // IF THE TARGETED DIV'S INNERHTML EQUALS THE CURRENT PLAYER
  if (position.innerHTML === player) {
    // REMOVE EVENT LISTENER IF THE SPOT IS USED
    position.removeEventListener('click', markASpot);
  }
}

// THIS FUNCTION IS RESPONSIBLE CHECKING FOR A WINNER
function checkForWinner(player) {
  // CHECK FIRST COLUMN
  if (boxesArr[0] === boxesArr[1] && boxesArr[1] === boxesArr[2]) {
    status.innerHTML = `Player ${player} won!`;
    remove();
  }
  // CHECK SECOND COLUMN
  if (boxesArr[3] === boxesArr[4] && boxesArr[4] === boxesArr[5]) {
    status.innerHTML = `Player ${player} won!`;
    remove();
  }
  // CHECK THIRD COLUMN
  if (boxesArr[6] === boxesArr[7] && boxesArr[7] === boxesArr[8]) {
    status.innerHTML = `Player ${player} won!`;
    remove();
  }

  // CHECK FIRST ROW
  if (boxesArr[0] === boxesArr[3] && boxesArr[3] === boxesArr[6]) {
    status.innerHTML = `Player ${player} won!`;
    remove();
  }
  // CHECK SECOND ROW
  if (boxesArr[1] === boxesArr[4] && boxesArr[4] === boxesArr[7]) {
    status.innerHTML = `Player ${player} won!`;
    remove();
  }
  // CHECK THIRD ROW
  if (boxesArr[2] === boxesArr[5] && boxesArr[5] === boxesArr[8]) {
    status.innerHTML = `Player ${player} won!`;
    remove();
  }

  // CHECK RIGHT DIAGONAL ROW
  if (boxesArr[0] === boxesArr[4] && boxesArr[4] === boxesArr[8]) {
    status.innerHTML = `Player ${player} won!`;
    remove();
  }
  // CHECK LEFT DIAGONAL ROW
  if (boxesArr[2] === boxesArr[4] && boxesArr[4] === boxesArr[6]) {
    status.innerHTML = `Player ${player} won!`;
    remove();
  }
}

// THIS FUNCTION IS RESPONSIBLE FOR REMOVING THE REMANING EVENTLISTENERS
function remove() {
  boxesArr
    .filter(e => e !== 'X' && e !== 'O') // FILTER OUT THE DIVS WITH MARKED POSITIONS
    .forEach(e => e.removeEventListener('click', markASpot)); // REMOVE EVENTLISTENER FROM REMAINING DIVS
}
