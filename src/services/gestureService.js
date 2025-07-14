import { API_BASE_URL } from "@/constants/api";

const handleApiResponse = async (response) => {
  const responseData = await response.json();
  if (!response.ok) {
    throw new Error(responseData.message || "서버 요청 실패");
  }
  return responseData.data;
};

export const getUserGestures = async (email) => {
  const response = await fetch(`${API_BASE_URL}/gestures?email=${email}`);
  return await handleApiResponse(response);
};

export const saveUserGesture = async (email, gesture) => {
  const response = await fetch(`${API_BASE_URL}/gestures`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, gesture }),
  });

  await handleApiResponse(response);
};
