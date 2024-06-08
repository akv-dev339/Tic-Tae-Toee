let boxes = document.querySelectorAll(".box");


let turn0 = true;
let count=0;
const winPatterns = [
   [0, 1, 2],
   [0, 3, 6],
   [0, 4, 8],
   [1, 4, 7],
   [2, 5, 8],
   [2, 4, 6],
   [3, 4, 5],
   [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box clixked");
        count++;
        if(turn0){
            box.innerText = "0";
            turn0=false;
        }
        else{
            box.innerText = "X";  
            turn0=true;
        }
        box.disabled = true;
        // function to check winners
        checkWinner();
        //draw ke liye
        if(count===9){
            gameDraw();
        }

    });
});
const gameDraw = () => {
    msg.innerText = "GAME DRAW!!";
    msgContainer.classList.remove("hide");
}
const showWinner = (winner) => {
    const msg = document.getElementById("msg");
    const msgContainer = document.getElementById("msgContainer");
    if (msg && msgContainer) {
        msg.innerText = `Congratulations, Winner is ${winner}!!`;
        msgContainer.classList.remove("hide");
        disableBoxes();
    } else {
        console.error("msg or msgContainer element not found");
    }
};
const resetGame = () => {
    turn0 = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
  };
const disableBoxes = () => {
    boxes.forEach((box) => {
        box.style.pointerEvents = "none";
    });
}
const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };
const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                return true;
              }
        }
    }
};
newbtn.addEventListener("click", resetGame);
msgbtn.addEventListener("click", resetGame);
