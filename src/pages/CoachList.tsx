import CoachListFilter from "@/components/coach/CaochListFilter";
import Coaches from "@/components/coach/CoachList";
import Search from "@/components/common/InputField/search/Search";
import useCoachFilter from "@/hooks/useCoachFilter";
import { WhiteSpace } from "@/style/global";
import styled from "styled-components";

const CoachList = () => {
  const { singleFilter, multiFilter, reflectChangesToUrl, sort, idListSports } =
    useCoachFilter();
  return (
    <CoachListStyle>
      <Search placeholder="코치명을 검색하세요" />
      <WhiteSpace $height={20} />
      <CoachListFilter
        singleFilter={singleFilter}
        multiFilter={multiFilter}
        reflectChangesToUrl={reflectChangesToUrl}
        sort={sort}
        idListSports={idListSports}
      />
      <WhiteSpace $height={14} />
      <Coaches />
      <WhiteSpace $height={60} />
    </CoachListStyle>
  );
};

const CoachListStyle = styled.div``;
export default CoachList;
