import CoachDataList from "@/components/coach/CoachDataList";
import { coachList } from "@/data/coach";
import styled from "styled-components";

const CoachList = () => {
  return (
    <CoachListStyle>
      <div className="search"></div>
      <div className="filter"></div>
      <CoachDataList coachList={coachList.data} />
    </CoachListStyle>
  );
};

const CoachListStyle = styled.div``;
export default CoachList;
