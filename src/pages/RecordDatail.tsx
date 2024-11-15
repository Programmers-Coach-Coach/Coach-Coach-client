import SvgIcon from "@/components/Icon/SvgIcon";
import Loading from "@/components/loading/Loading";
import ExerciseDetail from "@/components/record/exerciseRecord/ExerciseDetail";
import PhysicalRecord from "@/components/record/physicalRecord/PhysicalRecord";
import { useGetDetailRecord } from "@/hooks/queries/useRecord";
import useQueryString from "@/hooks/useQueryString";
import { addDay, subtractDay } from "@/utils/format";
import { useState } from "react";

import styled from "styled-components";

const RecordDatail = () => {
  const { getRecordDate, setRecordDate } = useQueryString();
  const [date, setDate] = useState<string | null>(getRecordDate());

  const { data, isError, isLoading } = useGetDetailRecord(date);

  const handleChangeDate = (dir: "prev" | "next") => {
    const directions = {
      prev: () => {
        if (date) {
          setRecordDate(subtractDay(date));
          setDate(subtractDay(date));
        }
      },
      next: () => {
        if (date) {
          setRecordDate(addDay(date));
          setDate(addDay(date));
        }
      }
    };
    directions[dir]();
  };

  if (isLoading) {
    return <Loading />;
  }

  if (!data || isError) {
    return (
      <div>
        페이지 일부를 불러오는 데 오류가 생겼어요. <br />
        잠시 후 다시 시도해주세요
      </div>
    );
  }

  return (
    <Wrapper>
      <DateWrapper>
        <SvgIcon
          name="arrow"
          width="24px"
          height="24px"
          stroke="#fff"
          className="prev-date__btn"
          onClick={() => handleChangeDate("prev")}
        />
        <h2>{date}</h2>
        <SvgIcon
          name="arrow"
          width="24px"
          height="24px"
          stroke="#fff"
          className="next_date__btn"
          onClick={() => handleChangeDate("next")}
        />
      </DateWrapper>
      <ExerciseDetail routines={data?.records || []} />
      <PhysicalRecord
        weight={data.weight}
        skeletalMuscle={data.skeletalMuscle}
        fatPercentage={data.fatPercentage}
        bmi={data.bmi}
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
  gap: 30px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);

  .prev-date__btn {
    transform: rotate(90deg);
    cursor: pointer;
  }
  .next_date__btn {
    transform: rotate(-90deg);
    cursor: pointer;
  }
`;
export default RecordDatail;
