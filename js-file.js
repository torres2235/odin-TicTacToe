let container = document.getElementById('board');

const playerFactory = (name, marker) => { //factory
    name = name;
    marker = marker;

    return {name, marker};
}

const gameBoard = (() => { //module
    let _board = new Array(9);
    
    const drawGameBoard = () => {
        for(let i = 0; i < 9; i++) {
            let cell = document.createElement('div');
            _board.push(cell)
            cell.classList.toggle('square');
            cell.id = i;
            cell.textContent = "X";
            container.appendChild(cell);
        }
    }
    //console.table(_board);
    return {drawGameBoard};
})();

const displayController = (() => { //module
    //stuff
})();

gameBoard.drawGameBoard();