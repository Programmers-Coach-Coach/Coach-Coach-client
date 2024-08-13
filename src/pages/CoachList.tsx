import CoachListFilter from "@/components/coach/CaochListFilter";
import Coaches from "@/components/coach/CoachList";
import useCoachFilter from "@/hooks/useCoachFilter";
import { WhiteSpace } from "@/style/global";
import styled from "styled-components";

const CoachList = () => {
  const { filterId, sportsIdList, singleFilter, multiFilter } =
    useCoachFilter();
  return (
    <CoachListStyle>
      <div className="search"></div>
      <WhiteSpace $height={30} />
      <CoachListFilter
        filterId={filterId}
        sportsIdList={sportsIdList}
        singleFilter={singleFilter}
        multiFilter={multiFilter}
      />
      <WhiteSpace $height={30} />
      <Coaches filterId={filterId} sportsIdList={sportsIdList} />
    </CoachListStyle>
  );
};

const CoachListStyle = styled.div``;
export default CoachList;
