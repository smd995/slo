import { Slot } from "@radix-ui/react-slot";
import React, { type ComponentProps, type ComponentRef, type Ref } from "react";
import { HeaderLogo } from "../header-logo/HeaderLogo";
import { Navigation } from "../navigation/Navigation";
import { UserMenu } from "../user-menu/UserMenu";

// Main Header Component
const Header = ({
  children,
  className = "",
  asChild = false,
  ref,
  ...props
}: {
  asChild?: boolean;
  className?: string;
  ref?: Ref<HTMLElement>;
} & ComponentProps<"header">) => {
  const Comp = asChild ? Slot : "header";

  return (
    <Comp
      ref={ref}
      className={`bg-primary-500 flex h-[60px] items-center ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
};

// Container Component
const HeaderContainer = ({
  children,
  className = "",
  asChild = false,
  ref,
  ...props
}: {
  asChild?: boolean;
  className?: string;
  ref?: Ref<HTMLDivElement>;
} & ComponentProps<"div">) => {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      ref={ref}
      className={`mx-auto flex h-[60px] w-full max-w-[1200px] items-center justify-between px-4 ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
};

// Left Section Component
const HeaderLeft = ({
  children,
  className = "",
  asChild = false,
  ref,
  ...props
}: {
  asChild?: boolean;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
} & React.ComponentProps<"div">) => {
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

// Right Section Component
const HeaderRight = ({
  children,
  className = "",
  asChild = false,
  ref,
  ...props
}: {
  asChild?: boolean;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
} & React.ComponentProps<"div">) => {
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

// Logo Component
const HeaderLogoComponent = ({
  children,
  asChild = false,
  ref,
  ...props
}: {
  asChild?: boolean;
  ref?: Ref<ComponentRef<typeof HeaderLogo>>;
} & ComponentProps<typeof HeaderLogo>) => {
  if (asChild) {
    return (
      <Slot ref={ref} {...props}>
        {children}
      </Slot>
    );
  }

  return children || <HeaderLogo ref={ref} {...props} />;
};

// Navigation Component
const HeaderNavigationComponent = ({
  children,
  asChild = false,
  ref,
  ...props
}: {
  asChild?: boolean;
  ref?: Ref<ComponentRef<typeof Navigation>>;
} & ComponentProps<typeof Navigation>) => {
  if (asChild) {
    return (
      <Slot ref={ref} {...props}>
        {children}
      </Slot>
    );
  }

  return children || <Navigation ref={ref} {...props} />;
};

// UserMenu Component
const HeaderUserMenuComponent = ({
  children,
  asChild = false,
  ref,
  ...props
}: {
  asChild?: boolean;
  ref?: Ref<ComponentRef<typeof UserMenu>>;
} & ComponentProps<typeof UserMenu>) => {
  if (asChild) {
    return (
      <Slot ref={ref} {...props}>
        {children}
      </Slot>
    );
  }

  return children || <UserMenu ref={ref} {...props} />;
};

// Compound component attachments
Header.Container = HeaderContainer;
Header.Left = HeaderLeft;
Header.Right = HeaderRight;
Header.Logo = HeaderLogoComponent;
Header.Navigation = HeaderNavigationComponent;
Header.UserMenu = HeaderUserMenuComponent;

export { Header };
