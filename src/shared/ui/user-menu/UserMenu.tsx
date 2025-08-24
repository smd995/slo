import type { ComponentProps, ReactNode } from "react";

interface UserMenuProps extends ComponentProps<"div"> {
  children?: ReactNode;
}

export const UserMenu = ({ children, ref, ...props }: UserMenuProps) => {
  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
};
