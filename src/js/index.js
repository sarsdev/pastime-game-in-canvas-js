var context;
var widthWindow = (window.innerWidth - getCalcWidthTotalElements() > window.innerHeight - getCalcHeightTotalElements() ? window.innerHeight - getCalcHeightTotalElements() : window.innerWidth - getCalcWidthTotalElements()) * 0.8;
widthWindow = widthWindow < 380 ? 380 : widthWindow;
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
var turno = document.querySelector(".turno");
var scorePlayerX = 0;
var scoreX = document.querySelector("#placarX");
var scorePlayerO = 0;
var scoreO = document.querySelector("#placarO");
var scoreDraw = 0;
var draw = document.querySelector("#placarEmpate");
var historic = document.querySelector("ul");

(() => {
    window.addEventListener("resize", () => document.location.reload(true));
    inicializeCanvas();
    inicializeDetails();
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
    spacesClickable.forEach((space) => {
        if(space.clicked(e.offsetX, e.offsetY)) {        
            if(board[`space${space.indexSpace}`] !== null) { return; }
            space.setMove(currentPlayer, space.indexSpace);
            board[`space${space.indexSpace}`] = currentPlayer;
            let statusGame = isGameFinish();
            if(statusGame.finish) {
                if(statusGame.winner !== null) {
                    setScore(statusGame.winner);
                } else {
                    setScore(null);
                }
                clearBoard();
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                turno.textContent = `Jogador ${currentPlayer}`;
                turno.style.color = currentPlayer === 'X' ? 'blue' : 'red';
            }
        }
    });
}

function inicializeDetails() {
    turno.textContent = `Jogador ${currentPlayer}`;
    turno.style.color = 'blue';
    scoreX.textContent = `Jogador X: ${scorePlayerX}`;
    scoreO.textContent = `Jogador O: ${scorePlayerO}`;
    draw.textContent = `Empates: ${scoreDraw}`;
}

function setScore(pWinner) {
    if(pWinner === 'X') {
        scorePlayerX++;
        scoreX.textContent = `Jogador X: ${scorePlayerX}`;
        let nodeLi = document.createElement("li");
        nodeLi.appendChild(document.createTextNode("Jogador X ganhou"));
        historic.appendChild(nodeLi);
    } else if(pWinner === 'O') {
        scorePlayerO++;
        scoreO.textContent = `Jogador O: ${scorePlayerO}`;
        let nodeLi = document.createElement("li");
        nodeLi.appendChild(document.createTextNode("Jogador O ganhou"));
        historic.appendChild(nodeLi);
    } else {
        scoreDraw++;
        draw.textContent = `Empates: ${scoreDraw}`;
        let nodeLi = document.createElement("li");
        nodeLi.appendChild(document.createTextNode("Empate"));
        historic.appendChild(nodeLi);
    }
}

function clearBoard() {
    board = {
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
    spacesClickable = [];
    currentPlayer = "X";
    createBoard();
}