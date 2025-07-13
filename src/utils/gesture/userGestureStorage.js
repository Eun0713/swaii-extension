import storageArrayStore from "@/utils/storageArrayStore";

const createUserGestureStore = (email) => {
  if (!email) {
    throw new Error("유저 이메일이 필요합니다.");
  }

  return storageArrayStore({
    key: `gestures_${email}`,
    getId: (gesture) => `${gesture.name}-${gesture.type}`,
  });
};

export default createUserGestureStore;
