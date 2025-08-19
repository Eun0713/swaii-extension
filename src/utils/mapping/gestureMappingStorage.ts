import { Mapping } from "@/types/mapping";
import { Store } from "@/types/store";
import storageArrayStore from "@/utils/storageArrayStore";

const gestureMappingStorage: Store<Mapping> = storageArrayStore<Mapping>({
  key: "swaii-gesture-mappings",
  getId: (mapping) => `${mapping.site}-${mapping.gesture}-${mapping.action}`,
});

export default gestureMappingStorage;
