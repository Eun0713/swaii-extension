import storageArrayStore from "@/utils/storageArrayStore";

const userMappingStorage = (email) => {
  if (!email) {
    throw new Error("유저 이메일이 필요합니다.");
  }

  return storageArrayStore({
    key: `mappings_${email}`,
    getId: (mapping) => `${mapping.site}-${mapping.gesture}-${mapping.action}`,
  });
};

export default userMappingStorage;
