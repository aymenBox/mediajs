# media.js
media.js is a mini javaScript library made for learining purposes that use mediaDevice
API and give you the needed function to speed your development process , clone this project and see for yourself.
![record](RecordedVideo1.gif)

# how to implement 
this library is easy to use just download the media.js file and put it in your html project

and you are good to go

    <script src="media.js"></script>
# functions
you can clone this repository and open the index.html file in your browser to test the 

implementation of the API and see the source code yourself and i will expaline some of the 

# functions :
## mediajs(videoElement).startCapture(displayMediaOption);


    sahrebtn.addEventListener("click",(evt)=>{
        //this function will ask the user permution to capteur the screen 
        mediajs(videoElement).startCapture(null);
    }); 
the startCapture(null) function will ask the user for permution to stream the screen and it takes one paramater wich is the displayMediaOption for exempel you can specifie it like this or you can pass in null in that case it will give you the best that your browser can give
and make sure to call this funtion from a ***EventListener*** otherwise it will result an ***error***.

    var displayMediaOption={
    video = {
        cursor:"always"
    },
    audio = false
};
## mediajs(videoElement).stopCapture();
        stopShare.addEventListener("click",(evt)=>{
        //this function will stop screen capteur
        mediajs(videoElement).stopCapture();
    });
the stopCapture(); method will stop sharing your screen and close the stream

## mediajs(videoElement).startRecording(stoprecordbtn);
this fucntion will start recording the stream from the videoElement and it takes only one paramater the stopbutton that will stop the recording  and this function wil be resolved by the download function witch take a downloadurl as paramater wich will have the link to the stream video as an mp4 video.

        recordbtn.addEventListener("click",(evt)=>{
        //the startRocording function will start recording the data outputed to the videoElement
        //then resolve the result to the downloadstrem function that takes tow peremeter 
        //the recordedChunks resulted from the recording function and a url html element to 
        //download the stream later
        mediajs(videoElement).startRecording(stoprecordbtn).then(recordedChunks=>{
            mediajs(videoElement).downloadstrem(recordedChunks,downloadurl)
        });

