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


/*-------------------------------- Functions --------------------------------*/

//=>-----------------------------FUNCTION PART 1-----------------------------<=
const init = () => {
    board = ['', '', '', '', '', '', '', ''];
    turn = 'X';
    winner = false;
    tie = false;

    render()

    //console.log('Init function is called!');
};
//----------------------------END OF FUNCTION PART 1--------------------------<= 




//=>----------------------------FUNCTION PART 2-------------------------------<=





/*----------------------------- Event Listeners -----------------------------*/



