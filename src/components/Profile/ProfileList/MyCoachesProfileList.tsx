import { ISimpleCoach } from "@/models/coach.model";
import { styled } from "styled-components";
import Profile from "../Profile";
import Empty from "@/components/common/Empty/Empty";

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
            <Profile
              key={d.coachId}
              profileId={d.coachId}
              profileName={d.coachName}
              profileImageUrl={d.profileImageUrl}
              state="mycoaches"
              width="80px"
              height="80px"
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  justify-items: center;
`;

export default MyCoachesProfileList;
