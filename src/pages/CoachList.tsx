import CoachListFilter from "@/components/coach/CaochListFilter";
import Coaches from "@/components/coach/CoachList";
import Search from "@/components/common/InputField/search/Search";
import useCoachFilter from "@/hooks/useCoachFilter";
import { WhiteSpace } from "@/style/global";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const CoachList = () => {
  const location = useLocation();
  const sportId = location.state?.sportId ?? 0; // 코치 리스트를 url로 치고 들어왔을 때는 기본 종목 '전체(0)'

  const { filterId, sportsIdList, singleFilter, multiFilter } =
    useCoachFilter(sportId);

  return (
    <CoachListStyle>
      <Search placeholder="코치명을 검색하세요" />
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
