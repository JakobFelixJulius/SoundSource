//set the global db variable
var db = 0;

//function to draw the db meter
function drawMeter(){
    //get the average volume through the analyserNode and a Uint8Array
    var array =  new Uint8Array(analyserNode.frequencyBinCount);
    analyserNode.getByteFrequencyData(array);
    var average = getAverageVolume(array);
    //round off the average
    average = Math.round(average);
    
    //draw the volume
    drawMeterText(average);
    
    //set the db variable
    db = average;
}  

//function to get the average volume
function getAverageVolume(array) {
    //variables
    var values = 0;
    var average;
    var length = array.length;
    
    //go over the array and add all values
    for (var i = 0; i < length; i++) {
        values += array[i];
    }

    //divide by the length of the array
    average = values / length;
    
    //return the average
    return average;
}

//function to draw the db meter
function drawMeterText(currentDb){
    //variables
    var meterCvs = document.getElementById('meter');
    var meterCtx = meterCvs.getContext('2d');
    var x = meterCvs.width / 2;
    var y = meterCvs.height / 2;
    
    //clear canvas, set style for the text, draw the db and set the shadow
    meterCtx.clearRect(0, 0, meterCvs.width, meterCvs.height);
    meterCtx.font="30px Futura";
    meterCtx.fillStyle = "#F44336";
    meterCtx.textAlign = 'center';
    meterCtx.textBaseline = "middle"
    meterCtx.fillText(currentDb + " dB", x, y);
    meterCtx.shadowColor = 'black';
    meterCtx.shadowBlur = 5;
    meterCtx.shadowOffsetX = 3;
    meterCtx.shadowOffsetY = 3;
    meterCtx.stroke();
}