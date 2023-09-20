const space = 960;
const divContainer = document.querySelector(".container");
const resizeButton = document.querySelector("button.resize");


function resizePrompt(event) {
    let dimension = -1;
    while (dimension <= 0) {
        let userChoice = prompt("Please enter your desired grid dimension");
        let parsedChoice = parseInt(userChoice);
        if (parsedChoice && parsedChoice <= 100) {
            dimension = parsedChoice;
        }
    }

    divContainer.replaceChildren();
    resizeGrid(dimension);
}

function resizeGrid(dimension) {
    for (let i = 0; i < dimension; i++) {
        const div = document.createElement("div");
        for (let j = 0; j < dimension; j++) {
            const square = document.createElement("div");
            square.classList.add("square")
            square.style.width = 960/dimension + "px";
            square.style.height = 960/dimension + "px";
            div.appendChild(square);
        }
        divContainer.appendChild(div);
    }

    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", changeColor);
    });
}

resizeGrid(16);

function changeColor(e) {
    this.classList.add("drawn");
}



resizeButton.addEventListener("click", resizePrompt);

