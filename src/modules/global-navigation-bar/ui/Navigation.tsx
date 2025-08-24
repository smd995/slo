import { Link, useLocation } from "react-router-dom";
import { Navigation as BaseNavigation } from "@/shared/ui/header/navigation/Navigation";
import { NavItem } from "@/shared/ui/header/primitives/NavItem";
import type { ComponentProps } from "react";
import useLikeStore from "@/features/like/model/useLikeCount";
import { Badge } from "@/shared/ui/badge/Badge";

type NavigationProps = ComponentProps<typeof BaseNavigation>;

export const Navigation = ({ className, ...props }: NavigationProps) => {
  const location = useLocation();
  const { likeCount } = useLikeStore();

  const navigationItems = [
    {
      label: "모임 찾기",
      href: "/",
      active: location.pathname === "/",
      ariaLabel: "모임 찾기 메뉴",
    },
    {
      label: "찜한 모임",
      href: "/liked",
      active: location.pathname === "/liked",
      ariaLabel: `찜한 모임 메뉴, 찜한 항목 ${likeCount}개`,
      badge: likeCount,
    },
    {
      label: "모든 리뷰",
      href: "/reviews",
      active: location.pathname === "/reviews",
      ariaLabel: "모든 리뷰 메뉴",
    },
  ];

  return (
    <BaseNavigation className={className} {...props}>
      {navigationItems.map((item) => (
        <Link key={item.href} to={item.href}>
          <NavItem active={item.active} aria-label={item.ariaLabel}>
            <span>{item.label}</span>
            {item.badge !== undefined && item.badge > 0 && (
              <Badge count={item.badge} />
            )}
          </NavItem>
        </Link>
      ))}
    </BaseNavigation>
  );
};
