import { Game } from './js-chess-engine';
import { renderApp, currentPlayerPiece } from './utils.js';

const game = new Game();
let currentSquareId;
let playerColor = game.board.getPlayingColor();

renderApp(game.board.configuration);

document.addEventListener("click", async (e) => {    
    if ([...e.target.classList].includes("move")) {
        game.move(currentSquareId, e.target.id);
        game.aiMove();
        playerColor = game.board.getPlayingColor();
        await renderApp(game.exportJson());
    }

    if ([...e.target.classList].includes("piece")) {     
        e.target.parentElement.click();

        let id = e.target.parentElement.id;        
        let moves = game.moves(id);
        currentSquareId = id;

        document.querySelectorAll(".move").forEach( move => move.classList.remove("move") );
        moves.forEach( move => document.querySelector( `#${move}`).classList.add("move") );
    }    
})