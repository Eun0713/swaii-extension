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

  chatgptNewChat: () => {
    const newChatLink = [...document.querySelectorAll("a")].find((element) =>
      element.textContent.includes("새 채팅")
    );
    if (newChatLink) {
      newChatLink.click();
    }
  },
  chatgptScrollTop: () => {
    const element = document.querySelector(
      "#thread > div > div.flex.basis-auto.flex-col.-mb-\\(--composer-overlap-px\\).\\[--composer-overlap-px\\:55px\\].grow.overflow-hidden > div > div"
    );
    if (element) {
      element.scrollTo({ top: 0, behavior: "smooth" });
    }
  },
  chatgptScrollBottom: () => {
    const element = document.querySelector(
      "#thread > div > div.flex.basis-auto.flex-col.-mb-\\(--composer-overlap-px\\).\\[--composer-overlap-px\\:55px\\].grow.overflow-hidden > div > div"
    );
    if (element) {
      element.scrollTo({ top: element.scrollHeight, behavior: "smooth" });
    }
  },

  youtubePauseVideo: () => {
    const video = document.querySelector("video");
    if (video) {
      video.pause();
    }
  },
  youtubePlayVideo: () => {
    const video = document.querySelector("video");
    if (video) {
      video.play();
    }
  },
  youtubeNextVideo: () => {
    const nextButton = document.querySelector(".ytp-next-button");
    if (nextButton) {
      nextButton.click();
    }
  },
  youtubePrevVideo: () => {
    const prevButton = document.querySelector(".ytp-prev-button");
    if (prevButton && prevButton.getAttribute("aria-disabled") !== "true") {
      prevButton.click();
    }
  },
};
