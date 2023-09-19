const divContainer = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    const div = document.createElement("div");
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.classList.add("square")
        div.appendChild(square);
    }
    div.classList.add("rows");
    divContainer.appendChild(div);
}

function changeColor(e) {
    this.classList.add("drawn");
}

const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
    square.addEventListener("mouseover", changeColor);
});