const handleApiResponse = async (response) => {
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message || "서버 요청 실패");
  }

  return responseData.data;
};

export default handleApiResponse;
