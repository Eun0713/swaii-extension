import { API_BASE_URL } from "@/constants/api";

export const saveGestureToServer = async (email, gesture) => {
  const response = await fetch(`${API_BASE_URL}/gestures`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, gesture }),
  });

  const { message } = await response.json();

  if (!response.ok) {
    throw new Error(message);
  }
};
