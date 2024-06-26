const gridContainer = document.querySelector(".container");

// create hover effect on mouseover col divs
function hoverEffect(){
    const colDivs = document.querySelectorAll(".col");
    colDivs.forEach(col => {
    col.addEventListener("mouseover", () => {
        col.style.backgroundColor = "black";
    });
});
}

// Creating the grid squares inside the container div
function createGrid(num=16){
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
createGrid();
const sizeBtn = document.querySelector(".size");
    sizeBtn.addEventListener("click", () => {
    let size = prompt("Choose a grid dimension from 1 - 100:");
    if (size > 100 || size < 1){
        alert("Invalid input!");
    }else{
    const oldRow = document.querySelectorAll(".row");
    oldRow.forEach(row => {
        gridContainer.removeChild(row);
    })
    createGrid(size);
    }

    hoverEffect();
});  


hoverEffect();

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const colorBtn = document.querySelector(".rainbow");

  colorBtn.addEventListener("click", function(){
    const colDivs = document.querySelectorAll(".col");
    colDivs.forEach(col => {
    col.addEventListener("mouseover", () => {
        col.style.backgroundColor = getRandomColor();
    });
  })
});
