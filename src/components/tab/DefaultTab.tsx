import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import styled from "styled-components";

interface TabProps {
  value: number;
  labels: string[];
  onTabChange: (newValue: number) => void;
}

const DefaultTab = ({ value, labels, onTabChange }: TabProps) => {
  return (
    <TabsWrapper
      value={value}
      onChange={(_, newValue) => onTabChange(newValue as number)}
    >
      {labels.map((label, index) => (
        <StyledTab
          key={index}
          selected={value === index}
          label={label}
          tabCount={labels.length}
        />
      ))}
    </TabsWrapper>
  );
};

// Tabs 스타일링
const TabsWrapper = styled(Tabs)`
  width: 100%;
`;

const StyledTab = styled(Tab)<{ selected: boolean; tabCount: number }>`
  width: ${({ tabCount }) => `calc(100% / ${tabCount})`};
  flex-grow: 1;
  position: relative;
  z-index: 1;
  color: ${({ selected, theme }) =>
    selected ? theme.color.primary : "#FFFFFF !important"};

  /* 밑줄 효과 */
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ selected, theme }) =>
      selected ? theme.color.primary : "#666666"};
    transition: background-color 0.3s ease;
  }

  /* 그라데이션 효과 추가 */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 2px);
    background: ${({ selected, theme }) =>
      selected
        ? `linear-gradient(to bottom, ${theme.color.background}, rgba(0, 117, 255, 0.2))`
        : "transparent"};
    z-index: -1;
    transition: background 0.3s ease;
  }
`;

export default DefaultTab;
