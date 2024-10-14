import { ISimpleCoach } from "@/models/coach.model";
import { styled } from "styled-components";
import Empty from "@/components/common/Empty/Empty";
import CoachProfile from "../CoachProfile";

interface MyCoachesProfileListProps {
  data: ISimpleCoach[];
}

const InqueryCoachProfileList = ({ data }: MyCoachesProfileListProps) => {
  const filteredData = data.filter((d) => d.isMatching === false);
  return (
    <>
      {filteredData.length ? (
        <InqueryCoachProfileListStyle>
          {filteredData.map((d) => (
            <CoachProfile
              key={d.coachId}
              profileName={d.coachName}
              profileImageUrl={d.profileImageUrl}
            />
          ))}
        </InqueryCoachProfileListStyle>
      ) : (
        <Empty
          name="coach"
          size="80px"
          color="gray3"
          descriptions="문의한 코치가 없습니다"
          padding="10px"
        />
      )}
    </>
  );
};

const InqueryCoachProfileListStyle = styled.div`
  justify-items: center;
`;

export default InqueryCoachProfileList;
