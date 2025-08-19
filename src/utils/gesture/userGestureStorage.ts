import { Gesture } from "@/types/gesture";
import { Store } from "@/types/store";
import storageArrayStore from "@/utils/storageArrayStore";

const createUserGestureStore = (email: string): Store<Gesture> => {
  if (!email) {
    throw new Error("유저 이메일이 필요합니다.");
  }

  return storageArrayStore({
    key: `gestures_${email}`,
    getId: (gesture) => `${gesture.name}-${gesture.type}`,
  });
};

export default createUserGestureStore;
