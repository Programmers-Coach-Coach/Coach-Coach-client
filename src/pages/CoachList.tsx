import Coaches from "@/components/coach/list/CoachList";
import CoachListFilter from "@/components/coach/list/CoachListFilter";
import Search from "@/components/common/InputField/search/Search";
import { WhiteSpace } from "@/style/global";
import styled from "styled-components";

const CoachList = () => {
  return (
    <CoachListStyle>
      <Search placeholder="코치명을 검색하세요" />
      <WhiteSpace $height={20} />
      <CoachListFilter />
      <WhiteSpace $height={14} />
      <Coaches />
    </CoachListStyle>
  );
};

const CoachListStyle = styled.div`
  padding: 15px 0;
`;
export default CoachList;
