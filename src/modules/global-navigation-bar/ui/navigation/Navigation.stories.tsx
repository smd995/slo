import type { Meta, StoryObj } from "@storybook/react-vite";
import { Navigation } from "./Navigation";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof Navigation> = {
  title: "Components/Navigation/Navigation",
  component: Navigation,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <div style={{ width: "232px", backgroundColor: "#3451f8" }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Secondary: Story = {
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "oklch(0.439 0 0)" }}>
        <Story />
      </div>
    ),
  ],
};
