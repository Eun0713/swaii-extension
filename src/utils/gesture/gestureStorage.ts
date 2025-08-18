import { Gesture } from "@/types/gesture";
import storageArrayStore, { Store } from "@/utils/storageArrayStore";

export const gestureStore: Store<Gesture> = storageArrayStore({
  key: "swaii-gestures",
  getId: (gesture) => `${gesture.name}-${gesture.type}`,
});

export const initDefaultGestures = async (): Promise<void> => {
  try {
    const res = await fetch("/default-gestures.json");
    const defaultGestures = (await res.json()) as Gesture[];

    for (const gesture of defaultGestures) {
      await gestureStore.save(gesture);
    }
  } catch (error) {
    console.error("기본 제스처 불러오기 실패:", error);
  }
};
