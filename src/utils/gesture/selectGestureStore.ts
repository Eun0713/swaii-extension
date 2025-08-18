import { Gesture } from "@/types/gesture";
import { gestureStore } from "@/utils/gesture/gestureStorage";
import createUserGestureStore from "@/utils/gesture/userGestureStorage";
import { Store } from "@/utils/storageArrayStore";

type StorageData = { userEmail?: string };

const getGestureStore = async (): Promise<{
  store: Store<Gesture>;
  userEmail?: string;
}> => {
  const { userEmail } = (await chrome.storage.local.get([
    "userEmail",
  ])) as StorageData;
  const store = userEmail ? createUserGestureStore(userEmail) : gestureStore;
  return { store, userEmail };
};

export default getGestureStore;
