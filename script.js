currentPlayer = "red";
let weHaveWinner = 0; 
let board = [];
const noLines = 6, noCol = 7, TEN = 10;

initializeBoard();

function initializeBoard() {  
    for (let i = 0; i < noLines; ++i) {
        board[i] = [];
        for (let j = 0; j < noCol; ++j) {
            board[i][j] = (i + 1) * TEN + j + 1;
        }
    }
}

generateButtons();

function generateButtons() {
    for (let i = 1; i <= noLines; ++i) {
        for (let j = 1; j <= noCol; ++j) {
            const button = document.createElement("button");
            button.type = "button";
            button.id = i * TEN + j;
            button.innerText = button.id;
            document.body.appendChild(button);    
            button.onclick = "this.disabled=true";
            button.onclick = function() {modifyCell(button.id, i, j); this.disabled=true;}
            if (j == noCol ) {
                document.body.appendChild(document.createElement("br"));
            }
        }  
    } 
}

function modifyCell(idBtn, lineIndex, colIndex) {
    let currentBtn = document.getElementById(idBtn);
    if (weHaveWinner == 0) {
        if (currentPlayer === "red") {
            currentPlayer = "yellow";
        } else if (currentPlayer === "yellow") {
            currentPlayer = "red";
        }
        currentBtn.style.backgroundColor = currentPlayer;
        board[lineIndex - 1][colIndex - 1] = currentPlayer;
        document.getElementById("Initial-text").innerHTML = "NO WINNER";
        checkWinner(weHaveWinner);
    }
}

function checkWinner(weHaveWinner1) {
    weHaveWinner1 = 0;  
    for (let i = 0; i < noLines && weHaveWinner1 == 0; ++i) {
        for (let j = 0; j < noCol && weHaveWinner1 == 0; ++j) {
            if ((j <= noCol / 2 &&  board[i][j] == board[i][j + 1] && board[i][j + 1] == board[i][j + 2] && board[i][j + 2] == board[i][j + 3]) || 
                (i <= noCol / 2 && board[i][j] == board[i + 1][j] && board[i + 1][j] == board[i + 2][j] && board[i + 2][j] == board[i + 3][j]) ||
                (i <= noCol / 2 && j <= noCol / 2 && board[i][j] == board[i + 1][j + 1] && board[i + 1][j + 1] == board[i + 2][j + 2] && board[i + 2][j + 2] == board[i + 3][j + 3]) ||
                 i <= noCol / 2 && j > noCol / 2 && (board[i][j] == board[i + 1][j - 1] && board[i + 1][j - 1] == board[i + 2][j - 2] && board[i + 2][j - 2] == board[i + 3][j - 3])) {
                document.getElementById("Initial-text").innerHTML = "Winner is color: " + currentPlayer;
                weHaveWinner1 = 1; 
                weHaveWinner = weHaveWinner1;
            }    
        }
    }
}
