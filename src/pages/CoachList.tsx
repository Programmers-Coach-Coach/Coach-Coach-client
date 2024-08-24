import CoachListFilter from "@/components/coach/CaochListFilter";
import Coaches from "@/components/coach/CoachList";
import Search from "@/components/common/InputField/search/Search";
import useCoachFilter from "@/hooks/useCoachFilter";
import { WhiteSpace } from "@/style/global";
import styled from "styled-components";

const CoachList = () => {
  const { singleFilter, multiFilter } = useCoachFilter();

  return (
    <CoachListStyle>
      <Search placeholder="코치명을 검색하세요" />
      <WhiteSpace $height={30} />
      <CoachListFilter singleFilter={singleFilter} multiFilter={multiFilter} />
      <WhiteSpace $height={30} />
      <Coaches />
    </CoachListStyle>
  );
};

const CoachListStyle = styled.div``;
export default CoachList;
