import { HeaderLogo } from "../header-logo/HeaderLogo";
import { Navigation } from "../navigation/Navigation";
import { UserMenu } from "../user-menu/UserMenu";

export const Header = () => {
  return (
    // 헤더
    <header className="bg-primary-500 flex h-[60px] items-center">
      {/* 헤더 컨테이너 */}
      <div className="mx-auto flex h-[60px] w-full max-w-[1200px] items-center justify-between px-4">
        {/* 왼쪽: 로고 + 네비 */}
        <HeaderLogo />
        <Navigation />

        {/* 오른쪽: 사용자 메뉴 */}
        <UserMenu />
      </div>
    </header>
  );
};
