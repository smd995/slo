import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Shared/UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "프로젝트 전체에서 사용하는 기본 버튼 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "outline"],
    },
    size: {
      control: { type: "radio" },
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
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// 메인 스토리 - Controls로 모든 것을 조작 가능
export const Default: Story = {};

// 자주 사용되는 조합들만 빠른 참조용으로 제공
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Button variant="primary" size="sm">
          Small
        </Button>
        <Button variant="primary" size="md">
          Medium
        </Button>
        <Button variant="primary" size="lg">
          Large
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm">
          Small
        </Button>
        <Button variant="outline" size="md">
          Medium
        </Button>
        <Button variant="outline" size="lg">
          Large
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="primary" disabled>
          Disabled
        </Button>
        <Button variant="outline" disabled>
          Disabled
        </Button>
      </div>
    </div>
  ),
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

// 실제 사용 예시
export const Examples: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Button variant="primary">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          Add Item
        </Button>
        <Button variant="outline">Cancel</Button>
      </div>
      <div>
        <Button className="w-full">Full Width Button</Button>
      </div>
      <div>
        <Button variant="primary">
          매우 긴 버튼 텍스트가 들어갔을 때의 모습
        </Button>
      </div>
    </div>
  ),
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};
