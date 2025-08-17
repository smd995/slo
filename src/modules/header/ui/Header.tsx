import { HeaderLogo } from "./HeaderLogo";
import { NavItem } from "./NavItem";

export const Header = () => {
  return (
    <header className="bg-primary-500 flex h-[60px] items-center">
      <div className="mx-auto flex h-[60px] w-full max-w-[1200px] items-center justify-between px-4">
        <div className="flex items-center gap-3.5 sm:gap-7">
          <a href="/">
            <HeaderLogo
              onClick={() => {
                return null;
              }}
            />
          </a>
          <nav className="flex items-center gap-3 sm:gap-6">
            <a>
              <NavItem>
                <span>모임 찾기</span>
              </NavItem>
            </a>
            <a>
              <NavItem>
                <span>찜한 모임</span>
              </NavItem>
            </a>
            <a>
              <NavItem>
                <span>모든 리뷰</span>
              </NavItem>
            </a>
          </nav>
        </div>

        {/* <a href="/login">
          <NavItem ariaLabel="로그인 메뉴">로그인</NavItem>
        </a> */}

        {/* <Dropdown
          selectBehavior={"select"}
          onSelect={function (): void {
            throw new Error("Function not implemented.");
          }}
          isOpen
        >
          <Avatar username={""} />
        </Dropdown> */}
      </div>
    </header>
  );
};
