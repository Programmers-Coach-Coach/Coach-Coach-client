import CoachDetails from "@/components/coach/CoachDetails";
import MatchButtons from "@/components/coach/MatchButtons";
import Summary from "@/components/coach/Summary";
import Loading from "@/components/loading/Loading";
import CoachProfile from "@/components/Profile/CoachProfile";
import useCoachDetail from "@/hooks/queries/useCoachDetail";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export type ScreenStatus = "addReview" | "showProfile";

const Coach = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useCoachDetail(Number(id));

  const [screenStatus, setScreenStatus] = useState<ScreenStatus>("showProfile");

  const handleScreenChange = (status: ScreenStatus) => {
    setScreenStatus(status);
  };

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
      <CoachProfile coach={coach} overlayDisabled={true} />
      {screenStatus === "showProfile" && (
        <>
          <Summary
            activeHours={data.activeHours}
            reviewRating={data.reviewRating}
            memberCount={data.totalUserCount}
          />
          {!data.isSelf && (
            <>
              <MatchButtons
                coachId={data.coachId}
                chattingUrl={data.chattingUrl}
                matchButtonDisabled={data.isContacted || data.isMatched}
              />
            </>
          )}
          <CoachDetails
            coach={data}
            onChangeScreenStatus={handleScreenChange}
          />
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Coach;
