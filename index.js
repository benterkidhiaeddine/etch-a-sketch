

//modify this to get change the  default number of pixels used for the sketching board
let numberOfPixels = 16;

//select the sketch container 
const sketchContainer = document.getElementById(("sketch-container"));


//make the drawing of the sketch board into a function
function drawSketchBoard(numberOfPixels){
    //reset the draw board
    sketchContainer.innerHTML="";
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
    //add the functionality to the draw board
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


    }

//draw the default sketchBoard
drawSketchBoard(numberOfPixels);


//function for validating the input
function validateInput(){
    numberOfPixels = parseInt(prompt("PLeas enter the number of wanted pixels on the sketch board"));
    
    if(isNaN(numberOfPixels)){
        alert("Pleas enter a valid number not greater than 100");
        validateInput();
    }

    if(numberOfPixels>100){
        numberOfPixels = 16;
        alert("The number of pixels was set to 16 pleas refrain from entering a number bigger than 100");
        validateInput();

    }
    else if(numberOfPixels<=0){
        numberOfPixels=16;
        alert("The number of pixels was set to 16 pleas refrain from entering a negative number or zero number");
        validateInput();
    }
    }
//button for choosing number of pixels
const pixelNumberButton=document.getElementById("pixelNumber");
pixelNumberButton.addEventListener("click",function(){
    validateInput();
    
    drawSketchBoard(numberOfPixels);
   
})




