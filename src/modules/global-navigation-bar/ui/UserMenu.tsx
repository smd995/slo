import { Link, useNavigate } from "react-router-dom";
import { UserMenu as BaseUserMenu } from "@/shared/ui/header/user-menu/UserMenu";
import { NavItem } from "@/shared/ui/header/navigation/NavItem";
import type { ComponentProps } from "react";
import useUserStore from "@/features/auth/model/useUserStore";
import { Dropdown } from "@/shared/ui/dropdown/Dropdown";
import { Avatar } from "@/shared/ui/avatar/Avatar";

type UserMenuProps = ComponentProps<typeof BaseUserMenu>;

export const UserMenu = ({ className, ...props }: UserMenuProps) => {
  const navigate = useNavigate();
  const { user, setUser } = useUserStore();
  const isLoggedIn = user !== null;

  const handleMenuSelect = (value: string) => {
    switch (value) {
      case "mypage":
        navigate("/mypage");
        break;
      case "logout":
        setUser(null);
        localStorage.removeItem("token");
        navigate("/");
        break;
    }
  };

  return (
    <BaseUserMenu className={className} {...props}>
      {!isLoggedIn ? (
        <Link to="/login">
          <NavItem aria-label="로그인 메뉴">로그인</NavItem>
        </Link>
      ) : (
        <Dropdown
          selectBehavior="action"
          options={[
            { label: "마이페이지", value: "mypage" },
            { label: "로그아웃", value: "logout" },
          ]}
          size="lg"
          onSelect={handleMenuSelect}
          customListClassName="right-0"
        >
          <Avatar
            src={user.image || "/image/alt-profile.png"}
            username={user.name}
            className="!h-10 !w-10 cursor-pointer"
          />
        </Dropdown>
      )}
    </BaseUserMenu>
  );
};
