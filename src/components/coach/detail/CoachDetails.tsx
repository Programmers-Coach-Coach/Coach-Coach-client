import Review from "@/components/coach/review/Review";
import DefaultTab from "@/components/tab/DefaultTab";
import { ICoachDetail } from "@/models/coach.model";
import { ScreenStatus } from "@/pages/Coach";
import { useState } from "react";
import styled from "styled-components";
import ActiveCenterMap from "./ActiveCenterMap";
import Introduction from "./Introduction";

interface Props {
  coach: ICoachDetail;
  onChangeScreenStatus: (status: ScreenStatus) => void;
}
const CoachDetails = ({ coach, onChangeScreenStatus }: Props) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div>
      <DefaultTab
        value={activeTabIndex}
        onTabChange={handleTabChange}
        labels={["자기소개", "활동 센터", "리뷰"]}
      />
      <Details>
        {activeTabIndex === 0 && (
          <Introduction
            coachingSports={coach.coachingSports}
            introduction={coach.coachIntroduction}
          />
        )}
        {activeTabIndex === 1 && (
          <ActiveCenterMap roadNameAddress={coach.activeCenter} />
        )}
        {activeTabIndex === 2 && (
          <Review
            coachId={coach.coachId}
            isMatched={coach.isMatched}
            onChangeScreenStatus={onChangeScreenStatus}
          />
        )}
      </Details>
    </div>
  );
};

const Details = styled.div`
  margin: 20px 0;
  height: 100%;
`;

export default CoachDetails;
