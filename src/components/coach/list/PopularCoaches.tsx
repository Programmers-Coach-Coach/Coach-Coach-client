import EmptyVersion2 from "@/components/common/Empty/EmptyVersion2";
import Loading from "@/components/loading/Loading";
import { useGetPopularCoaches } from "@/hooks/useHome";
import styled from "styled-components";
import PopularCoach from "./PopularCoach";

const PopularCoaches = () => {
  const { data, isLoading, isError } = useGetPopularCoaches();

  if (isLoading) return <Loading textDisabled={true} />;
  if (isError || !data)
    return (
      <EmptyVersion2 imgName="warning" height="300px">
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
  padding: 30px 0;
`;

export default PopularCoaches;
