"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import axios from "axios";

import api from "@/lib/axios";
import { useAuthStore } from "@/store/authStore";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthUser {
  _id: string;
  email: string;
  role: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
    user: AuthUser;
  };
}

async function login(
  payload: LoginPayload
): Promise<LoginResponse> {
  const { data } = await api.post<LoginResponse>(
    "/api/v1/auth/login",
    payload
  );

  return data;
}

export function useLogin() {
  const router = useRouter();

  return useMutation<
    LoginResponse,
    Error,
    LoginPayload
  >({
    mutationFn: login,

    onSuccess(response) {

    const {
  user,
  accessToken,
  refreshToken,
} = response.data;

console.log("Access Token:", accessToken);
  console.log("Refresh Token:", refreshToken);
  console.log("User:", user);

localStorage.setItem("accessToken", accessToken);
localStorage.setItem("refreshToken", refreshToken);

useAuthStore.getState().login({
  user,
  accessToken,
  refreshToken,
});

console.log(
  "Store token after login:",
  useAuthStore.getState().accessToken
);

console.log("===== AFTER LOGIN =====");


console.log("Login successful");

      // Redirect by role
      if (user.role === "ADMIN") {
        router.replace("/admin/dashboard");
      } else {
        router.replace("/");
      }
    },

    onError(error, variables) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const message =
          error.response?.data?.message ??
          error.message;

        console.error(message);

        // Email not verified
        if (
          status === 401 &&
          message
            .toLowerCase()
            .includes("verify your email")
        ) {
          router.push(
            `/auth/verify-email?email=${encodeURIComponent(
              variables.email
            )}`
          );

          return;
        }

        // Token expired
        if (status === 401) {
          router.push("/auth/login");
          return;
        }
      } else {
        console.error(error.message);
      }
    },
  });
}




// "use client";

// import { useMutation } from "@tanstack/react-query";
// import axios from "axios";

// import api from "@/lib/axios";

// import { useAuthStore } from "@/store/authStore"; 

// export interface LoginPayload {
//   email: string;
//   password: string;
// }

// export interface AuthUser {
//   _id: string;
//   email: string;
//   role: string;
//   firstName: string;
//   lastName: string;
//   phoneNumber: string;
//   isVerified: boolean;
//   createdAt: string;
//   updatedAt: string;
// }

// export interface LoginResponse {
//   success: boolean;
//   message: string;
//   data: {
//     accessToken: string;
//     refreshToken: string;
//     user: AuthUser;
//   };
// }

// async function login(
//   payload: LoginPayload
// ): Promise<LoginResponse> {
//   const { data } =
//     await api.post<LoginResponse>(
//       "/api/v1/auth/login",
//       payload
//     );

//   return data;
// }

// export function useLogin() {
//   return useMutation<
//     LoginResponse,
//     Error,
//     LoginPayload
//   >({
//     mutationFn: login,

//     onSuccess: (response) => {
//       const {
//         accessToken,
//         refreshToken,
//         user,
//       } = response.data;

//       useAuthStore.getState().login({
//         accessToken,
//         refreshToken,
//         user,
//       });

//       console.log("Login successful");
//     },

//     onError: (error) => {
//       if (axios.isAxiosError(error)) {
//         console.error(
//           error.response?.data?.message ??
//             error.message
//         );
//       } else {
//         console.error(error.message);
//       }
//     },
//   });
// }