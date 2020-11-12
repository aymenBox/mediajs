    var sahrebtn = document.getElementById("share");
    var stopShare = document.getElementById("stopShare");
    var videoElement = document.getElementById("videoElement");
    sahrebtn.addEventListener("click",(evt)=>{
        mediajs(videoElement).startCapture(null);
    });
    stopShare.addEventListener("click",(evt)=>{
        mediajs(videoElement).stopCapture();
    });