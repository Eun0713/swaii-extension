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

  notionNewPage: () => {
    const interval = setInterval(() => {
      const button = document.querySelector('[aria-label="새 페이지"]');
      if (button) {
        button.click();
        clearInterval(interval);
      }
    }, 200);
  },
  notionScrollTop: () => {
    const scrollers = [...document.querySelectorAll("*")].filter(
      (element) => element.scrollTop > 0
    );

    scrollers.forEach((element) => {
      element.scrollTo({ top: 0, behavior: "smooth" });
    });
  },
  notionReload: () => {
    location.reload();
  },
};
