import type { ComponentProps, ReactNode } from "react";

interface HeaderLogoProps extends ComponentProps<"div"> {
  children?: ReactNode;
}

export const HeaderLogo = ({ children, ref, ...props }: HeaderLogoProps) => {
  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
};
