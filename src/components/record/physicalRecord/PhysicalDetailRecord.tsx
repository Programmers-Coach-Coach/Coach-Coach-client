import { IDetailPhysicalMetrics } from "@/models/record.model";
import styled from "styled-components";

const valueToFixed = (value: number | null) => {
  if (value) {
    const [integer, decimal] = value.toFixed(1).split(".");
    return `${integer.padStart(2, "0")}.${decimal}`;
  } else {
    return "-";
  }
};

interface Props extends IDetailPhysicalMetrics {}
const PhysicalDetailRecord = ({
  weight,
  skeletalMuscle,
  fatPercentage,
  bmi
}: Props) => {
  return (
    <Wrapper>
      <Columns>
        <div>체중</div>
        <div>골격근량</div>
        <div>체지방률</div>
        <div>BMI</div>
      </Columns>
      <Datas>
        <div>{valueToFixed(weight)}</div>
        <div>{valueToFixed(skeletalMuscle)}</div>
        <div>{valueToFixed(fatPercentage)}</div>
        <div>{valueToFixed(bmi)}</div>
      </Datas>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Columns = styled.div`
  display: flex;
  padding: 5px 0;

  font-size: 8px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.45px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.5);

  div {
    display: flex;
    flex-direction: column;
    gap: 0;
    justify-content: center;
    width: 25%;
    text-align: center;
  }
`;
const Datas = styled.div`
  display: flex;
  gap: 7px;
  width: 100%;
  padding: 10px 0;

  font-size: 10px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: -0.25px;

  div {
    width: 25%;
    color: #9ea3b2;
    text-align: center;
  }
`;

export default PhysicalDetailRecord;
