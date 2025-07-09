const button = document.getElementById("toggle");
const input = document.getElementById("interval");

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const tabId = tabs[0].id;

  chrome.storage.local.get([String(tabId)], (result) => {
    const tabData = result[String(tabId)] || {};
    const isRunning = tabData.running === true;
    if (tabData.interval) input.value = tabData.interval / 1000;
    button.textContent = isRunning ? "Stop" : "Start";
  });

  button.addEventListener("click", () => {
    chrome.storage.local.get([String(tabId)], (result) => {
      const tabData = result[String(tabId)] || {};
      const isRunning = tabData.running === true;

      if (!isRunning) {
        const interval = parseInt(input.value, 10);
        if (isNaN(interval) || interval <= 0) {
          alert("Please enter a valid number greater than 0.");
          return;
        }

        chrome.scripting.executeScript({
          target: { tabId },
          files: ["content.js"]
        }, () => {
          chrome.tabs.sendMessage(tabId, { action: "start", interval: interval * 1000 });
          chrome.storage.local.set({ [String(tabId)]: { running: true, interval: interval * 1000 } });
          button.textContent = "Stop";
        });
      } else {
        chrome.tabs.sendMessage(tabId, { action: "stop" });
        chrome.storage.local.set({ [String(tabId)]: { running: false } });
        button.textContent = "Start";
      }
    });
  });
});