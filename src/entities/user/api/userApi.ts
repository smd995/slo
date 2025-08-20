import { api } from "@/shared/api/base";
import type { User } from "../model/user.types";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest extends LoginRequest {
  name: string;
  companyName: string;
  passwordCheck: string;
}

export interface LoginResponse {
  token: string;
}

class UserApi {
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>(
      "/auths/signin",
      credentials
    );
    return response.data;
  }

  async signup(userData: SignupRequest): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>("/auths/signup", userData);
    return response.data;
  }

  async getMe(): Promise<User> {
    const response = await api.get<User>("/auths/user");
    return response.data;
  }

  async logout(): Promise<void> {
    await api.post("/auths/signout");
  }

  async updateProfile(updates: Partial<User>): Promise<User> {
    const response = await api.put<User>("/auths/user", updates);
    return response.data;
  }
}

export const userApi = new UserApi();
