import { ICoachingSports } from "@/models/sports.model";
import { Sports } from "@/style/theme";
import styled from "styled-components";
import SportChip from "../common/Chip/SportChip";

interface Props {
  introduction: string;
  coachingSports: ICoachingSports[];
}
const Introduction = ({ introduction, coachingSports }: Props) => {
  return (
    <Wrapper>
      <div className="coaching-sports__info">
        {coachingSports.map((sport) => (
          <SportChip
            key={sport.sportId}
            sportId={sport.sportId as Sports}
            sportName={sport.sportName}
            size="small"
          />
        ))}
      </div>
      <div className="introduction__info">{introduction}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  background-color: #111111;
  border-radius: 24px;
  padding: 20px;

  .coaching-sports__info {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 7px;
    row-gap: 5px;
    margin-right: auto;
  }

  .introduction__info {
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.65px;
  }
`;
export default Introduction;
