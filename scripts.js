
function createGrid(column, row, squareSize) {
    let container = document.querySelector("#container");
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

createGrid(16, 16, 30)

