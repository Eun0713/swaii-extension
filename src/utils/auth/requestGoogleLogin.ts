const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID as string;
const REDIRECT_URI = chrome.identity.getRedirectURL();

export const requestGoogleLogin = (): Promise<string> => {
  const authUrl =
    `https://accounts.google.com/o/oauth2/auth` +
    `?client_id=${GOOGLE_CLIENT_ID}` +
    `&response_type=token` +
    `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
    `&scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email`;

  return new Promise((resolve, reject) => {
    chrome.identity.launchWebAuthFlow(
      { url: authUrl, interactive: true },
      (redirectUrl?: string) => {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
          return;
        }

        if (!redirectUrl) {
          reject(new Error("redirectUrl is null"));
          return;
        }

        const params = new URLSearchParams(redirectUrl.split("#")[1]);
        const token = params.get("access_token");

        if (token) {
          resolve(token);
        } else {
          reject(new Error("Access token not found"));
        }
      }
    );
  });
};
