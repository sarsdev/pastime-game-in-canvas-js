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

function getSpaceCoordW(pPosition) {
    return coodsGeneral.spaceBetweenBars;
}

function getSpaceCoordH(pPosition) {
    return coodsGeneral.spaceBetweenBars;
}