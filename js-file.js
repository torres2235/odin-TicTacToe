let container = document.getElementById('board');

const playerFactory = (name, marker) => { //factory
    name = name;
    marker = marker;

    return {name, marker};
}
const player1 = playerFactory("Player One", "X");
const player2 = playerFactory("Player Two", "O");
let player1Turn = true;

function playerTurn() {
    let indicator = document.getElementById("turnIndicator");
    if (player1Turn == true) {
        indicator.textContent = player1.name + "\'s turn!";
    } else {
        indicator.textContent = player2.name + "\'s turn!";
    }
    
}

const gameBoard = (() => { //module
    let board = [];
    
    const drawGameBoard = () => { //creates our inital gameboard
        for(let i = 0; i < 9; i++) {
            let cell = document.createElement('div');
            cell.classList.toggle('square');
            cell.id = i;
            container.appendChild(cell);
            board.push(cell)

            playerTurn();

            cell.onclick = () => {
                playGame(cell.id);
            }
        }
    }
    return {board, drawGameBoard};
})();

function playGame(cell) {
    let space = document.getElementById(cell);

    if(board[cell] == null) {
        if(player1Turn == true) {
            space.textContent = "X";
            board[cell] = "X";
            player1Turn = !player1Turn;
        } else {
            space.textContent = "O";
            board[cell] = "O";
            player1Turn = !player1Turn;
        }
    }
    
    playerTurn();
    checkWin();
};

function checkWin() {
    if((board[0] == "X" && board[1] == "X" && board[2] == "X") || //x rows
       (board[3] == "X" && board[4] == "X" && board[5] == "X") ||
       (board[6] == "X" && board[7] == "X" && board[8] == "X") ||
       (board[0] == "X" && board[3] == "X" && board[6] == "X") || //x cols
       (board[1] == "X" && board[4] == "X" && board[5] == "X") ||
       (board[3] == "X" && board[5] == "X" && board[8] == "X") ||
       (board[0] == "X" && board[4] == "X" && board[8] == "X") || //x diag
       (board[2] == "X" && board[4] == "X" && board[6] == "X")) {
        xWins();
    }

    if((board[0] == "O" && board[1] == "O" && board[2] == "O") || //o rows
       (board[3] == "O" && board[4] == "O" && board[5] == "O") ||
       (board[6] == "O" && board[7] == "O" && board[8] == "O") ||
       (board[0] == "O" && board[3] == "O" && board[6] == "O") || //o cols
       (board[1] == "O" && board[4] == "O" && board[5] == "O") ||
       (board[3] == "O" && board[5] == "O" && board[8] == "O") ||
       (board[0] == "O" && board[4] == "O" && board[8] == "O") || //o diag
       (board[2] == "O" && board[4] == "O" && board[6] == "O")) {
        oWins();
    }
}

function xWins() {
    console.log("X WINS!");
    let indicator = document.getElementById("turnIndicator");
    indicator.textContent = player1.name + " WINS!"
}

function oWins() {
    console.log("O WINS!");
    let indicator = document.getElementById("turnIndicator");
    indicator.textContent = player2.name + " WINS!"
}

const displayController = (() => { //module
    //stuff
})();

gameBoard.drawGameBoard();
//playGame();
//console.log({player1, player2});
//console.log(gameBoard.board);