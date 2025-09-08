import axiosInstance from "./axiosInstance";

export const getPermissionsApi = (): Promise<ResPermissionsApi> => {
  return axiosInstance.get("api/Permissions");
};

export const currentUserPermissionsApi = (): Promise<ResPermissionsApi> => {
  return axiosInstance.get("api/Permissions/CurrentUser");
};
