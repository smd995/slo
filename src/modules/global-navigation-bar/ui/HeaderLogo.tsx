import { Logo } from "@/shared/ui/header/primitives/Logo";
import type { ComponentProps } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type HeaderLogoProps = ComponentProps<typeof Logo>;

export const HeaderLogo = ({ className, ...props }: HeaderLogoProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (location.pathname === "/") {
      window.location.reload();
    } else {
      navigate("/");
    }
  };

  return (
    <div onClick={handleClick} className={`cursor-pointer ${className}`}>
      <Logo
        src="/slo.svg"
        alt="로고 이미지"
        width={120}
        height={40}
        {...props}
      />
    </div>
  );
};
