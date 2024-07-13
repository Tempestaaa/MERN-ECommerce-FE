import axios, { AxiosInstance } from "axios";

// const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";
const BASE_URL = "http://localhost:3000" || import.meta.env.VITE_BACKEND_URL;

class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: BASE_URL,
      withCredentials: true,
      timeout: 10 * 1000,
      headers: { "Content-Type": "application/json" },
    });
  }
}

const http = new Http().instance;

// Interceptors
http.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      "access_token"
    )}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
http.interceptors.response.use(
  function (response) {
    if (response && response.data) return response.data;
    return response;
  },
  function (error) {
    if (error?.response?.data) return Promise.reject(error?.response?.data);
    return Promise.reject(error);
  }
);
export default http;
