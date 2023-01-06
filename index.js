

//modify this to get change the number of pixels used for the sketching board
let numberOfPixels = 16;

//select the sketch container 

const sketchContainer = document.getElementById(("sketch-container"));
//create a loop to add divs that represent rows
for (let i=0;i<numberOfPixels;i++){
    //create a  row div
    const row=document.createElement("div");
    //add a class row to the div so it can be styled
    row.classList.add("row");
    //make the height of the row modifiable according to the number of pixels 
    row.style.height=`calc(100%/${numberOfPixels})`;
    //create a loop to add  16 cells for each row
    for(let i=0;i<numberOfPixels;i++){
        //create a cell div
        const cell =document.createElement("div");
        //add a cell class to the div so it can be styled
        cell.classList.add("cell");
        //make the width of the cell modifiable according to the number of pixels 
        cell.style.width=`calc(100%/${numberOfPixels})`;
        //add the cell to the row div
        row.appendChild(cell);
    }
    //add the element to the sketch container
    sketchContainer.appendChild(row);
}

//list of cells 
const cells = document.querySelectorAll(".cell");

//flag to keep track if we are in drawing mode or not
let drawMode=false;

sketchContainer.addEventListener("mousedown",function(){
    drawMode=true;
});
sketchContainer.addEventListener("mouseup",function(){
    drawMode=false;
})

//functionality when holding and moving the mouse button it will draw
for (element of cells){
    element.addEventListener("mousemove",function(e){
        if (drawMode){
            e.target.style.backgroundColor="black";
        }
    
    })
}

