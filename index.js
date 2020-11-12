    var sahrebtn = document.getElementById("share");
    var stopShare = document.getElementById("stopShare");
    var recordbtn = document.getElementById("recordbtn");
    var stoprecordbtn = document.getElementById("stoprecordbtn");
    var videoElement = document.getElementById("videoElement");
    var recordedvideo = document.getElementById("recordedvideo");
    var downloadurl = document.getElementById("downloadurl");

    sahrebtn.addEventListener("click",(evt)=>{
        mediajs(videoElement).startCapture(null);
    });
    stopShare.addEventListener("click",(evt)=>{
        mediajs(videoElement).stopCapture();
    });
    recordbtn.addEventListener("click",(evt)=>{
        mediajs(videoElement).startRecording(videoElement,stoprecordbtn).then(recordedChunks=>{
            mediajs(videoElement).downloadstrem(recordedChunks,downloadurl,recordedvideo)
        });
    })