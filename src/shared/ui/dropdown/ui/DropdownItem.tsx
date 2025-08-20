import type { BaseDropdownProps } from "../model/dropdown.types";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

interface DropdownItemProps extends BaseDropdownProps {
  variant?: "default" | "destructive";
  disabled?: boolean;
  onSelect?: () => void;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  children,
  variant = "default",
  disabled = false,
  onSelect,
  className = "",
}) => {
  const baseClasses =
    "flex items-center px-3 py-2 text-sm rounded-sm cursor-pointer focus:outline-none";
  const variantClasses = {
    default: "text-gray-700 hover:bg-gray-100 focus:bg-gray-100",
    destructive: "text-red-600 hover:bg-red-50 focus:bg-red-50",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  } ${className}`;

  return (
    <DropdownMenu.Item
      className={classes}
      onSelect={onSelect}
      disabled={disabled}
    >
      {children}
    </DropdownMenu.Item>
  );
};
