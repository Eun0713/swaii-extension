const MAPPING_KEY = "swaii-gesture-mappings";

export const getMappings = () => {
  const raw = localStorage.getItem(MAPPING_KEY);
  return raw ? JSON.parse(raw) : [];
};

export const saveMapping = ({ site, gesture, action }) => {
  const mappings = getMappings();

  const isDuplicate = mappings.some(
    (mapping) => mapping.site === site && mapping.gesture === gesture
  );

  if (isDuplicate) {
    return false;
  }

  const newMapping = {
    site,
    gesture,
    action,
    createdAt: new Date().toISOString(),
  };

  localStorage.setItem(MAPPING_KEY, JSON.stringify([...mappings, newMapping]));
  return true;
};

export const deleteMapping = ({ site, gesture }) => {
  const mappings = getMappings();
  const updated = mappings.filter(
    (mapping) => !(mapping.site === site && mapping.gesture === gesture)
  );
  localStorage.setItem(MAPPING_KEY, JSON.stringify(updated));
};
