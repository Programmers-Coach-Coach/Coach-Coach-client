import { ICoach } from "@/models/coach.model";
import { LineClamp } from "@/style/global";
import styled from "styled-components";

interface Props {
  coach: ICoach;
}
const Coach = ({ coach }: Props) => {
  return (
    <CoachStyle>
      <Image src={coach.profileImageUrl || undefined} alt="" />
      <Text>
        <h3>{coach.coachName}</h3>
        <LineClamp $line={2}>{coach.coachIntroduction}</LineClamp>
      </Text>
    </CoachStyle>
  );
};

const CoachStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  height: 116px;
`;

const Image = styled.img`
  flex-shrink: 0;
  width: 114px;
  height: 114px;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  object-fit: cover;
`;
const Text = styled.div``;
export default Coach;
