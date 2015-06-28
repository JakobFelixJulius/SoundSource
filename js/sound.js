//------------------------------Global Variables for Audio------------------------------//
var audioCtx = new AudioContext;
var sourceNode;
var analyserNode;
var javascriptNode = audioCtx.createScriptProcessor(sampleSize, 1, 1);
var sampleSize = 1024; //num of samples to collect before analyzing


//show overlay when page is loaded (and microphone is not yet permitted), set the size of the elements and draw the circle outline
el = document.getElementById("overlay");
el.style.visibility = "visible";
setSize();
drawCircleOutline();

//----------------------------Hack to handle vendor prefixes----------------------------//
try {
    window.URL = window.URL || window.webkitURL;
    navigator.getUserMedia = navigator.mozGetUserMedia ||
                             navigator.webkitGetUserMedia ||
                             navigator.getUserMedia;

    window.requestAnimFrame = (function(){
                    return  window.requestAnimationFrame       ||
                            window.webkitRequestAnimationFrame ||
                            window.mozRequestAnimationFrame    ||
                    function(callback, element){window.setTimeout(callback, 1000 / 60);};
                            })();

    window.AudioContext = (function(){return window.AudioContext})();
    
    navigator.getUserMedia({audio: true}, setupAudioNodes, function(e) {});
} catch (e) {
    alert('No web audio support in this browser!');
}

//------------------------------Setting up the Audio Nodes------------------------------//
function setupAudioNodes(stream) {
    sourceNode = audioCtx.createMediaStreamSource(stream);
    analyserNode = audioCtx.createAnalyser();
    analyserNode.smoothingTimeConstant = 0.7;
    analyserNode.fftSize = 1024;
    
    sourceNode.connect(analyserNode);
    analyserNode.connect(javascriptNode);
    javascriptNode.connect(audioCtx.destination);
    
    //hide overlay when microphone is permitted
    $("#overlay").fadeOut(1000,"linear",function(){el.style.visibility = "hidden"});
    
}

//----------------------------Actions for the javascriptNode----------------------------//
javascriptNode.onaudioprocess = function() {
    requestAnimFrame(drawMeter);
}