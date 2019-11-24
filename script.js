
//globals
const container = document.querySelector(".container"); 

//creating panels + populating the grid

function createGrid(inpoot) {
    let panelQty = inpoot * inpoot;
    let gridsize = "1fr ";
    let grid = gridsize.repeat([inpoot]);
    container.style.gridTemplateColumns = grid;
    container.style.gridTemplateRows = grid;

for(var i=1; i <= panelQty; i++) {
const panel = document.createElement('div');
panel.classList.add('sq');
panel.id = (`${i}`);
panel.style.backgroundColor = "white";
panel.style.borderStyle = "solid"
panel.style.borderColor = "black"
panel.style.borderWidth = "1px"
container.appendChild(panel)
}
}

//painting by click (default) function

function paintingByClick () {
const paint = document.querySelectorAll('.sq');

paint.forEach((sq) => {
    

    sq.addEventListener('mouseover', (e) => {
        if(e.buttons === 1 || e.buttons === 3) {
        sq.style.backgroundColor = "black";}
    })
    sq.addEventListener('mousedown', (e) => {
    
        sq.style.backgroundColor = "black";
    })
})}

//paint with click button

const click = document.querySelector(".click")

click.addEventListener("click", (e) => {
    
    paintingByClick();
});


//painting in color function

function paintinginColor () {
    const paint = document.querySelectorAll('.sq');
    
paint.forEach((sq) => {
        
 sq.addEventListener('mouseover', (e) => {
    if(e.buttons === 1 || e.buttons === 3) {
            let randomHex1 = Math.floor(Math.random() * 256)
            let randomHex2 = Math.floor(Math.random() * 256)
            let randomHex3 = Math.floor(Math.random() * 256)
    
         sq.style.backgroundColor = `rgba(${randomHex1},${randomHex2},${randomHex3})`;
              
        
        }
        })
        sq.addEventListener('mousedown', (e) => {
            let randomHex1 = Math.floor(Math.random() * 256)
            let randomHex2 = Math.floor(Math.random() * 256)
            let randomHex3 = Math.floor(Math.random() * 256)

         sq.style.backgroundColor = `rgba(${randomHex1},${randomHex2},${randomHex3})`;
        
        })
    })}

//painting in color button
    const color = document.querySelector(".color")

    color.addEventListener("click", (e) => {
        paintinginColor();
    });

    //painting in shade function 

    function paintinginShade () {
        const paint = document.querySelectorAll('.sq');
        
    paint.forEach((sq) => {
            
     sq.addEventListener('mouseover', (e) => {
        if(e.buttons === 1 || e.buttons === 3) {
                
            
            let eraser = 255;
 
             sq.style.backgroundColor = `rgba(${eraser},${eraser},${eraser})`;
                  
            
            }
            })
            sq.addEventListener('mousedown', (e) => {
                let eraser = 255;
                
    
             sq.style.backgroundColor = `rgba(${eraser},${eraser},${eraser})`;
            
            })
        })}

//painting in shade button
const shade = document.querySelector(".shading")

shade.addEventListener("click", (e) => {
    paintinginShade();
});

//clear all cells function 

function paintingCleanUp () {
    const paint = document.querySelectorAll('.sq');
    
    paint.forEach((sq) => {
    
        sq.style.backgroundColor = "white";
        })
    }

//clear all button 
    const clear = document.querySelector(".clear")

    clear.addEventListener("click", (e) => {
        paintingCleanUp();
    });

    createGrid(16);
    paintingByClick();


    ////////////////////////////

    function deleteBox () {
        const paint = document.querySelectorAll('.sq');
        
        paint.forEach((sq) => {
        
            sq.remove();
            
            })
            let input = prompt("How big would you like the grid? MAX 100!");

            if(input > 100) {
                input = 100;
            }

            createGrid(input)
            paintingByClick();
        }



const clearout = document.querySelector(".newgrid")

clearout.addEventListener("click", (e) => {
    deleteBox();
});






