export interface MenuItem {
  id: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  action?: () => void;
  variant?: "default" | "destructive";
  disabled?: boolean;
}

export interface MenuGroup {
  id: string;
  label?: string;
  items: MenuItem[];
}
