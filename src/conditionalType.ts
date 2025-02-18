{
  type SuccessResponse = {
    success: true;
    data: string;
  };

  type ErrorResponse = {
    success: false;
    error: string;
  };

  type ApiResponse<T extends boolean> = T extends true
    ? SuccessResponse
    : ErrorResponse;

  const fetchData = <T extends boolean>(isSuccess: T): ApiResponse<T> => {
    if (isSuccess) {
      return {
        success: true,
        data: "Fetched successfully!",
      } as ApiResponse<T>;
    } else {
      return {
        success: false,
        error: "Something went wrong!",
      } as ApiResponse<T>;
    }
  };

  const successResult = fetchData(true);
  console.log(successResult.data);

  const errorResult = fetchData(false);
  console.log(errorResult.error);
}
