

import axios from "axios";

import { useAuthStore } from "@/store/authStore";
import { requestAccessToken } from "@/services/auth.service";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 30000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});




api.interceptors.request.use((config) => {
  console.log("================================");
  console.log("✅ Request interceptor fired");
  console.log("Method:", config.method?.toUpperCase());
  console.log("URL:", config.url);

  const accessToken = useAuthStore.getState().accessToken;

  console.log("Access Token:", accessToken);

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  console.log("Final Headers:", config.headers);
  console.log("================================");

  return config;
});

let isRefreshing = false;

let failedQueue: {
  resolve: (token: string) => void;
  reject: (error: unknown) => void;
}[] = [];

const processQueue = (
  error: unknown,
  token?: string
) => {
  failedQueue.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve(token!);
    }
  });

  failedQueue = [];
};

/**
 * Refresh token automatically when expired
 */
api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      error.response?.data?.error === "TOKEN_EXPIRED" &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      /**
       * If another refresh request is already running,
       * wait until it finishes.
       */
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({
            resolve: (token) => {
              originalRequest.headers.Authorization =
                `Bearer ${token}`;

              resolve(api(originalRequest));
            },
            reject,
          });
        });
      }

      isRefreshing = true;

      try {
        const store =
          useAuthStore.getState();

        const refreshToken =
          store.refreshToken;

        if (!refreshToken) {
          throw new Error(
            "Refresh token not found."
          );
        }

        /**
         * Request a new access token
         */
        const data =
          await requestAccessToken(
            refreshToken
          );

        /**
         * Save new access token
         */
        store.setAccessToken(
          data.accessToken
        );

        /**
         * Some backends rotate refresh tokens.
         * Save it only if returned.
         */
        if (data.refreshToken) {
          store.setRefreshToken(
            data.refreshToken
          );
        }

        processQueue(
          null,
          data.accessToken
        );

        originalRequest.headers.Authorization =
          `Bearer ${data.accessToken}`;

        return api(originalRequest);
      } catch (err) {
        processQueue(err);

        /**
         * Refresh failed.
         * Clear auth and redirect to login.
         */
        useAuthStore
          .getState()
          .logout();

        if (
          typeof window !==
          "undefined"
        ) {
          window.location.href =
            "/login";
        }

        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;







/**
 * Attach access token to every request
 */
// api.interceptors.request.use((config) => {

//    console.log("✅ Request interceptor fired");
   

//   const accessToken =
//     useAuthStore.getState().accessToken;

//     console.log("accessToken from Zustand:", accessToken);

//   if (accessToken) {
//     config.headers.Authorization = `Bearer ${accessToken}`;
//   }

//    console.log("Final headers:", config.headers);

//   return config;
// });