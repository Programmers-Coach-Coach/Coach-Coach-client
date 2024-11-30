import StampImage from "@/assets/images/stamp.svg";
import Loading from "@/components/loading/Loading";
import { useGetStamps } from "@/hooks/queries/useRecord";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import dayjs, { Dayjs } from "dayjs";
import qs from "qs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ExerciseCalender = () => {
  const today = dayjs();
  const [value, setValue] = useState(today);
  const [year, setYear] = useState(today.year());
  const [month, setMonth] = useState(today.month() + 1);

  const navigate = useNavigate();

  const { data, isError, isLoading } = useGetStamps(year, month);

  const handleDayClick = (date: Dayjs) => {
    const fommattedDate = date.format("YYYY-MM-DD");
    const recordId = data?.records.find(
      (record) => record.recordDate === fommattedDate
    )?.recordId;

    const query = qs.stringify({ date: fommattedDate, recordId });
    navigate(`/record?${query}`);
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

  const selectedDates = data.records
    .filter((stamp) => stamp.isCompleted)
    .map((stamp) => dayjs(stamp.recordDate));

  return (
    <Wrapper>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ResponsiveDateCalendar
          value={value}
          views={["year", "month", "day"]}
          onChange={(newValue) => {
            setValue(newValue);
            setYear(newValue.year());
            setMonth(newValue.month() + 1);
          }}
          maxDate={today}
          slots={{
            day: (props) => {
              const isSelected = selectedDates.some((date) =>
                date.isSame(props.day, "day")
              );

              return (
                <StyledPickersDay
                  {...props}
                  $isSelected={isSelected}
                  onClick={() => handleDayClick(props.day)}
                >
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

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  padding: 0;
`;

const ResponsiveDateCalendar = styled(DateCalendar)`
  width: 100% !important;

  .MuiPickersCalendarHeader-root {
    .MuiIconButton-root {
      color: #878686; // 그레이 색상 추가
    }
  }

  &.MuiSvgIcon-root
    MuiSvgIcon-fontSizeMedium
    MuiPickersCalendarHeader-switchViewIcon
    css-1tkx1wf-MuiSvgIcon-root-MuiPickersCalendarHeader-switchViewIcon {
    fill: #fff !important;
  }

  .MuiTypography-root.MuiDayCalendar-weekDayLabel {
    color: #878686;

    &[aria-label="일요일"] {
      color: #ff4d4d;
    }

    &[aria-label="토요일"] {
      color: #4d79ff;
    }
  }
`;

const StyledPickersDay = styled(PickersDay)<{
  $isSelected: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.color.background : "transparent"};

  &[aria-colindex="1"] {
    color: #ff4d4d !important;
  }
  &[aria-colindex="7"] {
    color: #4d79ff !important;
  }
  &:not([aria-colindex="1"]):not([aria-colindex="7"]) {
    color: #fff !important; // 평일
  }

  &:after {
    content: "";
    position: absolute;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-image: ${({ $isSelected }) =>
      $isSelected ? `url(${StampImage})` : "none"};
    background-size: cover;
    background-position: center;
    z-index: 1;
  }

  &.Mui-selected {
    border: 1px solid #0075ff;
    background-color: rgba(0, 117, 255, 0.2) !important;
  }
`;

export default ExerciseCalender;
