import { useGetPopularCoaches } from "@/hooks/useHome";
import styled from "styled-components";
import PopularCoach from "../coach/PopularCoach";
import EmptyVersion2 from "../common/Empty/EmptyVersion2";
import Loading from "../loading/Loading";

const PopularCoaches = () => {
  const { data, isLoading, isError } = useGetPopularCoaches();

  if (isLoading) return <Loading />;
  if (isError || !data)
    return (
      <EmptyVersion2 imgName="warning" height="100px">
        서버가
        <br />
        죽었어요
      </EmptyVersion2>
    );

  return (
    <Wrapper>
      {data?.map((coach, i) => (
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
