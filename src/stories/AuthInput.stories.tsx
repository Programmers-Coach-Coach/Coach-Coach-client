import AuthInput from "@/components/common/InputField/Text/AuthInput";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AuthInput> = {
  title: "Components/AuthInput",
  parameters: {
    layout: "centered"
  },
  component: AuthInput
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 AuthInput 스토리
export const Default: Story = {
  render: (args) => <AuthInput {...args} />,
  args: {
    label: "Username",
    placeholder: "Enter your username",
    name: "username",
    type: "text",
    helperText: "",
    width: "314px"
  }
};

// 에러 메시지가 있는 경우
export const WithError: Story = {
  render: (args) => <AuthInput {...args} />,
  args: {
    label: "Email",
    placeholder: "Enter your email",
    name: "email",
    type: "email",
    helperText: "Invalid email address",
    width: "314px"
  }
};

// 비밀번호 입력 필드
export const PasswordInput: Story = {
  render: (args) => <AuthInput {...args} />,
  args: {
    label: "Password",
    placeholder: "Enter your password",
    name: "password",
    type: "password",
    helperText: "",
    width: "314px"
  }
};
