function getCalcHeightTotalElements() {
    return document.getElementsByTagName("header")[0].offsetHeight +
        document.getElementsByTagName("footer")[0].offsetHeight;
}

function getCalcWidthTotalElements() {
    let totalValue = 0;
    if(document.getElementsByTagName("aside")[0]) {
        totalValue += document.getElementsByTagName("aside")[0].offsetWidth;
    }
    return totalValue;
}

function getWidthHeightCanvas() {
    let widthWindow = (window.innerWidth - getCalcWidthTotalElements() > window.innerHeight - getCalcHeightTotalElements() ? window.innerHeight - getCalcHeightTotalElements() : window.innerWidth - getCalcWidthTotalElements()) * 0.8;
    return widthWindow < 360 ? 360 : widthWindow;
}