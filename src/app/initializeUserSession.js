import { getUserGestures } from "@/services/gestureService";
import { requestGoogleLogin } from "@/utils/auth/requestGoogleLogin";
import createUserGestureStore from "@/utils/gesture/userGestureStorage";

export const initializeUserSession = async () => {
  const token = await requestGoogleLogin();

  const res = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
    headers: { Authorization: `Bearer ${token}` },
  });

  const userInfo = await res.json();
  const userEmail = userInfo.email;

  const gestureList = await getUserGestures(userEmail);

  const userGestureStore = createUserGestureStore(userEmail);

  for (const gesture of gestureList) {
    await userGestureStore.save(gesture);
  }

  chrome.storage.local.set({ userEmail: userEmail });

  return { userEmail };
};
