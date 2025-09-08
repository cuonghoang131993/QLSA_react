import axiosInstance from "./axiosInstance";

export const loginApi = ({
  username,
  password,
}: ReqLogin): Promise<ResLoginApi> => {
  return axiosInstance.post("api/Users/Login", { username, password });
};

export const logoutApi = (): Promise<ResLogoutApi> => {
  return axiosInstance.get("api/Users/Logout");
};

export const currentUserApi = (): Promise<ResCurrentUserApi> => {
  return axiosInstance.get("api/Users/CurrentUser");
};
