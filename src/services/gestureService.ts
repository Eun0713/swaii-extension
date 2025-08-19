import { API_BASE_URL } from "@/constants/api";
import type { Gesture } from "@/types/gesture";
import handleApiResponse from "@/utils/api/apiResponse";

export const getUserGestures = async (email: string): Promise<Gesture[]> => {
  const response = await fetch(`${API_BASE_URL}/gestures?email=${email}`);
  return await handleApiResponse<Gesture[]>(response);
};

export const saveUserGesture = async (
  email: string,
  gesture: Gesture
): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/gestures`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, gesture }),
  });

  await handleApiResponse<void>(response);
};

export const deleteUserGesture = async (
  email: string,
  gestureName: string
): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/gestures`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, gestureName }),
  });

  await handleApiResponse<void>(response);
};
