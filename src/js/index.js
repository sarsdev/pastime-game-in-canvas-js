var context;
var widthWindow = (window.innerWidth > window.innerHeight - getCalcHeightTotalElements() ? window.innerHeight - getCalcHeightTotalElements() : window.innerWidth) * 0.8;
var coodsGeneral = {
    maxPositonX: widthWindow,
    maxPositonY: widthWindow,
    marginBorders: widthWindow * 0.03,
    widthRectBoard: widthWindow * 0.07,
    lengthBarBoard: widthWindow - ((widthWindow * 0.03) * 2),
    spaceBetweenBars: (widthWindow - ((widthWindow * 0.03) * 2) - ((widthWindow * 0.07) * 2)) / 3
};

function getCalcHeightTotalElements() {
    return document.getElementsByTagName("header")[0].offsetHeight +
        document.getElementsByTagName("footer")[0].offsetHeight;
}

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
}

function createBoard() {
    context.fillStyle = "#1F2737";
    createBarsBoard(getCoodsBarByPosition(1, 'H'));
    createBarsBoard(getCoodsBarByPosition(2, 'H'));
    createBarsBoard(getCoodsBarByPosition(1, 'V'));
    createBarsBoard(getCoodsBarByPosition(2, 'V'));
}

function createBarsBoard(pCoods) {
    context.fillRect(pCoods.x, pCoods.y, pCoods.w, pCoods.h);
}

function getCoodsBarByPosition(pPosition, pOrientation) {
    return {
        x: getCalcCoordX(pPosition, pOrientation),
        y: getCalcCoordY(pPosition, pOrientation),
        w: getCalcCoordW(pOrientation),
        h: getCalcCoordH(pOrientation)
    }
}

function getCalcCoordX(pPosition, pOrientation) {
    return pOrientation === 'H' ?
        (coodsGeneral.spaceBetweenBars * pPosition) +
        coodsGeneral.marginBorders +
        (coodsGeneral.widthRectBoard * (pPosition - 1))
        :
        coodsGeneral.marginBorders;
}

function getCalcCoordY(pPosition, pOrientation) {
    return pOrientation === 'H' ?
        coodsGeneral.marginBorders
        :
        (coodsGeneral.spaceBetweenBars * pPosition) +
        coodsGeneral.marginBorders +
        (coodsGeneral.widthRectBoard * (pPosition - 1));
}

function getCalcCoordW(pOrientation) {
    return pOrientation === 'H' ? coodsGeneral.widthRectBoard : coodsGeneral.lengthBarBoard;
}

function getCalcCoordH(pOrientation) {
    return pOrientation === 'H' ? coodsGeneral.lengthBarBoard : coodsGeneral.widthRectBoard;
}