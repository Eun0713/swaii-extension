import type { Mapping } from "@/types/mapping";

const storageArrayStore = <T>({
  key,
  getId,
}: {
  key: string;
  getId: (item: T) => string;
}) => {
  const getAll = async (): Promise<T[]> => {
    const result = await chrome.storage.local.get(key);
    return result[key] ? (result[key] as T[]) : [];
  };

  const hasItem = async (target: T): Promise<boolean> => {
    const all = await getAll();
    return all.some((entry) => getId(entry) === getId(target));
  };

  const save = async (item: T): Promise<boolean> => {
    const isDuplicate = await hasItem(item);
    if (isDuplicate) {
      return false;
    }

    const all = await getAll();
    const newItem = { ...item, createdAt: new Date().toISOString() };
    const updated = [...all, newItem];
    await chrome.storage.local.set({ [key]: updated });
    return true;
  };

  const remove = async (target: T): Promise<void> => {
    const all = await getAll();
    const updated = all.filter((entry) => getId(entry) !== getId(target));
    await chrome.storage.local.set({ [key]: updated });
  };

  return { getAll, hasItem, save, remove };
};

const gestureMappingStorage = storageArrayStore<Mapping>({
  key: "swaii-gesture-mappings",
  getId: (mapping) => `${mapping.site}-${mapping.gesture}-${mapping.action}`,
});

const userMappingStorage = (email: string) =>
  storageArrayStore<Mapping>({
    key: `mappings_${email}`,
    getId: (mapping) => `${mapping.site}-${mapping.gesture}-${mapping.action}`,
  });

export const getMatchedMapping = async (
  matchedGestureName: string
): Promise<Mapping | null> => {
  const currentHost = window.location.hostname
    .replace(/^www\./, "")
    .toLowerCase();

  const { userEmail } = (await chrome.storage.local.get("userEmail")) as {
    userEmail?: string;
  };

  const store = userEmail
    ? userMappingStorage(userEmail)
    : gestureMappingStorage;

  const mappings = await store.getAll();

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
