interface OpenTabMessage {
  type: "openTab";
  url?: string;
}

type ExtensionMessage = OpenTabMessage;

interface ResponseMessage {
  success: boolean;
  error?: string;
}

chrome.runtime.onMessage.addListener(
  (
    message: ExtensionMessage,
    _sender: chrome.runtime.MessageSender,
    sendResponse: (response: ResponseMessage) => void
  ): true => {
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
  }
);
