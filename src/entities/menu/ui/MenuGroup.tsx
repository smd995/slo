import { useDropdownContext } from "@/entities/dropdown/model/DropdownContext";
import type { MenuGroup } from "../model/menu.types";
import { DropdownItem } from "@/shared/ui/dropdown/ui/DropdownItem";
import { DropdownLabel } from "@/shared/ui/dropdown/ui/DropdownLabel";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

interface MenuGroupComponentProps {
  group: MenuGroup;
  onItemSelect?: (itemId: string) => void;
}

export const MenuGroupComponent: React.FC<MenuGroupComponentProps> = ({
  group,
  onItemSelect,
}) => {
  const { onItemSelect: contextOnItemSelect } = useDropdownContext();

  return (
    <DropdownMenu.Group>
      {group.label && <DropdownLabel>{group.label}</DropdownLabel>}
      {group.items.map((item) => (
        <DropdownItem
          key={item.id}
          variant={item.variant}
          disabled={item.disabled}
          onSelect={() => {
            item.action?.();
            onItemSelect?.(item.id);
            contextOnItemSelect(item.id);
          }}
        >
          {item.icon && <item.icon className="w-4 h-4 mr-2" />}
          {item.label}
        </DropdownItem>
      ))}
    </DropdownMenu.Group>
  );
};
