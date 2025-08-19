import { Mapping } from "@/types/mapping";
import { Store } from "@/types/store";
import gestureMappingStorage from "@/utils/mapping/gestureMappingStorage";
import userMappingStorage from "@/utils/mapping/userMappingStorage";

export const selectMappingStore = async (): Promise<{
  store: Store<Mapping>;
  userEmail?: string;
}> => {
  const { userEmail } = (await chrome.storage.local.get(["userEmail"])) as {
    userEmail?: string;
  };

  const store = userEmail
    ? userMappingStorage(userEmail)
    : gestureMappingStorage;

  return { store, userEmail };
};
