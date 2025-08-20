import { getUserGestures } from "@/services/gestureService";
import { getUserMappings } from "@/services/mappingService";
import { Gesture } from "@/types/gesture";
import { Mapping } from "@/types/mapping";
import { requestGoogleLogin } from "@/utils/auth/requestGoogleLogin";
import createUserGestureStore from "@/utils/gesture/userGestureStorage";
import userMappingStorage from "@/utils/mapping/userMappingStorage";

interface GoogleUserInfo {
  email: string;
}

export const initializeUserSession = async (): Promise<{
  userEmail: string;
}> => {
  const token = await requestGoogleLogin();

  const res = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
    headers: { Authorization: `Bearer ${token}` },
  });

  const userInfo: GoogleUserInfo = await res.json();
  const userEmail: string = userInfo.email;

  const gestureList: Gesture[] = await getUserGestures(userEmail);
  const userGestureStore = createUserGestureStore(userEmail);

  for (const gesture of gestureList) {
    await userGestureStore.save(gesture);
  }

  const mappingList: Mapping[] = await getUserMappings(userEmail);
  const userMappingStore = userMappingStorage(userEmail);

  for (const mapping of mappingList) {
    await userMappingStore.save(mapping);
  }

  await chrome.storage.local.set({ userEmail });

  return { userEmail };
};
