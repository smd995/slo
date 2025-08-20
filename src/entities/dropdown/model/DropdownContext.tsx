import { createContext, useContext } from "react";

export interface DropdownContextType {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onItemSelect: (itemId: string) => void;
}

export const DropdownContext = createContext<DropdownContextType | null>(null);

export const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("useDropdownContext must be used within DropdownProvider");
  }
  return context;
};
