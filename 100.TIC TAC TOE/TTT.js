let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#resetButton");
let turnO = true;
let newGame = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");
let fill = 0;  // Initialize fill variable

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
        console.log("BOX CLICKED");
        if (turnO) {
            box.innerText = "O";
            box.style.color = "green";  // Correct way to set the color
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.color = "red";  // You can change color for X too if needed
            turnO = true;
        }
        box.disabled = true;
        fill++;  // Increment fill after each valid move
        checkWinner();
    });
});

const disable = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enable = () => {
    fill = 0;  // Reset fill count each time we enable the boxes
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = winner;
    msgContainer.classList.remove("hide");
    disable();
};

const checkWinner = () => {
    let winnerFound = false;  // Flag to check if we have a winner

    // Check for winners
    for (let pattern of winPatterns) {
        let v1 = boxes[pattern[0]].innerText;
        let v2 = boxes[pattern[1]].innerText;
        let v3 = boxes[pattern[2]].innerText;

        if (v1 !== "" && v2 !== "" && v3 !== "") {
            if (v1 === v2 && v2 === v3) {
                console.log("WINNER");
                showWinner(`🎉🎉🎉 Congratulations! ${v1} wins the game!`);
                winnerFound = true;
                return;  // Stop further checking once a winner is found
            }
        }
    }

    // Check for draw if no winner found and all boxes are filled
    if (!winnerFound && fill === 9) {
        console.log("DRAW");
        showWinner("!!Oops , it's a draw!");
    }
};

const resetGame = () => {
    enable();
    turnO = true;
    msgContainer.classList.add("hide");
};

newGame.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);
