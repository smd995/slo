import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "outline"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    children: {
      control: { type: "text" },
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리 (Controls로 모든 props 테스트 가능)
export const Default: Story = {
  args: {
    children: "Button",
  },
};

// 모든 상태를 한눈에 보기 (가장 중요한 스토리)
export const Overview: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Primary variants */}
      <div>
        <h3 className="mb-4 text-lg font-semibold text-gray-800">Primary</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary" size="sm">
            Small
          </Button>
          <Button variant="primary" size="md">
            Medium
          </Button>
          <Button variant="primary" size="lg">
            Large
          </Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
      </div>

      {/* Outline variants */}
      <div>
        <h3 className="mb-4 text-lg font-semibold text-gray-800">Outline</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="outline" size="sm">
            Small
          </Button>
          <Button variant="outline" size="md">
            Medium
          </Button>
          <Button variant="outline" size="lg">
            Large
          </Button>
          <Button variant="outline" disabled>
            Disabled
          </Button>
        </div>
      </div>
    </div>
  ),
};

// 인터랙션 테스트
export const Interactive: Story = {
  args: {
    children: "Click me!",
    onClick: () => alert("Button clicked!"),
  },
};
