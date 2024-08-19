import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import styled from "styled-components";

interface Props {
  value: number;
  onTabChange: (newValue: number) => void;
}

const PhysicalTabs = ({ value, onTabChange }: Props) => {
  return (
    <TabsWrapper>
      <Tabs
        value={value}
        onChange={(_, newValue) => {
          onTabChange(newValue as number);
        }}
      >
        <Tab label="체중" />
        <Tab label="골격근량" />
        <Tab label="체지방률" />
        <Tab label="BMI" />
      </Tabs>
    </TabsWrapper>
  );
};

const TabsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default PhysicalTabs;
