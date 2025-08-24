import type { ComponentProps } from "react";

interface LogoProps extends ComponentProps<"img"> {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export const Logo = ({
  src = "/logo.svg",
  alt = "Logo",
  width = 120,
  height = 40,
  className = "",
  ...props
}: LogoProps) => {
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
