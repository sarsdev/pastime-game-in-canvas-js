function getCalcHeightTotalElements() {
    return document.getElementsByTagName("header")[0].offsetHeight +
        document.getElementsByTagName("footer")[0].offsetHeight;
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

function getSpaceCoordX(pPosition) {
    if(pPosition === 1 || pPosition === 4 || pPosition === 7) {
        return coodsGeneral.marginBorders;

    } else if(pPosition === 2 || pPosition === 5 || pPosition === 8) {
        return coodsGeneral.spaceBetweenBars +
            coodsGeneral.marginBorders +
            coodsGeneral.widthRectBoard;

    } else if(pPosition === 3 || pPosition === 6 || pPosition === 9) {
        return (coodsGeneral.spaceBetweenBars * 2) +
        coodsGeneral.marginBorders +
        (coodsGeneral.widthRectBoard * 2);

    } else {
        return 0;
    }
}

function getSpaceCoordY(pPosition) {
    if(pPosition === 1 || pPosition === 2 || pPosition === 3) {
        return coodsGeneral.marginBorders;

    } else if(pPosition === 4 || pPosition === 5 || pPosition === 6) {
        return coodsGeneral.spaceBetweenBars +
            coodsGeneral.marginBorders +
            coodsGeneral.widthRectBoard;

    } else if(pPosition === 7 || pPosition === 8 || pPosition === 9) {
        return coodsGeneral.spaceBetweenBars * 2 +
        coodsGeneral.marginBorders +
        (coodsGeneral.widthRectBoard * 2);
        
    } else {
        return 0;
    }
}

function getSpaceCoordW() {
    return coodsGeneral.spaceBetweenBars;
}

function getSpaceCoordH() {
    return coodsGeneral.spaceBetweenBars;
}

function getCoodsMoveX(pCoodsSpace) {
    let width = coodsGeneral.widthRectBoard * 0.7;
    let percMargin = 0.2;
    return {
        x: (pCoodsSpace.x + (pCoodsSpace.w / 2)) - width / 2,
        y: pCoodsSpace.y + ((pCoodsSpace.h * percMargin) / 2),
        w: width,
        h: pCoodsSpace.h - (pCoodsSpace.h * percMargin)
    }
}

function getCoodsMoveO(pCoodsSpace) {
    let percMargin = 0.1;
    return {
        x: pCoodsSpace.x + (pCoodsSpace.w / 2),
        y: pCoodsSpace.y + (pCoodsSpace.h / 2),
        radius: (pCoodsSpace.w / 2) - (pCoodsSpace.w * percMargin),
        startAngle: 0,
        endAngle: 2 * Math.PI
    }
}