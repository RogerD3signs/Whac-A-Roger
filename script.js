let currRogerTile;
let currPlantTile;
let score = 0;
let gameOver = false;


window.onload = function() {
    setGame();
}

function setGame() {
 //seting up the grid for the game board in html

 // the start of the for loop i goes from 0 to 8, stops at 9, 
 // because (< = mean less then) 9 is less then 8
  for (let i = 0; i < 9; i++) {  
    //<div id="0-8"></div>
    let tile = document.createElement("div");
    tile.id = i.toString();
    tile.addEventListener("click", selectTile)
    document.getElementById("board").appendChild(tile)

  }
// calling the mole to appear on the tiles every 900 milliseconds = 0.9 seconds
  setInterval(setmole, 900); 
  // calling the plant to appear on the tiles every 1000 milliseconds = 1 seconds
  setInterval(setplant, 1000);
}

function getRandomTile() {
    //math.random --> 0-1 --> (0-1) * 9 = (0-9) --> round down to (0-8) integers num
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setmole() {
    if (gameOver) {
        return;
    }

    if (currRogerTile) {
        currRogerTile.innerHTML = "";
    }

    let roger = document.createElement("img");
    roger.src = "./Images/roger-head.png";

    let num = getRandomTile();
    if (currPlantTile && currPlantTile.id == num) {
        return;
    }
    currRogerTile = document.getElementById(num);
    currRogerTile.appendChild(roger);
}

function setplant() {
    if (gameOver) {
        return;
    }

    if (currPlantTile) {
        currPlantTile.innerHTML = "";
    }

    let plant = document.createElement("img");
    plant.src = "./Images/piranha-plant.png";

    let num = getRandomTile();
    if (currRogerTile && currRogerTile.id == num) {
        return;
    }
    currPlantTile = document.getElementById(num)
    currPlantTile.appendChild(plant);
}

function selectTile() {
    if (gameOver) {
        return;
    }

    if (this == currRogerTile) {
        // this part of the if statment increase the score by 10 everytime the mole is click on 
        score += 10;
        // this if statment allows for when the mole is click on it changes the score in the game
        document.getElementById("score").innerText = score.toString(); 
    }
    // This if else statment allows when the plant is click on it give a game over score
    else if (this == currPlantTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;

    }
}