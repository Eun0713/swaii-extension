import { Store, Stored, GetId } from "@/types/store";

export default function storageArrayStore<Item>({
  key,
  getId,
}: {
  key: string;
  getId: GetId<Item>;
}): Store<Item> {
  const getAll = async (): Promise<Stored<Item>[]> => {
    const result = await chrome.storage.local.get(key);
    return (result[key] as Stored<Item>[] | undefined) ?? [];
  };

  const hasItem = async (target: Item) => {
    const all = await getAll();
    return all.some((entry) => getId(entry) === getId(target));
  };

  const save = async (item: Item) => {
    const isDuplicateGesture = await hasItem(item);
    if (isDuplicateGesture) {
      return false;
    }

    const all = await getAll();
    const newItem: Stored<Item> = {
      ...item,
      createdAt: new Date().toISOString(),
    };
    const updated = [...all, newItem];
    await chrome.storage.local.set({ [key]: updated });
    return true;
  };

  const remove = async (target: Item) => {
    const all = await getAll();
    const updated = all.filter((entry) => getId(entry) !== getId(target));
    await chrome.storage.local.set({ [key]: updated });
  };

  const update = async (original: Item, updated: Item) => {
    const all = await getAll();
    const updatedList = all.map((entry) =>
      getId(entry) === getId(original)
        ? ({ ...updated, createdAt: entry.createdAt } as Stored<Item>)
        : entry
    );
    await chrome.storage.local.set({ [key]: updatedList });
  };

  const setAll = async (newList: Stored<Item>[]) => {
    await chrome.storage.local.set({ [key]: newList });
  };

  return { getAll, hasItem, save, remove, update, setAll };
}
