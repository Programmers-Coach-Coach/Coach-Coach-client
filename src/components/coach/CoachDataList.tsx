import { ICoach } from "@/models/coach.model";
import styled from "styled-components";
import Coach from "./Coach";

interface Props {
  coachList: ICoach[];
}
const CoachDataList = ({ coachList }: Props) => {
  return (
    <CoachListStyle>
      {coachList.map((coach) => (
        <Coach coach={coach} key={coach.coachId} />
      ))}
    </CoachListStyle>
  );
};

const CoachListStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export default CoachDataList;
