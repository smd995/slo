import React from "react";
import type { ComponentProps } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}

interface UserMenuProps extends ComponentProps<"div"> {
  user?: User | null;
  onLogin?: () => void;
  onLogout?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export const UserMenu = ({
  // user,
  // onLogin,
  // onLogout,
  children,
  className = "flex items-center",
  ...props
}: UserMenuProps) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};
