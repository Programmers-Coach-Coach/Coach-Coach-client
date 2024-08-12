import CoachListFilter from "@/components/coach/CaochListFilter";
import Coaches from "@/components/coach/CoachList";
import { WhiteSpace } from "@/style/global";
import styled from "styled-components";

const CoachList = () => {
  return (
    <CoachListStyle>
      <div className="search"></div>
      <WhiteSpace $height={30} />
      <CoachListFilter />
      <WhiteSpace $height={30} />
      <Coaches />
    </CoachListStyle>
  );
};

const CoachListStyle = styled.div``;
export default CoachList;
