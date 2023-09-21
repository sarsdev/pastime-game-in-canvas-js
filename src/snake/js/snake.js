var contextSnake;
var snakeCharacter;

function StartSnakeGame() {
    inicializeCanvasSnake();
    CreateSnake();
}

function inicializeCanvasSnake() {
    let canvas = document.getElementById("canvas-snake");
    canvas.width = canvas.height = getWidthHeightCanvas();
    contextSnake = canvas.getContext("2d");
}

function CreateSnake() {
    contextSnake.fillStyle = "#b82d2d";
    contextSnake.fillRect(100, 100, 20, 20);
}