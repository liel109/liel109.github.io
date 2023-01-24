//constants
const NOT_SELECTED_COLOR = "rgb(159,159,159)";
const SELECTED_COLOR = "rgb(194,194,194)";
const SELECTED_SHADOW = "-1px -0.5px";
const NOT_SELECTED_SHADOW = "1px 1px";

//variables declaration
var canvas = document.querySelector('#board');
var ctx = canvas.getContext("2d");
var color = document.getElementById('color-picker');
let pen = document.getElementById('pen');
let eraser = document.getElementById('eraser');

//setting canvas size
canvas.height = window.innerHeight - 100;
canvas.width = window.innerWidth - 100;

//initializing draw function
let drawing = false;
ctx.strokeStyle = color.value;

//on mouse pressed
function startPosition(e) {
  drawing = true;
  draw(e)
}

//on mouse released
function endPosition() {
  drawing = false;
  ctx.beginPath();
}

//event listeners
canvas.addEventListener('mousedown',startPosition);
canvas.addEventListener('mouseup',endPosition);
canvas.addEventListener('mousemove',draw);
window.addEventListener('resize', ()=>{
  canvas.height = window.innerHeight - 100;
  canvas.width = window.innerWidth - 100;
})
  
//draw function
function draw(e){
  if(drawing){
    ctx.lineWidth=10;
    ctx.lineCap = "round";
  
    ctx.lineTo(e.clientX-canvas.offsetLeft,e.clientY-canvas.offsetTop);
    ctx.stroke();
  }
}

//switching between tools
function choose(id) {

  if(id=="pen") {
    ctx.strokeStyle = color.value;
    pen.style.boxShadow = SELECTED_SHADOW;
    pen.style.backgroundColor = SELECTED_COLOR;
    eraser.style.boxShadow = NOT_SELECTED_SHADOW;
    eraser.style.backgroundColor = NOT_SELECTED_COLOR;
  }

  else if(id=="eraser") {
    ctx.strokeStyle = "white"
    eraser.style.boxShadow = SELECTED_SHADOW;
    eraser.style.backgroundColor = SELECTED_COLOR;
    pen.style.boxShadow = NOT_SELECTED_SHADOW;
    pen.style.backgroundColor = NOT_SELECTED_COLOR;
  }
}

//change drawing color
function changeColor(){
  ctx.strokeStyle = document.getElementById('color-picker').value;
}
