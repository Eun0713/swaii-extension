import { API_BASE_URL } from "@/constants/api";
import { requestGoogleLogin } from "@/utils/auth/requestGoogleLogin";
import createUserGestureStore from "@/utils/gesture/userGestureStorage";

export const loginAndLoadUserGestures = async () => {
  const token = await requestGoogleLogin();

  const res = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
    headers: { Authorization: `Bearer ${token}` },
  });

  const userInfo = await res.json();
  const userEmail = userInfo.email;

  const response = await fetch(`${API_BASE_URL}/gestures?email=${userEmail}`);
  const { data: gestureList, message: serverMessage } = await response.json();

  if (!response.ok) {
    throw new Error(serverMessage);
  }

  const userGestureStore = createUserGestureStore(userEmail);

  for (const gesture of gestureList) {
    await userGestureStore.save(gesture);
  }

  chrome.storage.local.set({ userEmail: userEmail });

  return { userEmail };
};
