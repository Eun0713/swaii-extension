const STORAGE_KEY = "swaii-gestures";

export const getGestures = () => {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
};

export const isDuplicateGesture = (name, type) => {
  return getGestures().some(
    (gesture) => gesture.name === name && gesture.type === type
  );
};

export const saveGesture = ({ name, type, points }) => {
  if (isDuplicateGesture(name, type)) {
    return;
  }

  const gestures = getGestures();
  const newGesture = {
    name,
    type,
    points,
    createdAt: new Date().toISOString(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify([...gestures, newGesture]));
};

export const deleteGesture = (name, type = "custom") => {
  const gestures = getGestures();
  const updated = gestures.filter(
    (gesture) => !(gesture.name === name && gesture.type === type)
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

export const initDefaultGestures = async () => {
  try {
    const res = await fetch("/default-gestures.json");
    const defaultGestures = await res.json();

    defaultGestures.forEach((gesture) => {
      if (!isDuplicateGesture(gesture.name, gesture.type)) {
        saveGesture(gesture);
      }
    });
  } catch (error) {
    console.error("기본 제스처 불러오기 실패:", error);
  }
};
