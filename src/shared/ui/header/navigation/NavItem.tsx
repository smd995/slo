import React from "react";
import clsx from "clsx";
import type { ComponentProps } from "react";

interface NavItemProps extends ComponentProps<"div"> {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  active?: boolean;
  disabled?: boolean;
}

export const NavItem = ({
  children,
  className,
  ariaLabel,
  active = false,
  disabled = false,
  ...props
}: NavItemProps) => {
  return (
    <div
      role="link"
      aria-label={ariaLabel}
      className={clsx(
        "group flex h-[60px] cursor-pointer items-center text-sm font-semibold transition",
        {
          // Active 상태
          "text-secondary-900": active,
          // Normal 상태
          "hover:text-secondary-900 text-white": !active && !disabled,
          // Disabled 상태
          "text-white/50 cursor-not-allowed": disabled,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
