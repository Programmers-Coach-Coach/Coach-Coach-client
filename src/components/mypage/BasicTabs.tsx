import React from "react";
import styled from "styled-components";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

interface BasicTabsProps {
  value: number;
  onTabChange: (newValue: number) => void;
}

const BasicTabs = ({ value, onTabChange }: BasicTabsProps) => {
  return (
    <TabsWrapper>
      <Tabs
        value={value}
        textColor="primary"
        indicatorColor="primary"
        onChange={(event, newValue) => onTabChange(newValue)}
      >
        <Tab label="내 프로필" />
        <Tab label="코치 전용 프로필" />
      </Tabs>
    </TabsWrapper>
  );
};

const TabsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default BasicTabs;
