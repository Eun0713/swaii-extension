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

  const update = async (original, updated) => {
    const all = await getAll();

    const updatedList = all.map((entry) =>
      getId(entry) === getId(original)
        ? { ...updated, createdAt: entry.createdAt }
        : entry
    );

    await chrome.storage.local.set({ [key]: updatedList });
  };

  return { getAll, hasItem, save, remove, update };
};

export default storageArrayStore;
