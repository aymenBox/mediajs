function mediajs(stremObj){
    var self={};
     self.startCapture = async (displayMediaOption) => {
         try {
             //make sure to use the await keyword so that nothing will be displayed untel 
             //the getDisplayMedia function is completly resloved and return the stream media
             if (displayMediaOption==null){
                stremObj.srcObject = await navigator.mediaDevices.getDisplayMedia();
             }
             else{
                stremObj.srcObject = await navigator.mediaDevices.getDisplayMedia(displayMediaOption);
             }
             
         }
         catch (err) {
             console.log(err);
             return null;
         }
     }

     self.stopCapture=function(evt){
        let trak = stremObj.srcObject.getTracks();
        trak.forEach(trak => {
            trak.stop()
        });
        stremObj.srcObject=null;
    }

    self.startRecording = function(stremObj,stopRecord){
        stremObj.srcObject.captureStream = stremObj.srcObject.captureStream || stremObj.srcObject.mozCaptureStream;
        let recorder = new MediaRecorder(stremObj.srcObject);
        let data=[];
        /**creat an event lisgner ondataavailable that 
         * eaisly push data to the data array wich is the blob (binary lare object)
         */
        recorder.ondataavailable = event => data.push(event.data);
        recorder.start();
        let stopped = new Promise((resolve, reject) => {
          recorder.onstop = resolve;
          recorder.onerror = event => reject(event.name);
        });
        stopRecord.addEventListener("click",(evt)=>{
            recorder.stop()
           // return data;
        });
        return Promise.all([
          stopped,
        ])
        .then(() => data);
    }

    self.downloadstrem = function (recordedChunks,download,recordedVideo){
        let recordedBlob = new Blob(recordedChunks, { type: "video/mp4" });
        recordedVideo.src = URL.createObjectURL(recordedBlob);
        download.href = recordedVideo.src;
        download.download = "RecordedVideo.mp4"; 
    }
    return self;
}