


export interface RegisterRequest {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
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

export interface AuthState {
  user: AuthUser | null;

  accessToken: string | null;

  refreshToken: string | null;

  isAuthenticated: boolean;
}

export interface LoginData {
  user: AuthUser | null;

  accessToken: string;

  refreshToken: string;
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