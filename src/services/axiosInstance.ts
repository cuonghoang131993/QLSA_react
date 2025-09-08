import axios from "axios";

axios.defaults.withCredentials = true; // Global setting for all Axios requests

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 30000,
  withCredentials: true,
  headers: {
    accept: "*/*",
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized access. Redirecting to login...");
      // window.location.href = `${PATH.LOGIN}?returnUrl=${window.location.pathname}`;
    }

    if (process.env.NODE_ENV !== "production") {
      return Promise.reject(error);
    }

    return Promise.reject("Something went wrong!");
  }
);

export default axiosInstance;
