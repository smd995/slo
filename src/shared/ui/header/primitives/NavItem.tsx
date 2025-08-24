import React from "react";
import type { ComponentProps } from "react";

interface NavItemProps extends ComponentProps<"div"> {
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  className?: string;
}

export const NavItem = ({
  children,
  active = false,
  disabled = false,
  className = "",
  ...props
}: NavItemProps) => {
  const baseStyles =
    "px-3 py-2 text-sm font-medium transition-colors cursor-pointer";
  const activeStyles = active
    ? "text-white bg-white/20 rounded-md"
    : "text-white/80 hover:text-white hover:bg-white/10 rounded-md";
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

  const finalClassName = `${baseStyles} ${activeStyles} ${disabledStyles} ${className}`;

  return (
    <div className={finalClassName} {...props}>
      {children}
    </div>
  );
};
