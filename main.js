document.addEventListener("DOMContentLoaded", function() {
    let boxes = document.querySelectorAll(".box");
    let resetbtn = document.querySelector("#reset");
    let turn0 = true;
    let newbtn = document.querySelector("#newgame");
    let msgcont = document.querySelector(".msg");
    let msgwin = document.querySelector("#msgw");

    const win = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8],
    ];

    const resetgame = () => {
        turn0 = true;
        enableboxes();
        msgcont.classList.add("hide");
    };

    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            console.log("Box was clicked");
            if (turn0) {
                box.innerText = 'O';
                turn0 = false;
            } else {
                box.innerText = 'X';
                turn0 = true;
            }
            box.disabled = true;
            checkwinner();
        });
    });

    const disableboxes = () => {
        for (let box of boxes) {
            box.disabled = true;
        }
    };

    const enableboxes = () => {
        for (let box of boxes) {
            box.disabled = false;
            box.innerText = "";
        }
    };

    const showwinner = (winner) => {
        msgwin.innerText = `Congratulations, Winner is ${winner}`;
        msgcont.classList.remove("hide");
        disableboxes();
    };

    const checkwinner = () => {
        for (let pattern of win) {
            let pos1val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3val = boxes[pattern[2]].innerText;

            if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
                if (pos1val === pos2val && pos2val === pos3val) {
                    console.log("winner", pos1val);
                    showwinner(pos1val);
                }
            }
        }
    };

    newbtn.addEventListener("click", resetgame);
    resetbtn.addEventListener("click", resetgame);
});
