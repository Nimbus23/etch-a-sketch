const container = document.querySelector(".container");

function makeDiv(){
    for(let i = 0; i < 17; i++){
        const gridWrapper = document.createElement("div");
        for(let i = 0; i < 17; i++){
            const gridItem = document.createElement("div");
            gridItem.setAttribute("class", "add");
            gridWrapper.appendChild(gridItem);
            container.appendChild(gridWrapper);
        }
    }
}

makeDiv();