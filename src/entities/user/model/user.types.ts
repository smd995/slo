export interface User {
  teamId: number;
  id: number;
  email: string;
  name: string;
  companyName: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}
