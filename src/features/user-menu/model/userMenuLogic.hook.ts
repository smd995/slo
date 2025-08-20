import type { DropdownContextType } from "@/entities/dropdown/model/DropdownContext";
import type { MenuItem } from "@/entities/menu/model/menu.types";
import { useUserActions } from "@/entities/user/model/userActions.hook";
import { LogOut, User } from "lucide-react";
import { useState } from "react";

export const useUserMenuLogic = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { handleProfile, handleLogout } = useUserActions();

  const menuItems: MenuItem[] = [
    { id: "profile", label: "마이페이지", icon: User, action: handleProfile },
    {
      id: "logout",
      label: "로그아웃",
      icon: LogOut,
      action: handleLogout,
      variant: "destructive",
    },
  ];

  const contextValue: DropdownContextType = {
    isOpen,
    onOpenChange: setIsOpen,
    onItemSelect: () => setIsOpen(false),
  };

  return { isOpen, setIsOpen, menuItems, contextValue };
};
