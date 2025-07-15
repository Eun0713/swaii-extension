import { API_BASE_URL } from "@/constants/api";
import handleApiResponse from "@/utils/api/apiResponse";

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

export const deleteUserGesture = async (email, gestureName) => {
  const response = await fetch(`${API_BASE_URL}/gestures`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, gestureName }),
  });

  await handleApiResponse(response);
};
