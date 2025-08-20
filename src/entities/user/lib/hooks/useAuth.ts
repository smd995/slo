import {
  userApi,
  type LoginRequest,
  type SignupRequest,
} from "../../api/userApi";
import type { User } from "../../model/user.types";
import { useUserStore } from "../../model/userStore";

export const useAuth = () => {
  const {
    user,
    token,
    isLoading,
    isAuthenticated,
    setUser,
    clearUser,
    setLoading,
    updateUser,
  } = useUserStore();

  const signin = async (credentials: LoginRequest) => {
    try {
      setLoading(true);
      const response = await userApi.login(credentials);
      const user = await userApi.getMe();
      setUser(user, response.token);
      return response;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const signup = async (userData: SignupRequest) => {
    try {
      setLoading(true);
      const response = await userApi.signup(userData);
      return response;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const signout = async () => {
    try {
      setLoading(true);
      await userApi.logout();
    } catch (error) {
      console.error("Logout API failed", error);
    } finally {
      clearUser();
    }
  };

  const checkAuth = async () => {
    if (!token) return;

    try {
      setLoading(true);
      const user = await userApi.getMe();
      setUser(user, token);
    } catch (error) {
      console.error("Auth check failed", error);
      clearUser();
    }
  };

  const updateProfile = async (updates: Partial<User>) => {
    try {
      setLoading(true);
      const updatedUser = await userApi.updateProfile(updates);
      updateUser(updatedUser);
      return updatedUser;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  return {
    // State
    user,
    token,
    isLoading,
    isAuthenticated,

    // Actions
    signin,
    signup,
    signout,
    checkAuth,
    updateProfile,
  };
};
