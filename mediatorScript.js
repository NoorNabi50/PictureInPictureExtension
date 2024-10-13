let video = document.querySelector('video');


chrome.runtime.onMessage.addListener(
   async  function (request, sender, response) {

        if (!video) {
           // sendResponse({ status: 200, message: "Video is not attached" });
            return true;
        }

        let responseString = "Success";
        if (request.operation === "pip") {
            try {
                if (document.pictureInPictureElement) {
                    document.exitPictureInPicture();
                    responseString = "Exited Picture-in-Picture mode.";
                }
                else {
                    video.requestPictureInPicture()
                    responseString = "Entered Picture-in-Picture mode.";
                }
            }
            catch (error) {
                responseString = "Error: " + error.message;
            }
        }

        else if (request.operation = "volume") {
            video.volume = request.volume;
            responseString = `Volume set to ${request.volume}.`;
        }

        //sendResponse({ status: 200, message: responseString });
        return true;
    }
);