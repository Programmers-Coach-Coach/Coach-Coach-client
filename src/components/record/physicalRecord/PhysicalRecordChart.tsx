import LineChart from "@/components/chart/LineChart";
import PhysicalTabs from "@/components/tab/PhysicalTabs";
import { useState } from "react";
import styled from "styled-components";

const PhysicalRecordChart = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleTab = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Wrapper>
      <PhysicalTabs value={currentIndex} onTabChange={handleTab} />
      <LineChart chartId={currentIndex} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
export default PhysicalRecordChart;
