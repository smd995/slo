import type { ComponentProps, ReactNode } from "react";

interface NavigationProps extends ComponentProps<"div"> {
  children?: ReactNode;
}

export const Navigation = ({ children, ref, ...props }: NavigationProps) => {
  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
};
