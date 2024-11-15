import LineChart from "@/components/chart/LineChart";
import DefaultTab from "@/components/tab/DefaultTab";
import { useState } from "react";

const PhysicalRecordChart = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div>
      <DefaultTab
        value={activeTabIndex}
        onTabChange={handleTabChange}
        labels={["체중", "골격근량", "체지방률", "BMI"]}
      />
      <LineChart chartId={activeTabIndex} />
    </div>
  );
};

export default PhysicalRecordChart;
