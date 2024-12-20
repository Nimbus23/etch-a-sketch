const container = document.querySelector(".container");
const btn = document.querySelector("button");

let numberOfSquares = 10;

function setNumberOfSquares(){
    numberOfSquares = prompt("Enter the number of squares per side for the new grid", "");

    if(numberOfSquares < 1 || numberOfSquares === null){
        numberOfSquares = 16;
    }
}

btn.addEventListener("click", () => {
    setNumberOfSquares();
    let allGridWrappers = document.querySelectorAll(".gridWrapper");
    allGridWrappers.forEach(element => {
        container.removeChild(element);
    });
    makeDiv(numberOfSquares);
});

function makeDiv(numberOfSquares){
    for(let i = 0; i < numberOfSquares; i++){
        const gridWrapper = document.createElement("div");
        gridWrapper.setAttribute("class", "gridWrapper");
        for(let i = 0; i < numberOfSquares; i++){
            const gridItem = document.createElement("div");
            gridItem.setAttribute("class", "gridItem");
            gridWrapper.appendChild(gridItem);
            container.appendChild(gridWrapper);
            gridItem.addEventListener("mouseenter", () => { gridItem.setAttribute("style", "background-color: #B28474;"); });
        }
    }
}

makeDiv(numberOfSquares);