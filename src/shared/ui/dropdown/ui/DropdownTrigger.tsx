import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import type {
  BaseDropdownProps,
  DropdownVariant,
} from "../model/dropdown.types";
import { ChevronDown } from "lucide-react";

interface DropdownTriggerProps extends BaseDropdownProps {
  variant?: DropdownVariant;
}

export const DropdownTrigger: React.FC<DropdownTriggerProps> = ({
  children,
  variant = "default",
  className = "",
}) => {
  const baseClasses =
    "inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    default:
      "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus:ring-blue-500",
    primary:
      "text-white bg-blue-600 border border-transparent hover:bg-blue-700 focus:ring-blue-500",
  };

  return (
    <DropdownMenu.Trigger
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
      <ChevronDown className="w-4 h-4 ml-2" />
    </DropdownMenu.Trigger>
  );
};
