import { ISimpleCoach } from "@/models/coach.model";
import { styled } from "styled-components";
import Profile from "../Profile";
import Empty from "@/components/common/Empty/Empty";

interface MyCoachesProfileListProps {
  data: ISimpleCoach[];
}

const MyCoachesProfileList = ({ data }: MyCoachesProfileListProps) => {
  return (
    <>
      {data.length ? (
        <MyCoachesProfileListStyle>
          {data.map((d) => (
            <Profile
              key={d.coachId}
              profileId={d.coachId}
              profileName={d.coachName}
              profileImageUrl={d.profileImageUrl}
              state="mycoaches"
              width="114px"
              height="114px"
            />
          ))}
        </MyCoachesProfileListStyle>
      ) : (
        <Empty
          name="coach"
          size="150px"
          color="text"
          descriptions="나의 코치가 없습니다"
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
