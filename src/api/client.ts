import axios, { type AxiosInstance, type AxiosError } from "axios";
import type { ApiError } from "@/types/api.types";

export const apiClient: AxiosInstance = axios.create({
  baseURL: "env.apiUrl",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    config.headers["X-Request-ID"] = crypto.randomUUID();

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError<ApiError>) => {
    if (error.response) {
      const { status, data } = error.response;

      switch (status) {
        case 401:
          localStorage.removeItem("auth_token");
          window.location.href = "/login";
          break;
        case 403:
          console.error("Access forbidden:", data?.message);
          break;
        case 404:
          console.error("Resource not found:", data?.message);
          break;
        case 500:
          console.error("Server error:", data?.message);
          break;
        default:
          console.error("API error:", data?.message);
      }
    } else if (error.request) {
      console.error("No response from server");
    } else {
      console.error("Request configuration error:", error.message);
    }

    return Promise.reject(error);
  }
);

export default apiClient;
