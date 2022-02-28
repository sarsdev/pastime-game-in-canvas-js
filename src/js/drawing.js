function createBoard() {
    context.fillStyle = "#1F2737";
    
    createBarsBoard(getCoodsBarByPosition(1, 'H'));
    createBarsBoard(getCoodsBarByPosition(2, 'H'));
    createBarsBoard(getCoodsBarByPosition(1, 'V'));
    createBarsBoard(getCoodsBarByPosition(2, 'V'));
    
    spacesClickable.push(new createSpaceClickable(getCoodsSpacesClickableByPosition(1)));
    spacesClickable.push(new createSpaceClickable(getCoodsSpacesClickableByPosition(2)));
    spacesClickable.push(new createSpaceClickable(getCoodsSpacesClickableByPosition(3)));
    spacesClickable.push(new createSpaceClickable(getCoodsSpacesClickableByPosition(4)));
    spacesClickable.push(new createSpaceClickable(getCoodsSpacesClickableByPosition(5)));
    spacesClickable.push(new createSpaceClickable(getCoodsSpacesClickableByPosition(6)));
    spacesClickable.push(new createSpaceClickable(getCoodsSpacesClickableByPosition(7)));
    spacesClickable.push(new createSpaceClickable(getCoodsSpacesClickableByPosition(8)));
    spacesClickable.push(new createSpaceClickable(getCoodsSpacesClickableByPosition(9)));
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

function createSpaceClickable(pCoods) {
    this.indexSpace = pCoods.i;
    this.posInitialX = pCoods.x;
    this.posFinalX = pCoods.x + pCoods.w;
    this.posInitialY = pCoods.y;
    this.posFinalY = pCoods.y + pCoods.h;
    this.width = pCoods.w;
    this.heigth = pCoods.h;
    context.fillStyle = "#B6C0D3";
    context.fillRect(this.posInitialX, this.posInitialY, this.width, this.heigth);
    this.clicked = function(x, y) {
        if(this.posInitialX > x || this.posFinalX < x || this.posInitialY > y || this.posFinalY < y) {
            return false;
        }
        return true;
    }
    this.setMove = function(pPlayer) {
        setMoveOnBoard(pPlayer);
    }
}

function getCoodsSpacesClickableByPosition(pPosition) {
    return {
        i: pPosition,
        x: getSpaceCoordX(pPosition),
        y: getSpaceCoordY(pPosition),
        w: getSpaceCoordW(pPosition),
        h: getSpaceCoordH(pPosition)
    }
}

function setMoveOnBoard(pPlayer) {
    console.log(pPlayer);
}