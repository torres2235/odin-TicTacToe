const playerFactory = (name, marker) => { //factory
    name = name;
    marker = marker;

    return {name, marker};
}

const gameBoard = (() => { //module
    let _board = new Array(9);
})();

const displayController = (() => { //module
    //stuff
})();