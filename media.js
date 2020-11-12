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
    return self;
}