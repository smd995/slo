import { Header } from "@/shared/ui/header/Header";
import { HeaderLogo } from "../header-logo/HeaderLogo";
import { Navigation } from "../navigation/Navigation";
import { UserMenu } from "../UserMenu";

interface GlobalNavigationBarProps {
  mockLikeCount?: number;
}

export const GlobalNavigationBar = ({
  mockLikeCount,
}: GlobalNavigationBarProps) => {
  return (
    <Header className="bg-primary-500 flex h-[60px] items-center">
      <Header.Container className="mx-auto flex h-[60px] w-full max-w-[1200px] items-center justify-between px-4">
        <Header.Left>
          <Header.Logo className="mr-6">
            <HeaderLogo />
          </Header.Logo>

          <Header.Navigation>
            <Navigation mockLikeCount={mockLikeCount} />
          </Header.Navigation>
        </Header.Left>

        <Header.Right>
          <Header.UserMenu>
            <UserMenu />
          </Header.UserMenu>
        </Header.Right>
      </Header.Container>
    </Header>
  );
};
