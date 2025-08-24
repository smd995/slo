import { Header } from "@/shared/ui/header/Header";

// 기본 사용법
export const GlobalNavigationBar = () => {
  return (
    <Header>
      <Header.Container>
        <Header.Left>
          <Header.Logo />
          <Header.Navigation />
        </Header.Left>
        <Header.Right>
          <Header.UserMenu />
        </Header.Right>
      </Header.Container>
    </Header>
  );
};
