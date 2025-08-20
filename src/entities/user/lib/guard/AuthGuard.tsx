import { Navigate } from "react-router-dom";
import { useUserStore } from "../../model/userStore";

interface AuthGuardProps {
  children: React.ReactNode;
  redirectTo?: string;
  requireAuth?: boolean;
}

export const AuthGuard: React.FC<AuthGuardProps> = ({
  children,
  redirectTo = "/login",
  requireAuth = true,
}) => {
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);

  if (requireAuth && !isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  if (!requireAuth && isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};
