import type { Meta, StoryObj } from "@storybook/react-vite";
import { GlobalNavigationBar } from "./GlobalNavigationBar";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof GlobalNavigationBar> = {
  title: "Layout/GlobalNavigationBar",
  component: GlobalNavigationBar,
  decorators: [(Story) => <Story />],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    mockLikeCount: {
      control: { type: "number" },
      description: "찜한 모임 개수 (테스트용)",
    },
  },
} satisfies Meta<typeof GlobalNavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mockLikeCount: 0,
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const WithBadge: Story = {
  args: {
    mockLikeCount: 5,
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const LikedPage: Story = {
  args: {
    mockLikeCount: 12,
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/liked"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const ReviewsPage: Story = {
  args: {
    mockLikeCount: 8,
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/reviews"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};
