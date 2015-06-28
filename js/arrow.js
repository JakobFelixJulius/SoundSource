//function to draw the arrow
function drawArrow(ctx, side, cx, cy){
    //variables
    var h = side * (Math.sqrt(3)/2);
    
    //set the color and linewidth
    ctx.strokeStyle = "#F0D999";
    ctx.lineWidth = 3;
    
    //move to the center of the canvas
    ctx.translate(cx, cy);
  
    //start drawing the arrow
    ctx.beginPath();      
    ctx.moveTo(0, -h);
    ctx.lineTo( -side /2, h /2);
    ctx.lineTo( side/1000, h /4);
    ctx.lineTo(side /2, h /2);
    ctx.lineTo(0, -h);
    ctx.closePath();
    
    //move the center back
    ctx.translate(-cx, -cy);
    
    //add shadow to the arrow
    ctx.shadowColor = 'black';
    ctx.shadowBlur = 5;
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    ctx.stroke();
}

//function to rotate the arrow
function rotateArrow(deg){
    //set variables
    var cvs = document.getElementById('arrow');
    var ctx = cvs.getContext('2d');
    var x = cvs.width /2;
    var y = cvs.height /2;
    
    //save the state of the canvas and clear it, translate to the center and rotate, translate back and draw arrow and restore canvas state back
    ctx.save();
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    ctx.translate(x, y);
    ctx.rotate(deg*Math.PI/180);
    ctx.translate(-x, -y);
    drawArrow(ctx, cvs.width/1.8, cvs.width/2, cvs.height/2);
    ctx.restore();
    
}

//function to draw the currenty rotated arrow
function drawCurrentArrow(deg){
    //variables
    var maxDb = 0;
    var direction = 0;
    
    //go over the circle array where the volumes of each degree/direction are saved, find max value and save the degree/direction
    for (var i = 0; i <= 360; i++){
        if (circleArray[i] > maxDb){
            maxDb = circleArray[i];
            direction = i;
        }
    }
    
    //calculate the current offset of the maxDb direction
    var offset = direction - deg;
    
    //rotate arrow to the offset maxDb direction
    rotateArrow(offset);
}