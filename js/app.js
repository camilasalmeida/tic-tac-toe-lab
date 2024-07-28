/*-------------------------------- Constants --------------------------------*/
//const square = squareEls[index];

const winningCombos = [                                                               //**STEP 5: IN A CONSTANT CALLED `WINNINGCOMBOS`, DEFINE THE EIGHT POSSIBLE WINNING COMBINATIONS AS AN ARRAY OF ARRAYS.
[0, 1, 2], //1
[3, 4, 5], //2
[6, 7, 8], //3
[2, 4, 6], //4     ?????do I need to start always from the top or can i write 6, 4, 2?
[0, 4, 8], //5
[0, 3, 6], //6
[1, 4, 7], //7
[2, 5, 8], //8

];

/*---------------------------- Variables (state) ----------------------------*/

let board;                                                                             //**STEP 1: DEFINE THE VARIABLES.
let turn;
let winner;
let tie;

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr');                                  //**STEP 2: STORE THE CACHED ELEMENTS.
//console.dir(squareEls);
const messageEl = document.querySelector('#message');
//console.dir(messageEl);


/*-------------------------------- Functions--------------------------------*/

//=>-----------------------------INIT FUNCTION-----------------------------<=
function init() {                                                                   //** STEP 3-a: CREATE A FUNCTION CALLED `INIT`.
    //console.log('Init function is called!.');                                       //** STEP 3-b: CALL A FUNCTION CALLED `INIT`.
    //window.onload = init;                                  
    board = ['', '', '', '', '', '', '', '', ''];                                   //** STEP 3-c: SET THE `BOARD` VARIABLE TO AND ARRAY CONTAINING NINE EMPTY STRINGS('') REPRESENTING EMPTY SQUARES.
    turn = 'X';                                                                     //** STEP 3-d: SET THE `TURN` TO `X`. PLAYER X.
    winner = false;                                                                 //** STEP 3-e: SET THE `WINNER` TO FALSE. THAT MEANS THAT THERE IS NO WINNER YET.
    tie = false;                                                                    //** STEP 3-f: SET THE `TIE` TO FALSE. 

    render();                                                                       //** STEP 3-g: CALL A FUNCTION CALLED `RENDER`.
}                                
 
window.onload = init;  //???shoul I just type init();  or the event windown.load?    //NOTES: EVENT USED TO CALL THE `FUNCTION` WHEN THE WINDOW LOADS.
//----------------------------END OF FUNCTION PART 1--------------------------<= 




//=>---------------------------- RENDER FUNCTION-------------------------------<=
function render() {                                                                  //** STEP 4-a: CREATE A FUNCTION CALLED RENDER, SET IT ASIDE FOR NOW.
    //console.log('The board is rendered!.')
    updateBoard();                                                                   //** STEP 4-f INVOKE BOTH THE updateBoard AND THE updateMessage FUNCTIONS INSIDE OF YOUR `RENDER` FUNCTIONS.
    updateMessage();                                                                 //** STEP 4-f INVOKE BOTH THE updateBoard AND THE updateMessage FUNCTIONS INSIDE OF YOUR `RENDER` FUNCTIONS.
}
//--------------------------END OF FUNCTION PART 2--------------------------<= 



//-----------------------------UPDATEBOARD FUNCTION--------------------------<= 
function updateBoard() {                                                             //** STEP 4-b: CREATE A FUNCTION CALLED `UPDATEBOARD`.
    //console.log('The UpdateBoard function is working!.');

    board.forEach((cellValue, index) => {               //?????                      //** STEP 4-c: IN THE `UPDATEBOARD` FUNCTION, LOOP OVER `BOARD` AND FOR EACH ELEMENT. ??????
      const square = squareEls[index];                                               //NOTE: `squareEls[index]`, RETRIEVES THE SQUARE ELEMENT THAT CORRESPONDS TO THE CURRENT INDEX OF THE LOOP.
      square.textContent = cellValue;                                                //NOTE: THIS LINE OF CODE, SETS THE TEXT CONTENT OF THE SQUARE ELEMENT TO THE VALUE OF `CELLVALUE, IF `CELLVALUE` IS X, O OR AN EMPTY STRING, THE SQUARE'S TEXT WILL BE UPDATED ACCORDINGLY. Update the text content of the square

      // Optional: Add any additional styling based on the cell value
      if (cellValue === 'X') {
        square.style.color = 'red';
        square.style.background = 'pink';
      } else if (cellValue === 'O') {
        square.style.color = 'blue';
        square.style.background = 'lightblue';
      } else {
        square.style.color = 'black'; // Default style for empty squares
        square.style.background = 'white';
    }
    });
  }
