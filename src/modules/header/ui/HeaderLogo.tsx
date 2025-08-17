import { Logo } from "@/shared/ui/logo/Logo";

interface HeaderLogoProps {
  onClick: (e: React.MouseEvent) => void;
}

export const HeaderLogo = ({ onClick }: HeaderLogoProps) => {
  return (
    <a href="/" onClick={onClick}>
      <Logo className="cursor-pointer" />
    </a>
  );
};
