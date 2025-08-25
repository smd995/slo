import { Link, useLocation } from "react-router-dom";
import { Navigation as BaseNavigation } from "@/shared/ui/header/navigation/Navigation";
import { NavItem } from "@/shared/ui/header/navigation/NavItem";
import type { ComponentProps } from "react";
import useLikeStore from "@/features/like/model/useLikeCount";
import { Badge } from "@/shared/ui/badge/Badge";

type NavigationProps = ComponentProps<typeof BaseNavigation> & {
  // Storybook을 위한 props 추가
  mockLikeCount?: number;
};

export const Navigation = ({
  className,
  mockLikeCount,
  ...props
}: NavigationProps) => {
  const location = useLocation();
  const { likeCount: storeLikeCount } = useLikeStore();

  // mockLikeCount가 있으면 그것을 사용, 없으면 실제 store 값 사용
  const likeCount =
    mockLikeCount !== undefined ? mockLikeCount : storeLikeCount;

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
      hasBadge: true, // Badge 영역이 있음을 표시
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
            {/* Badge 영역을 항상 확보 */}
            <div className="flex min-w-[34px] justify-center">
              {item.badge !== undefined && item.badge > 0 && (
                <Badge active={item.active} count={item.badge} />
              )}
            </div>
          </NavItem>
        </Link>
      ))}
    </BaseNavigation>
  );
};
