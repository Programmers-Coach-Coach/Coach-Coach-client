import StampImage from "@/assets/images/stamp.png";
import { utcDatetoLocal } from "@/utils/format";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import dayjs from "dayjs";
import { useState } from "react";
import styled from "styled-components";

const ExerciseCalender = () => {
  const today = dayjs();
  const [value, setValue] = useState(today);

  // utc 시간 문자열을 dayjs 객체로 변환
  const [selectedDates, setSelectedDates] = useState<dayjs.Dayjs[]>([
    utcDatetoLocal("2024-08-11T11:47:11Z"),
    utcDatetoLocal("2024-08-12T11:47:11Z"),
    utcDatetoLocal("2024-08-13T11:47:11Z")
  ]);

  return (
    <Wrapper>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          maxDate={today}
          // showDaysOutsideCurrentMonth
          slots={{
            day: (props) => {
              const isSelected = selectedDates.some((date) =>
                date.isSame(props.day, "day")
              );

              return (
                <StyledPickersDay {...props} $isSelected={isSelected}>
                  {props.day.date()}
                </StyledPickersDay>
              );
            }
          }}
        />
      </LocalizationProvider>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const StyledPickersDay = styled(PickersDay)<{
  $isSelected: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-image: ${({ $isSelected }) =>
      $isSelected ? `url(${StampImage})` : "none"};
    background-size: cover;
    background-position: center;
    z-index: 1;
  }

  color: ${({ $isSelected }) => ($isSelected ? "white" : "black")};
`;
export default ExerciseCalender;
