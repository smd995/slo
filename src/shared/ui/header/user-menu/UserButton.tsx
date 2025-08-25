import React from "react";
import type { ComponentProps } from "react";

interface UserButtonProps extends ComponentProps<"button"> {
  children?: React.ReactNode;
  variant?: "login" | "avatar" | "custom";
  className?: string;
}

export const UserButton = ({
  children,
  variant = "login",
  className = "",
  ...props
}: UserButtonProps) => {
  if (children) {
    return (
      <button className={className} {...props}>
        {children}
      </button>
    );
  }

  // 기본 로그인 버튼
  if (variant === "login") {
    return (
      <button
        className={`text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition-colors ${className}`}
        {...props}
      >
        로그인
      </button>
    );
  }

  // 기본 아바타 플레이스홀더
  if (variant === "avatar") {
    return (
      <button
        className={`w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors ${className}`}
        {...props}
      >
        <span className="text-white text-sm font-medium">U</span>
      </button>
    );
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};
