document.getElementById("startBtn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: () => window.dispatchEvent(new CustomEvent("startSpeech"))
    });
  });
});

document.getElementById("stopBtn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: () => window.dispatchEvent(new CustomEvent("stopSpeech"))
    });
  });
});
