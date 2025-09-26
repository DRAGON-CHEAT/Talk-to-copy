function sendSpeechEvent(eventName) {
  chrome.tabs.query({ currentWindow: true }, (tabs) => {
    tabs.forEach(tab => {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (eventName) => window.dispatchEvent(new CustomEvent(eventName)),
        args: [eventName]
      });
    });
  });
}

document.getElementById("startBtn").addEventListener("click", () => {
  sendSpeechEvent("startSpeech");
});

document.getElementById("stopBtn").addEventListener("click", () => {
  sendSpeechEvent("stopSpeech");
});
