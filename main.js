function StartGame(game) {
    let main = document.getElementsByTagName('main');
    switch (game) {
        case "tictactoe":
            main[0].innerHTML = getHTMLGameTicTacToe();            
            StartTicTacToeGame();
            break;
        case "snake":
            main[0].innerHTML = getHTMLGameSnake();
            StartSnakeGame();
            break;
        default:
            main[0].innerHTML = "<h1>Nenhum jogo encontrado!</h1>";
            break;
    }
}

function getHTMLGameTicTacToe() {
    return "<canvas id='canvas-tictactoe'></canvas>" +
    "<aside>" +
        "<div class='detalhe'>" +
            "<div>" +
                "<h3 class='detalhe-titulo'>Turno</h3>" +
                "<span class='turno'></span>" +
            "</div>" +
            "<div>" +
                "<h3 class='detalhe-titulo'>Placar</h3>" +
                "<span id='placarX' class='placar'>Jogador X: 0</span>" +
                "<span id='placarO' class='placar'>Jogador O: 0</span>" +
                "<span id='placarEmpate' class='placar'>Empates: 0</span>" +
            "</div>" +
        "</div>" +
        "<div>" +
            "<h3 class='detalhe-titulo'>Histórico</h3>" +
            "<ul></ul>" +
        "</div>" +
    "</aside>";
}

function getHTMLGameSnake() {
    return "<canvas id='canvas-snake'></canvas>";
}