currentPlayer = "red";
let weHaveWinner = 0; 
let mat = [
    [11, 12, 13, 14, 15, 16, 17],
    [21, 22, 23, 24, 25, 26, 27],
    [31, 32, 33, 34, 35, 36, 37],
    [41, 42, 43, 44, 45, 46, 47],
    [51, 52, 53, 54, 55, 56, 57],
    [61, 62, 63, 64, 65, 66, 67],
] 

generateButtons();

function generateButtons() {
    for (let i = 1; i <= 6; ++i) {
        for (let j = 1; j <= 7; ++j) {
            const button = document.createElement("button");
            button.type = "button";
            button.id = i * 10 + j;
            button.innerText = button.id;
            document.body.appendChild(button);    
            button.onclick = "this.disabled=true";
            button.onclick = function() {modifyCell(button.id, currentPlayer, i, j); this.disabled=true;}
            if (j == 7 ) {
                document.body.appendChild(document.createElement("br"));
            }
        }  
    } 
}

function modifyCell(idBtn, currentGamer, lineIndex, colIndex) {
    let currentBtn = document.getElementById(idBtn);
    if (weHaveWinner == 0) {
        if (currentGamer === "red") {
            currentPlayer = "yellow";
        } else if (currentGamer === "yellow") {
            currentPlayer = "red";
        }
        currentBtn.style.backgroundColor = currentGamer;
        mat[lineIndex - 1][colIndex - 1] = currentGamer;
        document.getElementById("Initial-text").innerHTML = "NO WINNER";
        checkWinner(weHaveWinner, currentGamer);
    }
}

function checkWinner(weHaveWinner1, currentColor) {
    weHaveWinner1 = 0;  
    for (let i = 0; i < 6 && weHaveWinner1 == 0; ++i) {
        for (let j = 0; j < 7 && weHaveWinner1 == 0; ++j) {
            if ((j < 4 &&  mat[i][j] == mat[i][j + 1] && mat[i][j + 1] == mat[i][j + 2] && mat[i][j + 2] == mat[i][j + 3]) || 
                (i < 4 && mat[i][j] == mat[i + 1][j] && mat[i + 1][j] == mat[i + 2][j] && mat[i + 2][j] == mat[i + 3][j]) ||
                (i < 4 && j < 4 && mat[i][j] == mat[i + 1][j + 1] && mat[i + 1][j + 1] == mat[i + 2][j + 2] && mat[i + 2][j + 2] == mat[i + 3][j + 3]) ||
                 i < 4 && j > 3 && (mat[i][j] == mat[i + 1][j - 1] && mat[i + 1][j - 1] == mat[i + 2][j - 2] && mat[i + 2][j - 2] == mat[i + 3][j - 3])) {
                document.getElementById("Initial-text").innerHTML = "Winner is color: " + currentColor;
                weHaveWinner1 = 1; 
                weHaveWinner = weHaveWinner1;
            }    
        }
    }
  
}
