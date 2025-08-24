import React from "react";
import type { ComponentProps } from "react";

interface NavigationItem {
  label: string;
  href: string;
  active?: boolean;
  disabled?: boolean;
}

interface NavigationProps extends ComponentProps<"nav"> {
  items?: NavigationItem[];
  className?: string;
  children?: React.ReactNode;
}

export const Navigation = ({
  // items = [],
  children,
  className = "flex items-center gap-3 sm:gap-6",
  ...props
}: NavigationProps) => {
  return (
    <nav className={className} {...props}>
      {children}
    </nav>
  );
};
