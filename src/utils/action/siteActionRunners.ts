export const siteActionRunners: Record<string, () => void> = {
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
      const button = document.querySelector<HTMLButtonElement>(
        '[aria-label="새 페이지"]'
      );
      if (button) {
        button.click();
        clearInterval(interval);
      }
    }, 200);
  },
  notionScrollTop: () => {
    const scrollers = Array.from(
      document.querySelectorAll<HTMLElement>("*")
    ).filter((element) => element.scrollTop > 0);

    scrollers.forEach((el) => (el.scrollTop = 0));
  },
  notionReload: () => {
    location.reload();
  },

  chatgptNewChat: () => {
    const newChatLink = Array.from(document.querySelectorAll("a")).find(
      (element) => element.textContent?.includes("새 채팅")
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
    const video = document.querySelector<HTMLVideoElement>("video");
    video?.pause();
  },
  youtubePlayVideo: () => {
    const video = document.querySelector<HTMLVideoElement>("video");
    video?.play();
  },
  youtubeNextVideo: () => {
    const nextButton =
      document.querySelector<HTMLButtonElement>(".ytp-next-button");
    nextButton?.click();
  },
  youtubePrevVideo: () => {
    const prevButton =
      document.querySelector<HTMLButtonElement>(".ytp-prev-button");
    if (prevButton && prevButton.getAttribute("aria-disabled") !== "true") {
      prevButton.click();
    }
  },
};
