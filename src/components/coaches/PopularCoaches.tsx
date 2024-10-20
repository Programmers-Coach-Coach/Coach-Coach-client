import { IPopularCoach } from "@/models/coach.model";
import styled from "styled-components";
import PopularCoach from "../coach/PopularCoach";

interface Props {
  popularCoaches: IPopularCoach[];
}

const PopularCoaches = ({ popularCoaches }: Props) => {
  return (
    <Wrapper>
      {popularCoaches?.map((coach, i) => (
        <PopularCoach key={coach.coachId} coach={coach} index={i} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  overflow: hidden;
`;

export default PopularCoaches;
