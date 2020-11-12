    var sahrebtn = document.getElementById("share");
    var stopShare = document.getElementById("stopShare");
    var recordbtn = document.getElementById("recordbtn");
    var stoprecordbtn = document.getElementById("stoprecordbtn");
    var videoElement = document.getElementById("videoElement");
    var downloadurl = document.getElementById("downloadurl");

    sahrebtn.addEventListener("click",(evt)=>{
        //this function will ask the user permution to capteur the screen 
        mediajs(videoElement).startCapture(null);
    });
    stopShare.addEventListener("click",(evt)=>{
        //this function will stop screen capteur
        mediajs(videoElement).stopCapture();
    });
    recordbtn.addEventListener("click",(evt)=>{
        //the startRocording function will start recording the data outputed to the videoElement
        //then resolve the result to the downloadstrem function that takes tow peremeter 
        //the recordedChunks resulted from the recording function and a url html element to 
        //download the stream later
        mediajs(videoElement).startRecording(stoprecordbtn).then(recordedChunks=>{
            mediajs(videoElement).downloadstrem(recordedChunks,downloadurl)
        });
    })