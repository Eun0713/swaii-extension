import { getUserGestures } from "@/services/gestureService";
import { getUserMappings } from "@/services/mappingService";
import { requestGoogleLogin } from "@/utils/auth/requestGoogleLogin";
import createUserGestureStore from "@/utils/gesture/userGestureStorage";
import userMappingStorage from "@/utils/mapping/userMappingStorage";

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

  const mappingList = await getUserMappings(userEmail);
  const userMappingStore = userMappingStorage(userEmail);

  for (const mapping of mappingList) {
    await userMappingStore.save(mapping);
  }

  chrome.storage.local.set({ userEmail: userEmail });

  return { userEmail };
};
