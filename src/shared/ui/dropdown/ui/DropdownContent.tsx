import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import type { BaseDropdownProps } from "../model/dropdown.types";

interface DropdownContentProps extends BaseDropdownProps {
  sideOffset?: number;
  minWidth?: string;
}

export const DropdownContent: React.FC<DropdownContentProps> = ({
  children,
  sideOffset = 5,
  minWidth = "160px",
  className = "",
}) => (
  <DropdownMenu.Portal>
    <DropdownMenu.Content
      className={`bg-white rounded-md shadow-lg border border-gray-200 p-1 z-50 ${className}`}
      style={{ minWidth }}
      sideOffset={sideOffset}
    >
      {children}
      <DropdownMenu.Arrow className="fill-white stroke-gray-200" />
    </DropdownMenu.Content>
  </DropdownMenu.Portal>
);
