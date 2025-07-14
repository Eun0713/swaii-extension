import { gestureStore } from "@/utils/gesture/gestureStorage";
import createUserGestureStore from "@/utils/gesture/userGestureStorage";

const selectGestureStore = async () => {
  const { userEmail } = await chrome.storage.local.get(["userEmail"]);

  const store = userEmail ? createUserGestureStore(userEmail) : gestureStore;

  return { store, userEmail };
};

export default selectGestureStore;
