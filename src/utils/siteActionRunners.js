export const siteActionRunners = {
  googleOpenGmail: () => {
    chrome.runtime.sendMessage({
      type: "openTab",
      url: "https://mail.google.com",
    });
  },
  googleNewTab: () => {
    chrome.runtime.sendMessage({
      type: "openTab",
      url: "https://www.google.com",
    });
  },
};
