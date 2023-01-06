

//modify this to get change the number of pixels used for the sketching board
const rows = 16;
const columns = 16;

//select the sketch container 

const sketchContainer = document.getElementById(("sketch-container"));
//create a loop to add divs that represent rows
for (let i=0;i<rows;i++){
    //create a  row div
    const row=document.createElement("div");
    //add a class row to the div so it can be styled
    row.classList.add("row");
    //create a loop to add  16 cells for each row
    for(let i=0;i<columns;i++){
        //create a cell div
        const cell =document.createElement("div");
        //add a cell class to the div so it can be styled
        cell.classList.add("cell");
        //add the cell to the row div
        row.appendChild(cell);
    }
    //add the element to the sketch container
    sketchContainer.appendChild(row);
}

//list of cells 
const cells = document.querySelectorAll(".cell");

//change color when clicking the cell to draw
for (element of cells){
    element.addEventListener("click",function(e){
        e.target.style.backgroundColor="black";
    })
}

