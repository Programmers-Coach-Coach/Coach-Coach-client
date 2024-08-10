import Coaches from "@/components/coach/CoachList";
// import { coachList } from "@/data/coach";
import styled from "styled-components";

const CoachList = () => {
  return (
    <CoachListStyle>
      <div className="search"></div>
      <div className="filter"></div>
      <Coaches />
    </CoachListStyle>
  );
};

const CoachListStyle = styled.div``;
export default CoachList;
