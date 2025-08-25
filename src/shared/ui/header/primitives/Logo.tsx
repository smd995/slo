import type { ComponentProps, ReactNode } from "react";

interface LogoProps extends ComponentProps<"img"> {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  children?: ReactNode;
}

export const Logo = ({
  src = "/logo.svg",
  alt = "Logo",
  width = 120,
  height = 40,
  className = "",
  children,
  ...props
}: LogoProps) => {
  if (children) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`object-contain ${className}`}
      {...props}
    />
  );
};
