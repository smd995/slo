import type { BaseDropdownProps } from "../model/dropdown.types";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const DropdownLabel: React.FC<BaseDropdownProps> = ({
  children,
  className = "",
}) => (
  <DropdownMenu.Label
    className={`px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider ${className}`}
  >
    {children}
  </DropdownMenu.Label>
);
