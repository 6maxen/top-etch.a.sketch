
function createGrid(column, row, squareSize) {
    if (column > 99) {
        column = 99;
    }
    if (row > 99) {
        row = 99;
    }
    if (squareSize > 99) {
        squareSize = 99;
    }
    let container = document.querySelector("#container");
    container.innerHTML = "";
    container.style.width = `${column * squareSize}px`

    for (let i=0; i<column; i++) {
        for (let j=0; j<row; j++) {
            let square = document.createElement("div");
            square.classList.add("square")
            square.style.height = `${squareSize}px`
            square.style.width = `${squareSize}px`
            container.appendChild(square);

            // hover effect
            square.addEventListener('mouseenter', () => {
                square.style.backgroundColor = 'black';
            });
            
        }
    }
}

createGrid(16,16,30)

columnInput = document.querySelector("#columnInput");
rowInput = document.querySelector("#rowInput");
sizeInput = document.querySelector("#sizeInput");

let columnValue = 16
let rowValue = 16
let sizeValue = 30

resetButton = document.querySelector("#resetButton");
applyButton = document.querySelector("#applyButton");
clearButton = document.querySelector("#clearButton");


resetButton.addEventListener("click", () => {
    clickmeImage.src = "icons/icon-clickme.png";
    columnInput.value = 16;
    rowInput.value = 16;
    sizeInput.value = 30;
    columnValue = Number(columnInput.value);
    rowValue = Number(rowInput.value);
    sizeValue = Number(sizeInput.value);
    createGrid(columnValue, rowValue, sizeValue);
    if (lightmodeImage.src.includes("icons/icon-darkmode.png")) {
        lightmodeImage.src = "icons/icon-lightmode.png";
        document.body.style.backgroundColor = "rgb(13, 27, 39)";//
        document.body.style.color = "white";
    }
})


applyButton.addEventListener("click", () => {
    columnValue = Number(columnInput.value);
    rowValue = Number(rowInput.value);
    sizeValue = Number(sizeInput.value);
    createGrid(columnValue, rowValue, sizeValue)
})

clearButton.addEventListener("click", () => {
    createGrid(columnValue, rowValue, sizeValue)
})

lightmodeButton = document.querySelector("#lightmodeButton");
lightmodeImage = document.querySelector("#lightmodeImage");
clickmeImage = document.querySelector("#clickmeImage")

container = document.querySelector("#container")

lightmodeButton.addEventListener("click", () => {
    clickmeImage.src = "";
    // darkmode to lightmode
    if (lightmodeImage.src.includes("icons/icon-lightmode.png")) {
        lightmodeImage.src = "icons/icon-darkmode.png";
        document.body.style.backgroundColor = "rgba(236, 238, 240, 1)";
        document.body.style.color = "black";
        container.style.borderColor = "rgba(236, 238, 240, 1)";

    // lightmode to darkmode
    } else {
        lightmodeImage.src = "icons/icon-lightmode.png";
        document.body.style.backgroundColor = "rgb(13, 27, 39)";//
        document.body.style.color = "white";
        container.style.borderColor = "rgba(0, 0, 0, 1)";

    }
})

