let video = null; 
document.getElementById("activatePiPBtn").addEventListener("click", async function(){
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.tabs.sendMessage(tab.id, {operation: "pip"}, async function(response){
         console.log("Successful");
    })

});

document.getElementById("volumeControl").addEventListener("input", async function(event) {
    const volumeValue = event.target.value;
    const [tab] =  await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.tabs.sendMessage(tab.id, {operation: "volume", volume:volumeValue}, async function(response){
        console.log("Successful");
    })
});

