chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.type === "openTab") {
    const url = message.url;
    if (url) {
      chrome.tabs.create({ url });
      sendResponse({ success: true });
    } else {
      sendResponse({ success: false, error: "URL이 제공되지 않았습니다." });
    }
  }

  return true;
});
