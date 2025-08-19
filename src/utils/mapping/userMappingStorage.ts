import { Mapping } from "@/types/mapping";
import { Store } from "@/types/store";
import storageArrayStore from "@/utils/storageArrayStore";

const userMappingStorage = (email: string): Store<Mapping> => {
  if (!email) {
    throw new Error("유저 이메일이 필요합니다.");
  }

  return storageArrayStore<Mapping>({
    key: `mappings_${email}`,
    getId: (mapping) => `${mapping.site}-${mapping.gesture}-${mapping.action}`,
  });
};

export default userMappingStorage;
