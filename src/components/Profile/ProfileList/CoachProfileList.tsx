import { IGetMyCoach } from "@/models/coach.model";
import { styled } from "styled-components";
import Empty from "@/components/common/Empty/Empty";
import CoachProfile from "../CoachProfile";

interface CoachProfileListProps {
  data: IGetMyCoach[];
}

const CoachProfileList = ({ data }: CoachProfileListProps) => {
  return (
    <>
      {data.length ? (
        <CoachProfileListSytle>
          {data.map((d) => (
            <CoachProfile key={d.coachId} coach={d} />
          ))}
        </CoachProfileListSytle>
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

const CoachProfileListSytle = styled.div`
  justify-items: center;
`;

export default CoachProfileList;
