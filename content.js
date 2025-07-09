if (!window.__autoReloaderSetup) {
  window.__autoReloaderSetup = true;
  let autoReloadInterval = null;

  const startReloading = (interval) => {
    if (autoReloadInterval) clearInterval(autoReloadInterval);
    autoReloadInterval = setInterval(() => {
      location.reload();
    }, interval);
  };

  const stopReloading = () => {
    if (autoReloadInterval) {
      clearInterval(autoReloadInterval);
      autoReloadInterval = null;
    }
  };

  chrome.runtime.onMessage.addListener((msg) => {
    if (msg.action === "start") {
      startReloading(msg.interval || 10000);
    } else if (msg.action === "stop") {
      stopReloading();
    }
  });
}