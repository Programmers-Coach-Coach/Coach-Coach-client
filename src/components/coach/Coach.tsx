import profilePath from "@/assets/images/profile.png";
import { ICoach } from "@/models/coach.model";
import { LineClamp } from "@/style/global";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Heart from "../common/InputField/CheckBox/Heart";
import { CoachingSports } from "./PopularCoaches";

interface Props {
  coach: ICoach;
}
const Coach = ({ coach }: Props) => {
  const navigate = useNavigate();
  return (
    <CoachStyle onClick={() => navigate(`/coach/${coach.coachId}`)}>
      <Image src={coach.profileImageUrl || profilePath} alt={coach.coachName} />
      <Text>
        <LineClamp $line={1} className="name">
          {coach.coachName}
        </LineClamp>
        <LineClamp $line={2} className="desc">
          {coach.coachIntroduction}
        </LineClamp>
        <CoachingSportStyle className="coaching-sports">
          {coach.coachingSports.map((item) => (
            <li key={item.sportId}>#{item.sportName}</li>
          ))}
        </CoachingSportStyle>
      </Text>
      <Heart checked={coach.isLiked} size="24" id={coach.coachId} />
      <Local>{coach.localAddress}</Local>
    </CoachStyle>
  );
};

const CoachStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  cursor: pointer;
`;

const Image = styled.img`
  flex-shrink: 0;
  width: 114px;
  height: 114px;
  border-radius: 8px;
  object-fit: cover;
  background: ${({ theme }) => theme.color.gray1};

  @media only screen and (max-width: 500px) {
    width: 90px;
    height: 90px;
  }
`;

const Text = styled.div`
  overflow: hidden;
  flex: 1;

  .name {
    font-weight: 600;
    margin-bottom: 4px;
  }

  .desc {
    font-size: 12px;
    margin-bottom: 10px;
  }
`;

const CoachingSportStyle = styled(CoachingSports)`
  position: absolute;
  bottom: 0;
`;

const Local = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;

  font-size: 10px;
  color: ${({ theme }) => theme.color.gray3};
`;
export default Coach;
