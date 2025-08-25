// Header.stories.js
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen", // 헤더는 전체 너비로 보는 게 좋음
    viewport: {
      defaultViewport: "desktop",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => (
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
  ),
};

export const CustomLogo: Story = {
  render: () => (
    <Header>
      <Header.Container>
        <Header.Left>
          <Header.Logo>
            <div className="text-white font-bold text-xl cursor-pointer">
              🚀 My Custom App
            </div>
          </Header.Logo>
          <Header.Navigation />
        </Header.Left>
        <Header.Right>
          <Header.UserMenu />
        </Header.Right>
      </Header.Container>
    </Header>
  ),
};

export const CustomNavigation: Story = {
  render: () => (
    <Header>
      <Header.Container>
        <Header.Left>
          <Header.Logo />
          <Header.Navigation>
            <nav className="flex items-center gap-6">
              <a
                href="#"
                className="text-white hover:text-gray-200 font-medium"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-200 font-medium"
              >
                Projects
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-200 font-medium"
              >
                Team
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-200 font-medium"
              >
                Analytics
              </a>
            </nav>
          </Header.Navigation>
        </Header.Left>
        <Header.Right>
          <Header.UserMenu />
        </Header.Right>
      </Header.Container>
    </Header>
  ),
};

export const CustomUserMenu: Story = {
  render: () => (
    <Header>
      <Header.Container>
        <Header.Left>
          <Header.Logo />
          <Header.Navigation />
        </Header.Left>
        <Header.Right>
          <Header.UserMenu>
            <div className="flex items-center gap-3">
              <button className="text-white hover:text-gray-200 px-3 py-2">
                Help
              </button>
              <button className="text-white hover:text-gray-200 px-3 py-2">
                Settings
              </button>
              <button className="bg-white text-primary-500 px-4 py-2 rounded font-medium hover:bg-gray-100">
                Upgrade
              </button>
            </div>
          </Header.UserMenu>
        </Header.Right>
      </Header.Container>
    </Header>
  ),
};

export const FullyCustom: Story = {
  render: () => (
    <Header>
      <Header.Container>
        <Header.Left>
          <Header.Logo>
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary-500 font-bold text-sm">S</span>
              </div>
              <span className="text-white font-bold text-lg">StartupCo</span>
            </div>
          </Header.Logo>

          <Header.Navigation>
            <nav className="flex items-center gap-6">
              {/* <NavItem active ariaLabel="홈">
                홈
              </NavItem>
              <NavItem ariaLabel="제품">제품</NavItem>
              <NavItem ariaLabel="가격">가격</NavItem>
              <NavItem ariaLabel="고객사례">고객사례</NavItem> */}
            </nav>
          </Header.Navigation>
        </Header.Left>

        <Header.Right>
          <Header.UserMenu>
            <div className="flex items-center gap-3">
              <button className="text-white hover:text-gray-200 text-sm">
                문의하기
              </button>
              <button className="text-white hover:text-gray-200 text-sm border border-white px-3 py-1.5 rounded">
                로그인
              </button>
              <button className="bg-white text-primary-500 px-4 py-1.5 rounded font-medium text-sm hover:bg-gray-100">
                무료 체험
              </button>
            </div>
          </Header.UserMenu>
        </Header.Right>
      </Header.Container>
    </Header>
  ),
};
