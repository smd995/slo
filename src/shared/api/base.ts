import type { AxiosInstance, AxiosRequestConfig } from "axios";
import axios from "axios";
import { BASE_API_URL } from "../config/url";

class ApiClient {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: BASE_API_URL,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Request interceptor - 모든 요청에 토큰 추가
    this.instance.interceptors.request.use(
      (config) => {
        const userStore = JSON.parse(
          localStorage.getItem("user-storage") || "{}"
        );
        const token = userStore.state?.token;

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      },
      (error) => Promise.reject(error)
    );

    // api 요청 테스트 후 확인 필요
    this.instance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          localStorage.removeItem("user-storage");
          window.location.href = "/login";
        }

        return Promise.reject(error);
      }
    );
  }

  async get<T>(url: string, config?: AxiosRequestConfig) {
    return this.instance.get<T>(url, config);
  }

  // 데이터 타입 확인 후 타입 체크로 변경
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async post<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.instance.post<T>(url, data, config);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async patch<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.instance.patch<T>(url, data, config);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async put<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.instance.put<T>(url, data, config);
  }

  async delete<T>(url: string, config?: AxiosRequestConfig) {
    return this.instance.delete<T>(url, config);
  }
}

export const api = new ApiClient();
