import { ISimpleCoach } from "@/models/coach.model";
import { styled } from "styled-components";
import Profile from "../Profile";

interface MyCoachesProfileListProps {
  data: ISimpleCoach[];
}

const MyCoachesProfileList = ({ data }: MyCoachesProfileListProps) => {
  return (
    <MyCoachesProfileListStyle>
      {data.map((d) => (
        <Profile
          key={d.coachId}
          profileId={d.coachId}
          profileName={d.coachName}
          profileImageUrl={d.profileImageUrl}
          state="mycoaches"
          size="114px"
        />
      ))}
    </MyCoachesProfileListStyle>
  );
};

const MyCoachesProfileListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  justify-items: center;
`;

export default MyCoachesProfileList;
