// src/components/common/Card/Card.stories.tsx
import Card from "@/components/common/Card/Card";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered" // 중앙에 배치
  },
  argTypes: {
    onClick: { action: "clicked" } // 클릭 액션
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본적인 Card 스토리
export const Default: Story = {
  args: {
    children: "기본 카드" // 카드에 들어갈 내용
  }
};

// 클릭 가능한 카드 스토리
export const Clickable: Story = {
  args: {
    onClick: () => alert("카드 클릭됨"), // 클릭 시 알림
    children: "클릭 가능한 카드"
  }
};
