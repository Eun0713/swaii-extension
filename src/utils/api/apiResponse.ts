const handleApiResponse = async <Data>(response: Response): Promise<Data> => {
  const responseData = await response.json();

  if (!response.ok) {
    const errorMessage =
      (responseData as { message?: string })?.message || "서버 요청 실패";
    throw new Error(errorMessage);
  }

  return (responseData as { data: Data }).data;
};

export default handleApiResponse;
