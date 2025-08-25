import { Slot } from "@radix-ui/react-slot";
import { Navigation } from "./navigation/Navigation";
import { UserMenu } from "./user-menu/UserMenu";
import { Logo } from "./primitives/Logo";
import type { ComponentProps, Ref } from "react";

type HeaderProps = ComponentProps<"header"> & {
  className?: string;
  ref?: Ref<HTMLElement>;
};

type HeaderContainerProps = ComponentProps<"div"> & {
  className?: string;
};

type HeaderSectionProps = ComponentProps<"div"> & {
  className?: string;
  asChild?: boolean;
};

const Header = ({ children, className, ref, ...props }: HeaderProps) => (
  <header ref={ref} className={className} {...props}>
    {children}
  </header>
);

const HeaderContainer = ({
  children,
  className,
  ...props
}: HeaderContainerProps) => (
  <div className={className} {...props}>
    {children}
  </div>
);

const HeaderLeft = ({
  children,
  className = "",
  asChild = false,
  ref,
  ...props
}: HeaderSectionProps) => {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      ref={ref}
      className={`flex items-center gap-4 ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
};

const HeaderRight = ({
  children,
  className = "",
  asChild = false,
  ref,
  ...props
}: HeaderSectionProps) => {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      ref={ref}
      className={`flex items-center gap-4 ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
};

const HeaderLogo = (props: ComponentProps<typeof Logo>) => <Logo {...props} />;
const HeaderNavigation = (props: ComponentProps<typeof Navigation>) => (
  <Navigation {...props} />
);
const HeaderUserMenu = (props: ComponentProps<typeof UserMenu>) => (
  <UserMenu {...props} />
);

Header.displayName = "Header";
HeaderContainer.displayName = "Header.Container";
HeaderLeft.displayName = "Header.Left";
HeaderRight.displayName = "Header.Right";
HeaderLogo.displayName = "Header.Logo";
HeaderNavigation.displayName = "Header.Navigation";
HeaderUserMenu.displayName = "Header.UserMenu";

// Compound component attachments
Header.Container = HeaderContainer;
Header.Left = HeaderLeft;
Header.Right = HeaderRight;
Header.Logo = HeaderLogo;
Header.Navigation = HeaderNavigation;
Header.UserMenu = HeaderUserMenu;

export { Header };
