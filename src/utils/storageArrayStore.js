const storageArrayStore = ({ key, getId }) => {
  const getAll = () => {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  };

  const hasItem = (target) => {
    return getAll().some((entry) => getId(entry) === getId(target));
  };

  const save = (item) => {
    if (hasItem(item)) {
      return false;
    }

    const all = getAll();
    const newItem = { ...item, createdAt: new Date().toISOString() };
    localStorage.setItem(key, JSON.stringify([...all, newItem]));
    return true;
  };

  const remove = (target) => {
    const updated = getAll().filter((entry) => getId(entry) !== getId(target));
    localStorage.setItem(key, JSON.stringify(updated));
  };

  return { getAll, save, remove, hasItem };
};

export default storageArrayStore;
