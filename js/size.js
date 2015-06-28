function setSize(){
    //get the screenwidth and height
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    //set the proportions if the device is higher than wide or wider than high
    if (screenHeight > screenWidth){
        document.getElementById("arrow").width = (screenHeight-screenWidth)*0.9;
        document.getElementById("arrow").height = (screenHeight-screenWidth)*0.9;
        document.getElementById("circle").width = screenWidth;
        document.getElementById("circle").height = screenWidth;
        document.getElementById("currentCircle").width = screenWidth;
        document.getElementById("currentCircle").height = screenWidth;
        document.getElementById("circleOutline").width = screenWidth;
        document.getElementById("circleOutline").height = screenWidth;
        document.getElementById("meter").width = screenWidth;
        document.getElementById("meter").height = screenWidth;
    }else{
        document.getElementById("arrow").width = (screenHeight-screenHeight*0.75);
        document.getElementById("arrow").height = (screenHeight-screenHeight*0.75);
        document.getElementById("circle").width = screenHeight*0.7;
        document.getElementById("circle").height = screenHeight*0.7;
        document.getElementById("currentCircle").width = screenHeight*0.7;
        document.getElementById("currentCircle").height = screenHeight*0.7;
        document.getElementById("circleOutline").width = screenHeight*0.7;
        document.getElementById("circleOutline").height = screenHeight*0.7;
        document.getElementById("meter").width = screenHeight*0.7;
        document.getElementById("meter").height = screenHeight*0.7;
    }

    //set the overlay logo size to the circle size
    var arrowHeight = document.getElementById("arrow").height;
    var circleWidth = document.getElementById("circle").width;
    document.getElementById("logo").style.width = circleWidth + "px";
    document.getElementById("logo").style.height = "auto";
}