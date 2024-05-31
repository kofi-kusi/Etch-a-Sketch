// Creating the grid squares inside the container div
const gridContainer = document.querySelector(".container");

function createDiv(num){
    for (let i=1; i <= num; i++){
        const rowDiv = document.createElement("div");
        rowDiv.className = "row";
        gridContainer.appendChild(rowDiv);
    }
    for (let i=1; i <= num; i++){
        const rowList = document.querySelectorAll(".row")
        const getRows = Array.from(rowList);
        getRows.forEach(row => {
            const colDiv = document.createElement("div");
            colDiv.className = "col";
            row.appendChild(colDiv);
        });
    }   
}
createDiv(16);