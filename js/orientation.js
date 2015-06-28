//check for mobile device
var mobileDevice = false;
$(document).ready(function() {      
    var isMobile = window.matchMedia("only screen and (max-width: 760px)");
    if (isMobile.matches) {
        mobileDevice = true;
    }
 });

//add orientation eventlistener
window.addEventListener('deviceorientation', handleOrientation);

//function for orientation eventhandling
function handleOrientation(event) {
    //check for mobile device, if mobile get the reversed alpha rotation, else the gamma rotation (since laptops don't have alpha rotation)
    if (mobileDevice == true){
        var rotation = Math.round(-event.alpha);
    }else{
        var rotation = Math.round(event.gamma);
    }
    
    //convert negative degrees/values
    if (rotation < 0){rotation += 360;}
    
    //check the current volume and draw the circle in the corresponding color
    if (db < 10){       rotateCircle(rotation, "#507e50");
    }else if(db < 20){  rotateCircle(rotation, "#e6d055");
    }else if(db < 35){  rotateCircle(rotation, "#fca300");
    }else if(db > 50){  rotateCircle(rotation, "#bc2d2d");}
    
    //save current db and rotation in the circleArray, draw the current arrow, rotate the circle display/currentCircle and check/set the screen size
    saveCircleArray(rotation, db);
    drawCurrentArrow(rotation);
    rotateCurrentCircle(rotation);
}