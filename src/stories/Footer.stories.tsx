// src/components/common/Footer/Footer.stories.tsx
import Footer from "@/components/common/Footer/Footer";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "centered" // 전체 화면 레이아웃 설정
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 Footer 스토리
export const Default: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Footer />
    </div>
  )
};
