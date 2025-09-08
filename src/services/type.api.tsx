import axiosInstance from "./axiosInstance";

export const getTypesApi = ({
  keyword,
  page,
  size,
}: PagingReq): Promise<ResTypeApi> => {
  return axiosInstance.get("api/Types", {
    params: {
      keyword,
      page,
      size,
    },
  });
};
