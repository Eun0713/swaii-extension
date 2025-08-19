import { API_BASE_URL } from "@/constants/api";
import type { Mapping } from "@/types/mapping";
import handleApiResponse from "@/utils/api/apiResponse";

export const getUserMappings = async (email: string): Promise<Mapping[]> => {
  const response = await fetch(`${API_BASE_URL}/mappings?email=${email}`);
  return await handleApiResponse<Mapping[]>(response);
};

export const saveUserMapping = async (
  email: string,
  mapping: Mapping
): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/mappings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, ...mapping }),
  });

  await handleApiResponse<void>(response);
};

export const deleteUserMapping = async (
  email: string,
  mapping: Mapping
): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/mappings`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, ...mapping }),
  });

  await handleApiResponse<void>(response);
};

export const updateUserMapping = async (
  email: string,
  original: Mapping,
  updated: Mapping
): Promise<void> => {
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

  await handleApiResponse<void>(response);
};
