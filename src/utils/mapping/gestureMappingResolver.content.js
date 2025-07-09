const storageArrayStore = ({ key, getId }) => {
  const getAll = async () => {
    const result = await chrome.storage.local.get(key);
    return result[key] ? result[key] : [];
  };

  const hasItem = async (target) => {
    const all = await getAll();
    return all.some((entry) => getId(entry) === getId(target));
  };

  const save = async (item) => {
    const isDuplicateGesture = await hasItem(item);
    if (isDuplicateGesture) {
      return false;
    }

    const all = await getAll();
    const newItem = { ...item, createdAt: new Date().toISOString() };
    const updated = [...all, newItem];
    await chrome.storage.local.set({ [key]: updated });
    return true;
  };

  const remove = async (target) => {
    const all = await getAll();
    const updated = all.filter((entry) => getId(entry) !== getId(target));
    await chrome.storage.local.set({ [key]: updated });
  };

  return { getAll, hasItem, save, remove };
};

const gestureMappingStorage = storageArrayStore({
  key: "swaii-gesture-mappings",
  getId: (mapping) => `${mapping.site}-${mapping.gesture}-${mapping.action}`,
});

export const getMatchedMapping = async (matchedGestureName) => {
  const currentHost = window.location.hostname
    .replace(/^www\./, "")
    .toLowerCase();

  const mappings = await gestureMappingStorage.getAll();

  for (const mapping of mappings) {
    const isGestureMatch = mapping.gesture === matchedGestureName;
    const normalizedSite = mapping.site.replace(/^www\./, "").toLowerCase();
    const isSiteMatch = currentHost === normalizedSite;

    if (isGestureMatch && isSiteMatch) {
      return mapping;
    }
  }

  return null;
};
