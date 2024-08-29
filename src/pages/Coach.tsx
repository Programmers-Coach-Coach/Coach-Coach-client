import BasicInfo from "@/components/coach/BasicInfo";
import DetailInfo from "@/components/coach/DetailInfo";
import CustomButton from "@/components/common/Button/CustomButton";
import Loading from "@/components/loading/Loading";
import useCoachDetail from "@/hooks/queries/useCoachDetail";
import { useContact } from "@/hooks/queries/useContact";
import { useFetchAuth } from "@/hooks/useFetchAuth";
import { WhiteSpace } from "@/style/global";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Coach = () => {
  const { id } = useParams();
  const { data, isError, isLoading, refetch } = useCoachDetail(Number(id));
  const { mutate } = useContact();
  const { data: myAuth } = useFetchAuth();

  if (isLoading) return <Loading />;
  if (isError || !data) {
    return <div>무언가 잘못됨</div>;
  }

  const handleKaKaoLink = () => {
    if (data.chattingUrl) {
      window.open(data.chattingUrl, "_blank");
    } else {
      toast.error("코치가 카카오톡 링크를 등록하지 않았습니다");
    }
  };

  const handleRequestMatching = () => {
    mutate(Number(id), {
      onSuccess: () => {
        refetch();
      }
    });
  };

  return (
    <Wrapper>
      <BasicInfo coach={data} />

      {myAuth?.nickname !== data.coachName && (
        <>
          <WhiteSpace $height={30} />
          <Buttons>
            <CustomButton
              size="full-sharp"
              variant="outlined"
              onClick={handleKaKaoLink}
            >
              카카오톡 문의하기
            </CustomButton>
            <CustomButton
              size="full-sharp"
              variant="contained"
              onClick={handleRequestMatching}
              disabled={data.isContacted || data.isMatched}
            >
              {data.isContacted || data.isMatched
                ? "신청완료"
                : "코치님께 매칭 신청하기"}
            </CustomButton>
          </Buttons>
        </>
      )}

      <WhiteSpace $height={50} />
      <DetailInfo coach={data} />
      <WhiteSpace $height={80} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;

  button {
    flex: 1;
  }
`;
export default Coach;
