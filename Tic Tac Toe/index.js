let currentPlayer = document.querySelector(".current-player");
let boxes = document.querySelectorAll(".box");
let newGameBtn = document.querySelector(".btn");

let gameGrid;
let player;
const winingPositions= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function init(){
    player = 'X';
    gameGrid = ["","","","","","","","",""];
    newGameBtn.classList.remove("active");
    newGameBtn.classList.add("deactive");
    currentPlayer.innerText = "Current Player - " + player; 

    // game over is clicked then we have to make all the boxes clear in UI
    boxes.forEach((box,index)=>{
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";
    })
    //new game started but the color is still green in current-player status and in the boxes, so we have to remove it by initializing the css properties again
        currentPlayer.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
        boxes.forEach( (box)=>{
            box.classList = "box";
        } )

}
init();
function handleClick(index){
    if(gameGrid[index] === ""){
        boxes[index].innerText = player;
        gameGrid[index] = player;
        boxes[index].style.pointerEvents = "none";
        // Swap the turn to next player
        swapTurn();
        // Then check if the player has won the game or not
        checkGameOver();
    }
}
// Swap the turn 
function swapTurn(){
    if(player === 'X'){
        player = 'O';
    }
    else{
        player = 'X';
    }
    currentPlayer.innerText = "Current Player - " + player;
}
// Check Game Over or not
function checkGameOver(){
    
    let winner = "";

    winingPositions.forEach( (positions)=>{
        // Check all the 3 boxes are non-empty and exactly same value as in wining posiitons
        if( (gameGrid[positions[0]] != "" || gameGrid[positions[1]] != "" || gameGrid[positions[2]] != "") && (gameGrid[positions[0]] === gameGrid[positions[1]] && gameGrid[positions[1]] === gameGrid[positions[2]]))
        {

            // check winner is X or Y
            if(gameGrid[positions[0]] === "X"){
                winner = "X";
            }
            else{
                winner = "O";
            }

            // Now mark all those boxes Green
            boxes[positions[0]].classList.add("win");
            boxes[positions[1]].classList.add("win");
            boxes[positions[2]].classList.add("win");

            // As we got the winner we don't need any inputs so disable all the pointer events
            boxes.forEach((box)=>{
                box.style.pointerEvents = "none";
            })
        }

    } );
    if(winner != ""){
        // Make the new game button visible
        newGameBtn.classList.add("active");
        newGameBtn.classList.remove("deactive");

        // Mark Winner in the current player info
        currentPlayer.innerHTML = "Winner is - "+ winner;
        currentPlayer.style.backgroundColor = "#4df037e5";
        return;
    }

    // if there isn't any winner, all the cells are emptya and the game is tied
    let count = 0;
    gameGrid.forEach( (box)=>{
        if(box !== ""){
            count++; 
        }
    } );
    if(count === 9){
        currentPlayer.innerText = "Game Tied ";
        currentPlayer.style.backgroundColor = "#bc2525";
        // Make the new game button visible
        newGameBtn.classList.add("active");
        newGameBtn.classList.remove("deactive");
    }
    

    
}

boxes.forEach( (box,index)=>{
    box.addEventListener("click", function(){
        handleClick(index);
    })
});
newGameBtn.addEventListener('click', init);