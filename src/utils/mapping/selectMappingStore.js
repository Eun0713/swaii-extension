import gestureMappingStorage from "@/utils/mapping/gestureMappingStorage";
import userMappingStorage from "@/utils/mapping/userMappingStorage";

const selectMappingStore = async () => {
  const { userEmail } = await chrome.storage.local.get(["userEmail"]);
  const store = userEmail
    ? userMappingStorage(userEmail)
    : gestureMappingStorage;

  return { store, userEmail };
};

export default selectMappingStore;
