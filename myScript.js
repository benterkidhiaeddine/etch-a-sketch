

//modify this to get change the  default number of pixels used for the sketching board
let numberOfPixels = 16;

//modify the drawing color
let color ="black";

//remember the color when switch to erase
let rememberColor="";
//flag to keep track if we are in drawing mode or not
let drawMode=false;

//select the sketch container 
const sketchContainer = document.getElementById(("sketch-container"));

//define a function for selecting a random value between 0-255
function randomRGB(){
    return Math.floor(Math.random()*255);
}



//def a function that changes the color of each time the mouse moved from a pixel to another one
function rainbow(){
    const cells = document.querySelectorAll(".cell");

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
                e.target.style.backgroundColor=`rgb(${randomRGB()},${randomRGB()},${randomRGB()})`;
            }
        
        })
    }
}
//def function to add the functionality of the drawboard that takes color as a paramater
function functionality(color="black"){
    //add the functionality to the draw board
    //list of cells 
    const cells = document.querySelectorAll(".cell");

    

    sketchContainer.addEventListener("mousedown",function(){
        drawMode=true;
    });
    sketchContainer.addEventListener("mouseup",function(){
        drawMode=false;
    })

    sketchContainer.addEventListener("touchstart",function(){
        drawMode=true;
    });
    sketchContainer.addEventListener("touchend",function(){
        drawMode=false;
    })

    //functionality when holding and moving the mouse button it will draw
    for (element of cells){
        element.addEventListener("mousemove",function(e){
            if (drawMode){
                e.target.style.backgroundColor=`${color}`;
            }
            
        
        });
        element.addEventListener("touchmove",function(e){
            if(drawMode){
                e.target.style.backgroundColor=`${color}`;
            
            }
            
        
        });
        
    }

}

//function for changing the color
function  changeColor(){
    const redInput =document.getElementById("red");
    const greenInput =document.getElementById("green");
    const blueInput =document.getElementById("blue");

    const colorCircle=document.getElementById("color-circle");

    let redValue =redInput.value;
    let greenValue =greenInput.value;
    let blueValue =blueInput.value;
    colorCircle.style.backgroundColor=`rgb(${redValue},${greenValue},${blueValue})`;
    functionality(`rgb(${redValue},${greenValue},${blueValue})`);

}



//make the drawing of the sketch board into a function
function drawSketchBoard(numberOfPixels,color){
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
    functionality(color);



    }

//draw the default sketchBoard with default numberOfPixels and default color
drawSketchBoard(numberOfPixels,color);



//button for choosing number of pixels
const pixelNumberButton=document.getElementById("pixelNumber");
pixelNumberButton.addEventListener("click",function(){
    const pixelInput =document.getElementById("pixelInput");
    numberOfPixels = pixelInput.value;
    
    drawSketchBoard(numberOfPixels,color);
   
})


//button for erasing 

const erase =document.getElementById("eraser");
erase.addEventListener("click",function(){
    
    functionality("white")});

//button for reseting the board

const reset =document.getElementById("reset");
reset.addEventListener("click",()=>drawSketchBoard(numberOfPixels,color));

//button for switching to draw mode
const draw = document.getElementById("draw");
draw.addEventListener("click",()=>changeColor());


//button for rainbow mode
const rainbowButton=document.getElementById("rainbow");
rainbowButton.addEventListener("click",()=>rainbow());
    

//button for changing the color

const colorButton = document.getElementById("colorChange");
colorButton.addEventListener("click",()=>changeColor());
