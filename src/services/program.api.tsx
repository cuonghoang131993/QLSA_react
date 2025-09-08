import axiosInstance from "./axiosInstance";

export const getProgramsApi = ({
  keyword,
  page,
  size,
}: PagingReq): Promise<ResProgramApi> => {
  return axiosInstance.get("api/Programs", {
    params: {
      keyword,
      page,
      size,
    },
  });
};
