export default class GameView{


    updateBoard(game){
       this.updateTurn(game);
       const winningCombination = game.findWinningCombinations();

       for(let i=0 ; i<game.board.length ; i++){
            const tile =  document.querySelector(`.board-tile[data-index='${i}']`);
            console.log(tile.querySelector('span'));
          //   tile.textContent = game.board[i];
             tile.classList.remove("tile-winner");
            let tileClass = game.board[i] == 'X' ? "tile-x" : "tile-o";

            if(winningCombination && winningCombination.includes(i)){
               tileClass = "tile-winner";
            }

            tile.innerHTML = `<span class = "${tileClass}">${game.board[i]!=null ? game.board[i]
          : ""}</span>`;
          
          
       }
      
    }

    updateTurn(game){
       let player_x =  document.querySelector(".player-x");
       let player_o =  document.querySelector(".player-o");
       player_x.classList.remove('active');
       player_o.classList.remove('active');
       if(game.turn == 'X'){
            player_x.classList.add('active');
       }else{
            player_o.classList.add('active');
       }
    }
}