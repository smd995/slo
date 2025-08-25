import type { Meta, StoryObj } from "@storybook/react-vite";
import { Navigation } from "./Navigation";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof Navigation> = {
  title: "Components/Navigation/Navigation",
  component: Navigation,
  decorators: [
    (Story) => (
      <div style={{ width: "fit-content", backgroundColor: "#6d82fa" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    mockLikeCount: {
      control: { type: "number" },
    },
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <div>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  args: {
    mockLikeCount: 999,
  },
};

export const LikedPage: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/liked"]}>
        <div>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

export const LikedPageWithBadge: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/liked"]}>
        <div>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  args: {
    mockLikeCount: 5,
  },
};

export const ReviewsPage: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/reviews"]}>
        <div>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

export const Secondary: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <div style={{ backgroundColor: "oklch(0.439 0 0)" }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

export const EdgeCase: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <div>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  args: {
    mockLikeCount: 9999999999,
  },
};
