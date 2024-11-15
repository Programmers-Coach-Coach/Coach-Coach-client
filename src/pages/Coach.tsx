import CoachDetails from "@/components/coach/CoachDetails";
import MatchButtons from "@/components/coach/MatchButtons";
import Loading from "@/components/loading/Loading";
import CoachProfile from "@/components/Profile/CoachProfile";
import useCoachDetail from "@/hooks/queries/useCoachDetail";
import { useFetchAuth } from "@/hooks/useFetchAuth";
import { WhiteSpace } from "@/style/global";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Coach = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useCoachDetail(Number(id));
  const { data: myAuth } = useFetchAuth();

  if (isLoading) return <Loading />;
  if (isError || !data) {
    return <div>무언가 잘못됨</div>;
  }

  const {
    coachId,
    coachName,
    profileImageUrl,
    localAddress,
    coachingSports,
    isLiked,
    isMatched
  } = data;

  const coach = {
    coachId,
    coachName,
    profileImageUrl,
    localAddress,
    coachingSports,
    isLiked,
    isMatching: isMatched
  };

  return (
    <Wrapper>
      <CoachProfile coach={coach} />
      {/* // TODO: 나 인지 확인 수정 (이유: 중복 이름 가능 변경) */}
      {myAuth?.nickname !== data.coachName && (
        <>
          <WhiteSpace $height={30} />
          <MatchButtons
            coachId={data.coachId}
            chattingUrl={data.chattingUrl}
            matchButtonDisabled={data.isContacted || data.isMatched}
          />
        </>
      )}
      <CoachDetails coach={data} />
      {/* <DetailInfo coach={data} /> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Coach;
