# TASK TO TODO

1. create html for tic-tac-toe game
2. Add functionality to start a new game
3. add functionality to display your placement in the grid
4. Add functionality to switch turns
5. Add functionality to find the winner


# some important concepts
1. * stands for the universal selector
2. max-width : 1440  # is it standard so here it is partials standard width
3. display : grid # this is also very important
 > grid-template-columns : 1fr 1fr 1fr
 also write as repeat(3, 1fr);
 > grid-template-rows : 1fr 1fr 1fr
 also write as repeat(3, 1fr);
 4. how to give border to the grid
 > board-tile:not(:nth-child(3n)){}
 > board-tile:not(:nth-child(-n+3)){}

 5. ./CSS/style.css > at here ./ means we are at current directory

 # moving to js part
1. maintain an array for grid value
2. turn ="X" or  "O"

3. Class is a container or box that has veriables and lots of functionality
4. the main task isto add the feature(JS class functionality or
whatever be the logic) in the index.html actually and this is going to be the super 
challenging part;

5. we create another class of GameView.js. this class is all about what we are 
see in the front or the browser

6. in this class we are createing a function called update board which is actually
changing the gameBoard view by anytime user select any grid or make his chance

7. we need event listener that do updateBoard while clicking on browser