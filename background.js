chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    chrome.storage.local.get([String(tabId)], (result) => {
      const tabData = result[String(tabId)];
      if (tabData && tabData.running && tabData.interval) {
        chrome.scripting.executeScript({
          target: { tabId },
          files: ["content.js"]
        }, () => {
          chrome.tabs.sendMessage(tabId, { action: "start", interval: tabData.interval });
        });
      }
    });
  }
});