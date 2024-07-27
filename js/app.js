/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/

let board;
let turn;
let winner;
let tie;

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr');
//console.dir(squareEls);
const messageEl = document.querySelectorAll('#message');
//console.dir(messageEl);


/*-------------------------------- Functions--------------------------------*/

//=>-----------------------------FUNCTION PART 1-----------------------------<=
function init() {                          //CALL A FUNCTION CALLED `INIT`.
    console.log('Init function is called!.');
}
window.onload = init;                      //THE `WINDOW.ONLOAD` EVENT IS USED TO CALL THE `INIT` FUNCTION WHEN THE WINDOW (OR APP) LOADS. THIS ENSURES THAT THE `INIT` FUNCTION IS EXECUTED AS SOON AS THE PAGE IS FULLY LOADED.

    board = ['', '', '', '', '', '', '', ''];
    turn = 'X';
    winner = false;
    tie = false;


function render() {                        //CALL A FUNCTION CALLED RENDER.
    console.log('The board is rendered!.');

}
render();

//----------------------------END OF FUNCTION PART 1--------------------------<= 




//=>----------------------------FUNCTION PART 2-------------------------------<=
//const render = () => {

// };
//--------------------------END OF FUNCTION PART 2--------------------------<= 





//------------------------------FUNCTION PART 3--------------------------<= 
// squareEls.forEach((squareEl, index) => {
//     squareEl.textContent = board[index];
//     squareEl.classList.remove('x', 'o');
//     if (board[index] === 'X') {
//       squareEl.classList.add('x');
//     } else if (board[index] === 'O') {
//       squareEl.classList.add('o');
//     }
//   });
//---------------------------END OF FUNCTION PART 3--------------------------<= 




//-------------------------------FUNCTION PART 4-----------------------------<= 
// const updateMessage = () => {

// };

//---------------------------END OF FUNCTION PART 4--------------------------<= 


/*----------------------------- Event Listeners -----------------------------*/



