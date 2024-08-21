import BasicInfo from "@/components/coach/BasicInfo";
import DetailInfo from "@/components/coach/DetailInfo";
import CustomButton from "@/components/common/Button/CustomButton";
import Loading from "@/components/loading/Loading";
import useCoachDetail from "@/hooks/queries/useCoachDetail";
import { WhiteSpace } from "@/style/global";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Coach = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useCoachDetail(Number(id));

  if (isLoading) return <Loading />;
  if (isError || !data) {
    return <div>무언가 잘못됨</div>;
  }

  return (
    <Wrapper>
      <BasicInfo coach={data} />
      <WhiteSpace $height={30} />
      <CustomButton size="full-sharp" variant="contained">
        문의하기
      </CustomButton>
      <WhiteSpace $height={50} />
      <DetailInfo coach={data} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Coach;
