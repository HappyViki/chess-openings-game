export const currentPlayerPiece = (id) => {
    switch (id) {
        case 'r':
        case 'n':
        case 'b':
        case 'q':
        case 'k':
        case 'p': return false;
        case 'R':
        case 'N':
        case 'B':
        case 'Q':
        case 'K':
        case 'P': return true;
    }
}

const getPieceImageSource = (piece) => {
    switch (piece) {
        case 'r': return 'src/img/black_rook.png';
        case 'n': return 'src/img/black_knight.png';
        case 'b': return 'src/img/black_bishop.png';
        case 'q': return 'src/img/black_queen.png';
        case 'k': return 'src/img/black_king.png';
        case 'p': return 'src/img/black_pawn.png';
        case 'R': return 'src/img/white_rook.png';
        case 'N': return 'src/img/white_knight.png';
        case 'B': return 'src/img/white_bishop.png';
        case 'Q': return 'src/img/white_queen.png';
        case 'K': return 'src/img/white_king.png';
        case 'P': return 'src/img/white_pawn.png';
    }
}

export const renderApp = async (config) => {
    const letters = "ABCDEFGH".split("");
    let html = "";
    let isBlack = false;    

    for (let num = 8; num >= 1; num--) {

        html += `<div class="row">`;

        for (let letter of letters) {
            let id = letter + num;
            let piece = config.pieces[id];        

            html += `<div id="${id}" class="square ${ isBlack ? "black" : "white" }">`;

            if (!!piece) {
                html += `<img class="piece" id="${piece}" draggable="true" src="${getPieceImageSource(piece)}"></img>`;
            }

            html += `</div>`;
            isBlack = !isBlack;
        }

        html += `<div class="border">${num}</div>`;
        html += `</div>`;

        isBlack = !isBlack;
    }

    html += `<div class="row">`;

    for (let letter of letters) {
        html += `<div class="border">${letter}</div>`;
    }

    html += `<div class="square"></div>`;

    html += `</div>`;

    document.querySelector(".board").innerHTML = html;
}