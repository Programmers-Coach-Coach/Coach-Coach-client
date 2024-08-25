import Loading from "@/components/loading/Loading";
import ExerciseDetail from "@/components/record/exerciseRecord/ExerciseDetail";
import PhysicalRecord from "@/components/record/physicalRecord/PhysicalRecord";
import { useGetDetailRecord } from "@/hooks/queries/useRecord";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const RecordDatail = () => {
  // const [date, setDate] = useState<string | null>(null);
  const [searchParams] = useSearchParams();

  const date = searchParams.get("date");
  const recordId = searchParams.get("recordId");

  const { data, isError, isLoading } = useGetDetailRecord(
    recordId ? Number(recordId) : null
  );

  console.log(data);
  if (isError) {
    return (
      <div>
        페이지 일부를 불러오는 데 오류가 생겼어요. <br />
        잠시 후 다시 시도해주세요
      </div>
    );
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <DateWrapper>
        <h2>{date}</h2>
      </DateWrapper>
      <ExerciseDetail routines={data?.records || []} />
      <PhysicalRecord
        weight={data?.weight || null}
        skeletalMuscle={data?.skeletalMuscle || null}
        fatPercentage={data?.fatPercentage || null}
        bmi={data?.bmi || null}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DateWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;
export default RecordDatail;
