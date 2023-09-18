function StartTicTacToe() {
    let main = document.getElementsByTagName('main');
    main[0].innerHTML = "<canvas></canvas>" +
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
    StartTicTacToeGame();
}