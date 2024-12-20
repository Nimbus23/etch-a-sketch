const container = document.querySelector(".container");
let numberOfSquares = prompt("Enter the number of squares per side for the new grid", "");

function makeDiv(){
    for(let i = 0; i < numberOfSquares; i++){
        const gridWrapper = document.createElement("div");
        for(let i = 0; i < numberOfSquares; i++){
            const gridItem = document.createElement("div");
            gridItem.setAttribute("class", "add");
            gridWrapper.appendChild(gridItem);
            container.appendChild(gridWrapper);
            gridItem.addEventListener("mouseenter", () => { gridItem.setAttribute("style", "background-color: #B28474;") });

        }
    }
}

makeDiv();