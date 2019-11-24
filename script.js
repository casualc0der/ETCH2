
//globals
const container = document.querySelector(".container"); 
let input = 32;
let gridsize = "1fr ";
let grid = gridsize.repeat([input]);
let panelQty = input * input;

//initalising the grid
container.style.gridTemplateColumns = grid;
container.style.gridTemplateRows = grid;

//creating panels + populating the grid
for(var i=0; i < panelQty; i++) {
const panel = document.createElement('div');
panel.classList.add('sq');
panel.id = (`${i}`);
panel.style.backgroundColor = "transparent";
panel.style.borderStyle = "solid"
panel.style.borderColor = "black"
panel.style.borderWidth = "1px"
container.appendChild(panel)
}