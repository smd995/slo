import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeaderLogo } from "./HeaderLogo";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof HeaderLogo> = {
  title: "Components/Header/HeaderLogo",
  component: HeaderLogo,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div style={{ padding: "20px" }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  argTypes: {
    fill: {
      control: "color",
      description: "로고 색상",
    },
  },
} satisfies Meta<typeof HeaderLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fill: "#3451f8",
  },
};

// Primary 배경 (흰색 로고)
export const Primary: Story = {
  args: {
    fill: "#FFFFFF",
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "20px", backgroundColor: "#3451f8" }}>
        <Story />
      </div>
    ),
  ],
};

// Secondary 배경 (흰색 로고)
export const Secondary: Story = {
  args: {
    fill: "#FFFFFF",
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "20px", backgroundColor: "oklch(0.439 0 0)" }}>
        <Story />
      </div>
    ),
  ],
};

// White 배경 (검은색 로고)
export const White: Story = {
  args: {
    fill: "oklch(0.439 0 0)",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "20px",
          backgroundColor: "#ffffff",
          border: "1px solid #e5e7eb",
        }}
      >
        <Story />
      </div>
    ),
  ],
};
