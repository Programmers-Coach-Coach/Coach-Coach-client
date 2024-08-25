import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";

dayjs.extend(relativeTime);
dayjs.extend(utc);

dayjs.locale("ko"); // 한글로 표시하기 위함(ex. 하루 전)

// UTC 시간을 로컬 시간대로 변환하고, 현재 시점ㅇ으로부터 상대적인 시간(예: "3 분 전")을 반환
export const timeAgo = (utcDate: string): string => {
  return dayjs.utc(utcDate).local().fromNow();
};

// UTC 시간을 로컬 시간대로 변환하여 dayjs 객체로 반환
export const utcDatetoLocal = (utcDate: string): Dayjs => {
  return dayjs.utc(utcDate).local();
};

// UTC 시간을 로컬 시간대로 변환하고, "YYYY.MM.DD" 형식으로 포멧
export const timeFormat = (utcDate: string): string => {
  return dayjs.utc(utcDate).local().format("YYYY-MM-DD");
};

export const todayFormat = (): string => {
  return dayjs().local().format("YYYY-MM-DD");
};
