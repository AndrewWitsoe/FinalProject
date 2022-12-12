/// Javascript for Final Project. Some parts are not working currently.  

// Sets up the Constant "sq" with the queryselector to select the ".sq" type from the other documents.
const sq = document.querySelectorAll(".sq");

// Sets up the players within the game. Player 1 being defined as X and player2 being defined as O. 
const player1 = "x";
const player2 = "o";


// Sets up the constant for that board winning conditions. Because the board starts with 0 for the sq ID in the HTML, the first combination starts at the top row with 0, 1, 2. 
const winner = [ 
  [0, 1, 2],
  [3, 4, 5], 
  [6, 7, 8], 
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8], 
  [0, 4, 8], 
  [2, 4, 6], 
]; 

// Sets up the first player as player1, which means the X's go first. 
let Start = player1;

// Sets up the Array for the board using the sq's. The array is EQUAL to the tiles.length.  
const board = Array(sq.length);
board.fill(null);

// Sets up the constant "sqClicked". Looks for the event and target id for currentPlayer... Which should start with X.
const sqClicked = (e) => { 
  console.log(e.target.id);
  
  e.target.innerText = Start;
// Makes sure there are turns for both player1 and player2. Representative by the x's and o's respectively. 
Start = Start === "o" ? "x" : "o";

};

// Adds the event listener for if a box is clicked on the game board. Makes sure that when a box is clicked,  
sq.forEach((sq) => sq.addEventListener("click", sqClicked));

// Sets up the restart button for the game. Pulls the HTML tag "restart". 
const restart = document.getElementById("restart");

//Adds an event listener for the restart button, making sure the code works properly. And that the board resets upon clicking.
restart.addEventListener("click", () => {
  const board = Array(sq.length);
      board.fill(null);
  const player1 = "x";
// Resetting the icons on the board. 
  sqElements.forEach(sq => { 
    sq.classList.remove("x", "o");
  });
});

const reset = document.querySelector('reset')
button.onclick = () => {window.location.reload();}


