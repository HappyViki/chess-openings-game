import { NEW_GAME_BOARD_CONFIG } from "js-chess-engine/lib/const/board.mjs";
import { Game } from 'js-chess-engine/lib/js-chess-engine.mjs';
import { renderApp, currentPlayerPiece } from './utils.js';

const game = new Game();
let currentSquareId;

renderApp(NEW_GAME_BOARD_CONFIG);

document.addEventListener("click", async (e) => {    
    if ([...e.target.classList].includes("move")) {
        document.querySelectorAll(".move").forEach( move => move.classList.remove("move") );
        game.move(currentSquareId, e.target.id);
        game.aiMove();
        await renderApp(game.exportJson());
    }

    if ([...e.target.classList].includes("piece") && !currentPlayerPiece(e.target.id)) {        
        e.target.parentElement.click();
    }

    if ([...e.target.classList].includes("piece") && currentPlayerPiece(e.target.id)) {        
        document.querySelectorAll(".move").forEach( move => move.classList.remove("move") );

        let id = e.target.parentElement.id;        
        let moves = game.moves(id);
        currentSquareId = id;

        moves.forEach( move => document.querySelector( `#${move}`).classList.add("move") );
    }    
})