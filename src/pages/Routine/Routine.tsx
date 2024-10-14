import { styled } from "styled-components";
import { useState } from "react";
import MyRoutine from "./MyRoutine";
import DefaultTab from "@/components/tab/DefaultTab";
import MyCoach from "./MyCoach";
import { isSelectProfile } from "@/store/isSelectProfile";
import CoachRoutine from "./CoachRoutine";

const Routine = () => {
  const isSelect = isSelectProfile((state) => state.isSelectProfile);
  const [tabValue, setTabValue] = useState<number>(0);

  const handleTabChange = (newValue: number) => {
    setTabValue(newValue);
  };
  return (
    <RoutineStyle>
      <DefaultTab
        value={tabValue}
        labels={["내 루틴", "내 코치 루틴"]}
        onTabChange={handleTabChange}
      />
      {tabValue === 0 ? (
        <MyRoutine />
      ) : isSelect ? (
        <CoachRoutine />
      ) : (
        <MyCoach />
      )}
    </RoutineStyle>
  );
};

const RoutineStyle = styled.div``;

export default Routine;
