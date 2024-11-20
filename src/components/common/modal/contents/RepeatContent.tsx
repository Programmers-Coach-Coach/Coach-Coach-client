import { useRoutineStore } from "@/store/routine.store";
import { forwardRef, useImperativeHandle, useState } from "react";
import styled from "styled-components";

const DAYS = {
<<<<<<< HEAD
  SUNDAY: "일",
  MONDAY: "월",
  TUESDAY: "화",
  WEDNESDAY: "수",
  THURSDAY: "목",
  FRIDAY: "금",
  SATURDAY: "토"
=======
  SUN: "일",
  MON: "월",
  TUE: "화",
  WED: "수",
  THU: "목",
  FRI: "금",
  SAT: "토"
>>>>>>> main
};

interface RepeatContentProps {
  repeats: string[];
  closeModal: () => void;
}

interface ChildComponentHandle {
  childFunction: () => void;
}

const RepeatContent = forwardRef<ChildComponentHandle, RepeatContentProps>(
  ({ repeats, closeModal }, ref) => {
    useImperativeHandle(ref, () => ({
      childFunction() {
        setRepeats(selectedDays);
        closeModal();
      }
    }));

    const [selectedDays, setSelectedDays] = useState<string[]>(repeats || []);
    const setRepeats = useRoutineStore((set) => set.setRepeats);

    const handleClick = (day: string) => {
      setSelectedDays((prev) =>
        prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
      );
    };

    return (
      <RepeatContentStyle>
        요일 반복
        <DaysStyle>
          {Object.entries(DAYS).map(([day, value]) => (
            <DayStyle
              key={day}
              onClick={() => handleClick(day)}
              isSelected={selectedDays.includes(day)}
            >
              {value}
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
