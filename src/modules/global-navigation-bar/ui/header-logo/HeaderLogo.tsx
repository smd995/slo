import { Logo } from "@/shared/ui/header/primitives/Logo";
import type { ComponentProps } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SloIcon } from "./SloIcon";

interface HeaderLogoProps extends ComponentProps<typeof Logo> {
  fill?: string;
}

export const HeaderLogo = ({
  className,
  fill = "#FFFFFF",
  ...props
}: HeaderLogoProps) => {
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
      <Logo {...props}>
        <SloIcon fill={fill} height={22} />
      </Logo>
    </div>
  );
};
