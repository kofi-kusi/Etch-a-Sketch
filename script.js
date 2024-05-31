// Creating the grid squares inside the container div
const gridContainer = document.querySelector(".container");

function createDivs(num){
    for(let i = 1; i <= num; i++){
        const grid = document.createElement("div");
        grid.className = "grid-square";
        gridContainer.appendChild(grid);
    }
}


createDivs(16);