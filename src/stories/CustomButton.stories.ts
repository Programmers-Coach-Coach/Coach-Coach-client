import type { Meta, StoryObj } from "@storybook/react";
import CustomButton from "@/components/common/Button/CustomButton";

const meta: Meta<typeof CustomButton> = {
  title: "Components/CustomButton",
  component: CustomButton,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["large", "small", "full", "mini"] // ButtonSize 타입을 기준으로 설정
      },
      defaultValue: "small" // 기본값 설정
    },
    variant: {
      control: {
        type: "select",
        options: ["contained", "outlined"] // CustomButtonType 타입을 기준으로 설정
      },
      defaultValue: "contained" // 기본값 설정
    },
    onClick: { action: "clicked" }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: "large",
    variant: "contained",
    children: "로그인"
  }
};

export const Secondary: Story = {
  args: {
    size: "mini",
    variant: "contained",
    children: "미니버튼"
  }
};

export const Third: Story = {
  args: {
    size: "small",
    variant: "outlined", // Example of using a different variant
    children: "중복확인"
  }
};
