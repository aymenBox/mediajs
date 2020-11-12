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
/**this function will stop the capture from the srcObject  */
     self.stopCapture=function(evt){
        let trak = stremObj.srcObject.getTracks();
        trak.forEach(trak => {
            trak.stop()
        });
        stremObj.srcObject=null;
    }
/**this funtion will rercord the strem from the srtremObj.scrObject then 
 * and create a new MediaRecorder and a data array wich wlill be passed later 
 * to a Blob (binary large object) to create the finale video
 */
    self.startRecording = function(stopRecord){
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
/**this function will create the blob vased on the recorded from the recording function
 */
    self.downloadstrem = function (recordedChunks,download){
        let recordedBlob = new Blob(recordedChunks, { type: "video/mp4" });
        download.href = URL.createObjectURL(recordedBlob);
        download.download = "RecordedVideo.mp4"; 
    }
    return self;
}