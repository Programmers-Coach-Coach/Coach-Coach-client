import { forwardRef, useImperativeHandle, useState } from "react";
import styled from "styled-components";

const DAYS = ["일", "월", "화", "수", "목", "금", "토"];

interface RepeatContentProps {}

interface ChildComponentHandle {
  childFunction: () => void;
}

const RepeatContent = forwardRef<ChildComponentHandle, RepeatContentProps>(
  (_, ref) => {
    useImperativeHandle(ref, () => ({
      childFunction() {
        alert(selectedDays);
      }
    }));

    const [selectedDays, setSelectedDays] = useState<string[]>([]);

    const handleClick = (day: string) => {
      setSelectedDays((prev) =>
        prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
      );
    };

    return (
      <RepeatContentStyle>
        요일 반복
        <DaysStyle>
          {DAYS.map((day, index) => (
            <DayStyle
              key={index}
              onClick={() => handleClick(day)}
              isSelected={selectedDays.includes(day)}
            >
              {day}
            </DayStyle>
          ))}
        </DaysStyle>
      </RepeatContentStyle>
    );
  }
);

const RepeatContentStyle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  padding: 0 20px 0 40px;

  @media (max-width: 600px) {
    font-size: 4vw;
  }
`;

const DaysStyle = styled.div`
  display: flex;
`;

const DayStyle = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isSelected"
})<{ isSelected: boolean }>`
  font-size: 18px;
  padding: 20px;
  cursor: pointer;
  border-radius: 10px;
  background-color: ${({ isSelected }) =>
    isSelected ? "rgba(0, 117, 255, 0.4)" : "transparent"};
  transition:
    background-color 0.3s,
    color 0.3s,
    font-weight 0.3s,
    border 0.3s;

  @media (max-width: 600px) {
    font-size: 3vw;
    padding: 3vw;
  }
`;

export default RepeatContent;
