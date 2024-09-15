import profilePath from "@/assets/images/profile.png";
import { ICoach } from "@/models/coach.model";
import { LineClamp } from "@/style/global";
import { getImgixUrl } from "@/utils/imgix";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Heart from "../common/InputField/CheckBox/Heart";
import { CoachingSports } from "./PopularCoaches";

interface Props {
  coach: ICoach;
}
const Coach = ({ coach }: Props) => {
  const navigate = useNavigate();

  const profileImageUrl = coach.profileImageUrl
    ? getImgixUrl(coach.profileImageUrl, {
        w: 228,
        h: 228,
        auth: "format"
      })
    : profilePath;

  return (
    <CoachStyle onClick={() => navigate(`/coach/${coach.coachId}`)}>
      <Image src={profileImageUrl} alt={coach.coachName} />
      <Text>
        <LineClamp $line={1} className="name">
          {coach.coachName}
        </LineClamp>
        <LineClamp $line={2} className="desc">
          {coach.coachIntroduction}
        </LineClamp>
        <CoachingSportStyle className="coaching-sports">
          {coach.coachingSports.slice(0, 2).map((item) => (
            <li key={item.sportId}>#{item.sportName}</li>
          ))}
          {coach.coachingSports.length > 2 && (
            <span className="etc">외 {coach.coachingSports.length - 2}개</span>
          )}
        </CoachingSportStyle>
      </Text>
      <Heart checked={coach.isLiked} size="24" id={coach.coachId} />

      <Local>{coach.localAddress}</Local>
    </CoachStyle>
  );
};

const CoachStyle = styled.div`
  display: flex;
  /* align-items: center; */
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
  height: 100%;
  padding: 4px;

  .name {
    font-weight: 600;
    margin-bottom: 4px;
  }

  .desc {
    font-size: 12px;
    margin-bottom: 10px;
    white-space: pre-line; /* 줄바꿈 처리 */
  }
`;

const CoachingSportStyle = styled(CoachingSports)`
  position: absolute;
  bottom: 0;

  .etc {
    color: ${({ theme }) => theme.color.gray3};
    font-size: 12px;
  }
`;

export const Local = styled.div`
  position: absolute;
  top: 10px;
  right: 0;

  font-size: 10px;
  color: ${({ theme }) => theme.color.gray3};
`;
export default Coach;
