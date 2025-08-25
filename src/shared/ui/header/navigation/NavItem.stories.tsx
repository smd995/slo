import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavItem } from "./NavItem";

const meta: Meta<typeof NavItem> = {
  title: "Components/Navigation/NavItem",
  component: NavItem,
  decorators: [
    (Story) => (
      <div style={{ width: "62px", backgroundColor: "#6d82fa" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    active: {
      control: "boolean",
      description: "활성 상태",
    },
    disabled: {
      control: "boolean",
      description: "비활성 상태",
    },
    ariaLabel: {
      control: "text",
      description: "접근성 레이블",
    },
  },
} satisfies Meta<typeof NavItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 렌더링
export const Default: Story = {
  args: {
    children: "메뉴 항목",
    active: false,
    disabled: false,
  },
};

// Secondary 배경
export const Secondary: Story = {
  args: {
    children: "메뉴 항목",
    active: false,
    disabled: false,
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "oklch(0.439 0 0)" }}>
        <Story />
      </div>
    ),
  ],
};
