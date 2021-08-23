import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView();

document.querySelector(".restart").addEventListener("click", () =>{
    console.log("New game");
    onClickRestart();
})

const tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) =>{
    tile.addEventListener("click", ()=>{
        onClickTile(tile.dataset.index);
    })
})

function onClickTile(i){
    game.makeMove(i);
    gameView.updateBoard(game);
    // game.nextTurn();
}

function onClickRestart(){
    let newgame = new Game();
    gameView.updateBoard(newgame);
}
gameView.updateBoard(game);