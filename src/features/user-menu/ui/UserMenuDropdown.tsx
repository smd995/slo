import { DropdownContext } from "@/entities/dropdown/model/DropdownContext";
import { useUserMenuLogic } from "../model/userMenuLogic.hook";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { DropdownTrigger } from "@/shared/ui/dropdown/ui/DropdownTrigger";
import { DropdownContent } from "@/shared/ui/dropdown/ui/DropdownContent";
import { DropdownItem } from "@/shared/ui/dropdown/ui/DropdownItem";

export const UserMenuDropdown: React.FC = () => {
  const { isOpen, setIsOpen, menuItems, contextValue } = useUserMenuLogic();

  return (
    <DropdownContext.Provider value={contextValue}>
      <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
        <DropdownTrigger>
          아바타
          {/* <Avatar
            src={user.image || "/image/alt-profile.png"}
            username={user.name}
            className="!h-10 !w-10"
          /> */}
        </DropdownTrigger>

        <DropdownContent>
          {menuItems.map((item) => (
            <DropdownItem
              key={item.id}
              variant={item.variant}
              onSelect={() => {
                item.action?.();
                setIsOpen(false);
              }}
            >
              {item.icon && <item.icon className="w-4 h-4 mr-2" />}
              {item.label}
            </DropdownItem>
          ))}
        </DropdownContent>
      </DropdownMenu.Root>
    </DropdownContext.Provider>
  );
};
