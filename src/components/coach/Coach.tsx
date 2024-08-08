import { ICoach } from "@/models/coach.model";
import { LineClamp } from "@/style/global";
import styled from "styled-components";
import Heart from "../common/InputField/CheckBox/Heart";

interface Props {
  coach: ICoach;
}
const Coach = ({ coach }: Props) => {
  return (
    <CoachStyle>
      <Image src={coach.profileImageUrl || undefined} alt="" />
      <Text>
        <LineClamp $line={1} className="b3">
          {coach.coachName}
        </LineClamp>
        <LineClamp $line={2} className="desc">
          {coach.coachIntroduction}
        </LineClamp>
        <ul className="coaching-sports">
          {coach.coachingSports.map((item) => (
            <li key={item.sportId}>#{item.sportName}</li>
          ))}
        </ul>
      </Text>
      <Heart checked={coach.liked} size="small" />
      <Local>{coach.localInfo}</Local>
    </CoachStyle>
  );
};

const CoachStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  position: relative;
`;

const Image = styled.img`
  flex-shrink: 0;
  width: 114px;
  height: 114px;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  object-fit: cover;

  @media only screen and (max-width: 500px) {
    width: 90px;
    height: 90px;
  }
`;

const Text = styled.div`
  overflow: hidden;

  .desc {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .coaching-sports {
    display: flex;
    align-items: center;
    gap: 9px;

    li {
      display: inline-flex;
      font-size: 9px;
      padding: 4px 6px;
      border-radius: ${({ theme }) => theme.borderRadius.default};
      color: ${({ theme }) => theme.color.background};
      background-color: ${({ theme }) => theme.color.secondary};
    }
  }
`;

const Local = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;

  font-size: 10px;
  color: ${({ theme }) => theme.color.gray3};
`;
export default Coach;
