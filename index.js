let boxes = document.querySelectorAll(".BOX");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let mgsContainer = document.querySelector(".msg-container ");
let mgs= document.querySelector("#msg ");



let turnO = true;

let winPattens = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [2, 5, 8],
    [2, 4, 6],
    [1, 4, 7],
    [6, 7, 8],
    [3, 4, 5],

];
const resetGame = () => {
    turnO = true;
    enableBoxes();
    mgsContainer.classList.add("hide");
}



boxes.forEach((BOX) => {
    BOX.addEventListener("click", () => {
        console.log("clicked");
        if (turnO) {
            BOX.innerText = "O";
            turnO = false;
        } else {
            BOX.innerText = "X";
            turnO = true;
        }
        BOX.disabled = true;


        chickWinner();
    });
});
const disableBoxes = () =>{
    for( let BOX of boxes){
        BOX.disabled =true;
    }
}

const enableBoxes = () =>{
    for( let BOX of boxes){
        BOX.disabled =false;
         BOX.innerText = "";
    }
}

const showWinnwe = (win) => {
    msg.innerText = `congratulations, Winner is ${win}`;
    mgsContainer.classList.remove("hide")
    disableBoxes(); 

}

const chickWinner = () => { 
    for (let pattern of winPattens) { 

         let pos1Val = boxes[pattern[0]].innerText;
         let pos2Val = boxes[pattern[1]].innerText;
         let pos3Val = boxes[pattern[2]].innerText;

         
  if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
    if(pos1Val ===pos2Val && pos2Val === pos3Val){
        console.log("win");
        showWinnwe(pos1Val);
    }
  }
    }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

