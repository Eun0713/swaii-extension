import { API_BASE_URL } from "@/constants/api";

const handleApiResponse = async (response) => {
  const responseData = await response.json();
  if (!response.ok) {
    throw new Error(responseData.message || "서버 요청 실패");
  }
  return responseData.data;
};

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
