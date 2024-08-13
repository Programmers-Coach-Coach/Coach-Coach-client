import CoachListFilter from "@/components/coach/CaochListFilter";
import Coaches from "@/components/coach/CoachList";
import useCoachFilter from "@/hooks/useCoachFilter";
import { WhiteSpace } from "@/style/global";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const CoachList = () => {
  const location = useLocation();
  const sportId = location.state.sportId;

  const { filterId, sportsIdList, singleFilter, multiFilter } =
    useCoachFilter(sportId);

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
