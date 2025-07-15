import storageArrayStore from "@/utils/storageArrayStore";

export const gestureStore = storageArrayStore({
  key: "swaii-gestures",
  getId: (gesture) => `${gesture.name}-${gesture.type}`,
});

export const initDefaultGestures = async () => {
  try {
    const res = await fetch("/default-gestures.json");
    const defaultGestures = await res.json();

    defaultGestures.forEach(async (gesture) => {
      await gestureStore.save(gesture);
    });
  } catch (error) {
    console.error("기본 제스처 불러오기 실패:", error);
  }
};
