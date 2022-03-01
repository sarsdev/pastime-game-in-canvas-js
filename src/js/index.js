var context;
var widthWindow = (window.innerWidth - getCalcWidthTotalElements() > window.innerHeight - getCalcHeightTotalElements() ? window.innerHeight - getCalcHeightTotalElements() : window.innerWidth - getCalcWidthTotalElements()) * 0.8;
var coodsGeneral = {
    maxPositonX: widthWindow,
    maxPositonY: widthWindow,
    marginBorders: widthWindow * 0.03,
    widthRectBoard: widthWindow * 0.07,
    lengthBarBoard: widthWindow - ((widthWindow * 0.03) * 2),
    spaceBetweenBars: (widthWindow - ((widthWindow * 0.03) * 2) - ((widthWindow * 0.07) * 2)) / 3
};
var spacesClickable = [];
var currentPlayer = "X";
var gameIsOver = false;
var board = {
    space1: null,
    space2: null,
    space3: null,
    space4: null,
    space5: null,
    space6: null,
    space7: null,
    space8: null,
    space9: null
};

(() => {
    window.addEventListener("resize", () => document.location.reload(true));
    inicializeCanvas();
    createBoard();
})();

function inicializeCanvas() {
    let canvas = document.getElementsByTagName("canvas");
    canvas[0].width = coodsGeneral.maxPositonX;
    canvas[0].height = coodsGeneral.maxPositonY;
    context = canvas[0].getContext("2d");    
    canvas[0].addEventListener("click", onClickCanvas);
}

function onClickCanvas(e) {
    if(gameIsOver) { return; }
    spacesClickable.forEach((space) => {
        if(space.clicked(e.offsetX, e.offsetY)) {        
            if(board[`space${space.indexSpace}`] !== null) { return; }
            space.setMove(currentPlayer, space.indexSpace);
            board[`space${space.indexSpace}`] = currentPlayer;
            let statusGame = isGameFinish();
            if(statusGame.finish) {
                if(statusGame.winner !== null) {
                    console.log(`O VENCEDOR É ${statusGame.winner}`);
                } else {
                    console.log(`DEU VELHA! EMPATOU :(`);
                }
                gameIsOver = true;
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    });
}