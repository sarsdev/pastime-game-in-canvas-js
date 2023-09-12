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
    space9: null,
    checkCombinations: function(space1, space2, space3) {
        if(space1 !== null && space2 !== null && space3 !== null && space1 === space2 && space1 === space3) {
            return true;
        }
        return false;
    },
    noMatches: function() {
        if (this.space1 !== null && this.space2 !== null && this.space3 !== null &&
            this.space4 !== null && this.space5 !== null && this.space6 !== null &&
            this.space7 !== null && this.space8 !== null && this.space9 !== null) {
            return true;
        }
        return false;
    },
    inicializeValues: function() {
        this.space1 = null;
        this.space2 = null;
        this.space3 = null;
        this.space4 = null;
        this.space5 = null;
        this.space6 = null;
        this.space7 = null;
        this.space8 = null;
        this.space9 = null;
    }
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
    let spaceClicked = getSpaceClicked(e);
    if(board[`space${spaceClicked.indexSpace}`] !== null) return;
    spaceClicked.setMove(currentPlayer, spaceClicked.indexSpace);
    board[`space${spaceClicked.indexSpace}`] = currentPlayer;
    let statusGame = isGameFinish();
    if(!statusGame.finish) {
        currentPlayer = updateCurrentPlayer();
        updateTurno(currentPlayer);
        return;
    }
    setScore(statusGame.winner);
    clearBoard();
}

function updateCurrentPlayer() {
    return currentPlayer === 'X' ? 'O' : 'X';
}

function updateTurno(currentPlayer) {
    turno.textContent = `Jogador ${currentPlayer}`;
    turno.style.color = currentPlayer === 'X' ? 'blue' : 'red';
}

function getSpaceClicked(e) {  
    let spaces = spacesClickable.filter((space) => {
        return space.clicked(e.offsetX, e.offsetY);
    });
    return spaces[0];
}

function inicializeDetails() {
    updateTurno(currentPlayer);
    scoreX.textContent = `Jogador X: ${scorePlayerX}`;
    scoreO.textContent = `Jogador O: ${scorePlayerO}`;
    draw.textContent = `Empates: ${scoreDraw}`;
}

function setScore(pWinner) {
    if(pWinner === 'X') {
        scorePlayerX++;
        scoreX.textContent = `Jogador X: ${scorePlayerX}`;
        addNewHistoric("Jogador X ganhou");
    } else if(pWinner === 'O') {
        scorePlayerO++;
        scoreO.textContent = `Jogador O: ${scorePlayerO}`;
        addNewHistoric("Jogador O ganhou");
    } else {
        scoreDraw++;
        draw.textContent = `Empates: ${scoreDraw}`;
        addNewHistoric("Empate");
    }
}

function addNewHistoric(text) {
    let nodeLi = document.createElement("li");
    nodeLi.appendChild(document.createTextNode(text));
    historic.appendChild(nodeLi);
}

function clearBoard() {
    board.inicializeValues();
    currentPlayer = "X";
    createBoard();
}