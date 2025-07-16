import { API_BASE_URL } from "@/constants/api";
import handleApiResponse from "@/utils/api/apiResponse";

export const getUserMappings = async (email) => {
  const response = await fetch(`${API_BASE_URL}/mappings?email=${email}`);
  return await handleApiResponse(response);
};

export const saveUserMapping = async (email, mapping) => {
  const response = await fetch(`${API_BASE_URL}/mappings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, ...mapping }),
  });

  await handleApiResponse(response);
};

export const deleteUserMapping = async (email, mapping) => {
  const response = await fetch(`${API_BASE_URL}/mappings`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, ...mapping }),
  });

  await handleApiResponse(response);
};

export const updateUserMapping = async (email, original, updated) => {
  const response = await fetch(`${API_BASE_URL}/mappings`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      site: original.site,
      gesture: original.gesture,
      action: original.action,
      updated,
    }),
  });

  await handleApiResponse(response);
};
