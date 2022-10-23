let turn = "x";
let symbols = [["", "", ""], ["", "", ""], ["", "", ""]];

const board = document.querySelector(".board");
const tiles = Array.from(document.querySelectorAll(".tile"));
const h1 = document.querySelector(".turn");
const resetBtn = document.querySelector('.reset')

board.addEventListener("click", ({ target }) => {
  const classes = Array.from(target.classList);
  if (classes.includes("tile") && classes.length !== 1) return;

  const idx = tiles.indexOf(target);

  target.classList.add(`tile-${turn}`);
  symbols[idx % 3][Math.floor(idx / 3)] = turn;
  turn = turn === "x" ? "o" : "x";

  displayTurn(turn);

  checkWin();
  
});

function displayTurn(turn) {
  // 1. zmień text elementu h1 z klasą "turn" zależnie od tego, czyja jest aktualnie tura
  
  if(turn == "x"){
    h1.innerHTML = "X turn"
  }else{
    h1.innerHTML = "O turn"
  }
}

function checkWin() {
  // 2. sprawdź czy któryś z graczy wygrał pojedynek - jeśli tak wyświetla komunikat (możesz użyć np. funkcji "alert(...)")
  // console.log(symbols[0][0], symbols[1][0], symbols[2][0]);
  // console.log(symbols[0][1], symbols[1][1], symbols[2][1]);
  // console.log(symbols[0][2], symbols[1][2], symbols[2][2]);
  console.log(symbols);
  if(symbols[0][0] == "x" && symbols[0][1] == "x" && symbols[0][2] == "x"){
    alert("X win");
  }else if(symbols[0][0] == "o" && symbols[0][1] == "o" && symbols[0][2] == "o"){
    alert("O win");
  }else if(symbols[1][0] == "x" && symbols[1][1] == "x" && symbols[1][2] == "x"){
    alert("X win");
  }else if(symbols[1][0] == "o" && symbols[1][1] == "o" && symbols[1][2] == "o"){
    alert("O win");
  }else if(symbols[2][0] == "x" && symbols[2][1] == "x" && symbols[2][2] == "x"){
    alert("X win");
  }else if(symbols[2][0] == "o" && symbols[2][1] == "o" && symbols[2][2] == "o"){
    alert("O win");
  }else if(symbols[0][0] == "o" && symbols[1][0] == "o" && symbols[2][0] == "o"){
    alert("O win");
  }else if(symbols[0][0] == "x" && symbols[1][0] == "x" && symbols[2][0] == "x"){
    alert("X win");
  }else if(symbols[0][1] == "o" && symbols[1][1] == "o" && symbols[2][1] == "o"){
    alert("O win");
  }else if(symbols[0][1] == "x" && symbols[1][1] == "x" && symbols[2][1] == "x"){
    alert("X win");
  }else if(symbols[0][2] == "x" && symbols[1][2] == "x" && symbols[2][2] == "x"){
    alert("X win");
  }else if(symbols[0][2] == "o" && symbols[1][2] == "o" && symbols[2][2] == "o"){
    alert("O win");
  }else if(symbols[0][0] == "x" && symbols[1][1] == "x" && symbols[2][2] == "x"){
    alert("X win");
  }else if(symbols[0][0] == "o" && symbols[1][1] == "o" && symbols[2][2] == "o"){
    alert("O win");
  }else if(symbols[0][2] == "o" && symbols[1][1] == "o" && symbols[2][0] == "o"){
    alert("O win");
  }else if(symbols[0][2] == "x" && symbols[1][1] == "x" && symbols[2][0] == "x"){
    alert("X win");
  }
}


// 3. dodaj listener pod przycisk z napisaem "reset" tak, aby po jego kliknięciu wywołać funkcję reset
function reset() {
  // 4. zresetuj stan gry
  window.location.reload()
}

resetBtn.addEventListener("click", reset)