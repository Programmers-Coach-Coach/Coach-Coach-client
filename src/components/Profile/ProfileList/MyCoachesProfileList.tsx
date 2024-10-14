import { ISimpleCoach } from "@/models/coach.model";
import { styled } from "styled-components";
import Empty from "@/components/common/Empty/Empty";
import CoachProfile from "../CoachProfile";

interface MyCoachesProfileListProps {
  data: ISimpleCoach[];
}

const MyCoachesProfileList = ({ data }: MyCoachesProfileListProps) => {
  const filteredData = data.filter((d) => d.isMatching === true);
  return (
    <>
      {filteredData.length ? (
        <MyCoachesProfileListStyle>
          {filteredData.map((d) => (
            <CoachProfile
              key={d.coachId}
              profileName={d.coachName}
              profileImageUrl={d.profileImageUrl}
            />
          ))}
        </MyCoachesProfileListStyle>
      ) : (
        <Empty
          name="coach"
          size="80px"
          color="gray3"
          descriptions="나의 코치가 없습니다"
          padding="10px"
        />
      )}
    </>
  );
};

const MyCoachesProfileListStyle = styled.div`
  justify-items: center;
`;

export default MyCoachesProfileList;
