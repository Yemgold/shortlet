


import api from "@/lib/axios";

import { RegisterRequest } from "@/types/auth";

export async function register(
  data: RegisterRequest
) {
  const response = await api.post(
    "/api/v1/auth/register",
    data
  );

  return response.data;
}



interface RequestAccessTokenResponse {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
    refreshToken?: string;
  };
}

export async function requestAccessToken(
  refreshToken: string
) {
  const { data } =
    await api.post<RequestAccessTokenResponse>(
      "/api/v1/auth/request-access-token",
      {
        refreshToken,
      }
    );

  return data.data;
}