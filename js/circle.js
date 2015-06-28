//global variables
var currentCircleCvs = document.getElementById("currentCircle");
var currentCirlceCtx = currentCircleCvs.getContext("2d");
var circleCvs = document.getElementById("circle");
var cirlceCtx = circleCvs.getContext("2d");
var circleArray = [];
    
//function to draw the cicle (little colored piecharts)
function drawCirlce(color){
    //variables
    var x = circleCvs.width / 2;
    var y = circleCvs.height / 2;
    var outerRadius = circleCvs.width * 0.4375;
    var innerRadius = circleCvs.width * 0.325;
    var startDeg = 269 * Math.PI/180;
    var endDeg = 271 * Math.PI/180;
    
    //draw the circle part
    cirlceCtx.beginPath();
    cirlceCtx.arc(x, y, outerRadius, startDeg, endDeg, false); // Outer Circle (counterclockwise)
    cirlceCtx.arc(x, y, innerRadius, endDeg, startDeg, true); // Inner Circle (clockwise)
    cirlceCtx.closePath();
    
    //set the color
    cirlceCtx.fillStyle = color;
    cirlceCtx.fill();
}

//function to draw the current circle position display
function drawCurrentCirlce(){
    //variables
    var x = currentCircleCvs.width / 2;
    var y = currentCircleCvs.height / 2;
    var outerRadius = currentCircleCvs.width * 0.4375;
    var innerRadius = currentCircleCvs.width * 0.325;
    var startDeg = 269 * Math.PI/180;
    var endDeg = 271 * Math.PI/180;
    
    //draw the current circle display
    currentCirlceCtx.beginPath();
    currentCirlceCtx.arc(x, y, outerRadius, startDeg, endDeg, false); // Outer Circle (counterclockwise)
    currentCirlceCtx.arc(x, y, innerRadius, endDeg, startDeg, true); // Inner Circle (clockwise)
    currentCirlceCtx.closePath();
    currentCirlceCtx.lineWidth = 3;
    currentCirlceCtx.strokeStyle = "#F0D999";
    currentCirlceCtx.stroke();
}

//function to draw the circle outline
function drawCircleOutline(){
    //variables
    var circleOutlineCvs = document.getElementById("circleOutline");
    var circleOutlineCtx = circleOutlineCvs.getContext("2d");
    var x = circleOutlineCvs.width / 2;
    var y = circleOutlineCvs.height / 2;
    var outerRadius = circleOutlineCvs.width * 0.4375;
    var innerRadius = circleOutlineCvs.width * 0.325;
    
    //set the shadow
    circleOutlineCtx.shadowColor = 'black';
    circleOutlineCtx.shadowBlur = 5;
    circleOutlineCtx.shadowOffsetX = 3;
    circleOutlineCtx.shadowOffsetY = 3;
    
    //set the style
    circleOutlineCtx.strokeStyle = "#F0D999";
    circleOutlineCtx.lineWidth = 5;
    
    //draw outer line
    circleOutlineCtx.beginPath();
    circleOutlineCtx.arc(x,y,outerRadius,0,2*Math.PI);
    circleOutlineCtx.stroke();
    
    //draw inner line
    circleOutlineCtx.beginPath();
    circleOutlineCtx.arc(x,y,innerRadius,0,2*Math.PI);
    circleOutlineCtx.stroke();
}

//function to rotate the circle
function rotateCircle(deg,color){
    //variables
    var x = circleCvs.width / 2;
    var y = circleCvs.height / 2;
    
    //save the state of the canvas, translte to center, rotate, translate back, draw the cirlce part, restore state of canvas
    cirlceCtx.save();
    cirlceCtx.translate(x, y);
    cirlceCtx.rotate(deg*Math.PI/180);
    cirlceCtx.translate(-x, -y);
    drawCirlce(color);
    cirlceCtx.restore();
}

//function to rotate the current Circle display
function rotateCurrentCircle(deg){
    //variables
    var x = currentCircleCvs.width / 2;
    var y = currentCircleCvs.height / 2;
    
    //save the state of the canvas, clear canvas, translte to center, rotate, translate back, draw the cirlce display part, restore state of canvas
    currentCirlceCtx.save();
    currentCirlceCtx.clearRect(0,0, currentCircleCvs.width, currentCircleCvs.height);
    currentCirlceCtx.translate(x, y);
    currentCirlceCtx.rotate(deg*Math.PI/180);
    currentCirlceCtx.translate(-x, -y);
    drawCurrentCirlce();
    currentCirlceCtx.restore();
}


//function to save the circle Array
function saveCircleArray(degree, db){
    //save at the index of the degree the recorded volume
    circleArray[degree] = db;
}