import storageArrayStore from "@/utils/storageArrayStore";

const gestureMappingStorage = storageArrayStore({
  key: "swaii-gesture-mappings",
  getId: (mapping) => `${mapping.site}-${mapping.gesture}-${mapping.action}`,
});

export default gestureMappingStorage;