//---------------------------END OF FUNCTION PART 3--------------------------<= 



//-------------------------------FUNCTION UPDATEMESSAGE-----------------------------<= 
function updateMessage() {                                                             //** STEP 4-d: CREATE A FUNCTION CALLED `UPDATEMESSAGE`.
 //console.log('Update Message is working!');
    if (winner === false && tie === false) {                                           //** STEP 4-e: IN `UPDATEMESSAGE`, RENDER A MESSAGE BASED ON THE CURRENT GAME STATE.
        messageEl.textContent = `Player ${turn}'s turn`;
    } else if (winner === false && tie === true){
        messageEl.textContent = `Its a tie!`;
    } else {
        messageEl.textContent = `Congratulations! Player ${turn} wins`;
    }
    }
//---------------------------END OF FUNCTION PART 4--------------------------<= 



//---------------------------FUNCTION HANDLECLICK-----------------------------<= 

function handleClick(event) {    
    //console.log('handleClick function called');                                      //**STEP 6-a: CREATE A FUNCTION CALLED `HANDLECLICK`. IT WILL HAVE AN PARAMETER.
       const squareIndex = event.target.id;                                            //**STEP 6-c: OBTAIN THE INDEX OF THE CLICKED SQUARE. TO DO THIS, GET THE INDEX FROM AN ID ASSIGNED TO THE TARGET ELEMENT IN THE HTML. ASSIGN THIS TO A CONSTANT CALLED `squareIndex`.
       //console.log(`Square ${squareIndex} clicked`);
       //console.dir (squareIndex);
        
    if (board[squareIndex] !== '' || winner) {                                        //NOTE: THIS LINE CHECKS IF THE MOVE IS VALID. IF THE SQUARE IS ALREADY TAKEN (`board[squareIndex] !== ''`) OR IF THERE IS ALREADY A WINNER (`winner`), THE FUNCTION EXITS AND NOTHING HAPPENS.
        //console.log(`Invalid move: board[${squareIndex}] = ${board[squareIndex]}, winner = ${winner}`);
        return;                                                             
}
                                                                                        //NOTE: ????? IF THE MOVE IS VALID (THE SQUARE IS EMPTY AND THERE IS NO WINNER), IT UPDATES THE `board`ARRAY WITH THE CURRENT PLAYER'S SYMBOL AT THE CLICKED SQUARE'S POSITION.


    placePiece(squareIndex);                                                            //**STEP 6-1-c: IN THE `handleCLick` FUNCTION, CALL THE placePiece FUNCTION YOU JUST CREATE. PASS `squareIndex` TO IT AS AN ARGUMENT.
    //console.log(board);
                                                                
    if (checkWinner(turn)) {                                                           //NOTE: THIS LINE CHECKS FOR A WINNER. 
        winner = true;
    } else if (board.every(cell => cell != '')) {
        tie = true;
    } else {
        turn = turn === 'X' ? '0' : 'X';
    }
    render();
    }        
//---------------------------END OF FUNCTION PART 5--------------------------<=
    

//---------------------------FUNCTION PLACEPIECE-----------------------------<= 
function placePiece(index) {                                                         //**STEP 6-1-a: CREATE A FUNCTION NAMED `placePiece`, THAT ACCEPTS AND index PARAMETER.                                      
    board[index] = turn;                                                             //**STEP 6-1-b: UPDATE THE `board` ARRAY AT THE index, SO THAT IT IS EQUAL TO THE CURRENT VALUE OF `turn`.
    //console.log(`Placed ${turn} at index ${index}`);
}

//---------------------------END OF FUNCTION PART 6--------------------------<=




/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach((squares) => {                                                    //**STEP 6-b: ATTACH AN EVENT LISTENER TO THE GAME BOARD USING ONE OF THE TWO OPTIONS BELOW. THE FIRST IS A STANDART PATH.
    squares.addEventListener('click', handleClick);                                //**STEP 6-b: OPTION 1: ADD AN EVENT LISTENER TO EACH OF THE EXISTING `squareEls` WITH A LOOP. SET UP THE EVENT LISTENER TO RESPOND TO THE `CLICK` EVENT. THE EVENT LISTENER SHOULD CALL THE `handleClick`FUNCTION YOU CREATED IN STEP 6-A.
});

