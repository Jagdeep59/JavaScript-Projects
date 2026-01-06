let activePlayer = "X";
let selectedSquares = [];
let body = document.getElementById("body");

function placeXOrO(squareNumber) {
    if (!selectedSquares.some(el => el.includes(squareNumber))) {

        let square = document.getElementById(squareNumber);

        if (activePlayer === "X") {
            square.style.backgroundImage = 'url("images/X.png")';
        } else {
            square.style.backgroundImage = 'url("images/O.png")';
        }

        selectedSquares.push(squareNumber + activePlayer);
        checkWinConditions();

        activePlayer = activePlayer === "X" ? "O" : "X";

        audio("media/place.mp3");

        if (activePlayer === "O") {
            disableClick();
            setTimeout(computersTurn, 1000);
        }

        return true;
    }
    return false;
}

function computersTurn() {
    let success = false;
    let pickASquare;

    while (!success) {
        pickASquare = String(Math.floor(Math.random() * 9));
        if (placeXOrO(pickASquare)) success = true;
    }
}

function checkWinConditions() {

    if (arrayIncludes("0X","1X","2X")) drawWinLine(50,100,558,100);
    else if (arrayIncludes("3X","4X","5X")) drawWinLine(50,304,558,304);
    else if (arrayIncludes("6X","7X","8X")) drawWinLine(50,508,558,508);
    else if (arrayIncludes("0X","3X","6X")) drawWinLine(100,50,100,558);
    else if (arrayIncludes("1X","4X","7X")) drawWinLine(304,50,304,558);
    else if (arrayIncludes("2X","5X","8X")) drawWinLine(508,50,508,558);
    else if (arrayIncludes("0X","4X","8X")) drawWinLine(80,80,528,528);
    else if (arrayIncludes("2X","4X","6X")) drawWinLine(528,80,80,528);

    else if (arrayIncludes("0O","1O","2O")) drawWinLine(50,100,558,100);
    else if (arrayIncludes("3O","4O","5O")) drawWinLine(50,304,558,304);
    else if (arrayIncludes("6O","7O","8O")) drawWinLine(50,508,558,508);
    else if (arrayIncludes("0O","3O","6O")) drawWinLine(100,50,100,558);
    else if (arrayIncludes("1O","4O","7O")) drawWinLine(304,50,304,558);
    else if (arrayIncludes("2O","5O","8O")) drawWinLine(508,50,508,558);
    else if (arrayIncludes("0O","4O","8O")) drawWinLine(80,80,528,528);
    else if (arrayIncludes("2O","4O","6O")) drawWinLine(528,80,80,528);

    else if (selectedSquares.length >= 9) {
        audio("media/tie.mp3");
        setTimeout(resetGame, 500);
    }
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById("win-lines");
    const c = canvas.getContext("2d");

    let x = coordX1;
    let y = coordY1;

    disableClick();
    audio("media/winGame.mp3");

    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);

        c.clearRect(0, 0, 608, 608);
        c.beginPath();
        c.moveTo(coordX1, coordY1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = "red";
        c.stroke();

        if (x < coordX2) x += 10;
        if (y < coordY2) y += 10;
        if (x > coordX2) x -= 10;
        if (y > coordY2) y -= 10;

        if (x === coordX2 && y === coordY2) {
            cancelAnimationFrame(animationLoop);
            setTimeout(() => {
                c.clearRect(0, 0, 608, 608);
                resetGame();
            }, 1000);
        }
    }

    animateLineDrawing();
}

function arrayIncludes(a,b,c) {
    return selectedSquares.includes(a) &&
           selectedSquares.includes(b) &&
           selectedSquares.includes(c);
}

function disableClick() {
    body.style.pointerEvents = "none";
    setTimeout(() => {
        body.style.pointerEvents = "auto";
    }, 1000);
}

function audio(audioURL) {
    let sound = new Audio(audioURL);
    sound.play();
}

function resetGame() {
    selectedSquares = [];
    activePlayer = "X";

    for (let i = 0; i < 9; i++) {
        document.getElementById(String(i)).style.backgroundImage = "";
    }
}


function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = "";
    }

    selectedSquares = [];
    activePlayer = "X";

    const canvas = document.getElementById("win-lines");
    const c = canvas.getContext("2d");
    c.clearRect(0, 0, 608, 608);
}

