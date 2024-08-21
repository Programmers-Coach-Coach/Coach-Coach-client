import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";

dayjs.extend(relativeTime);
dayjs.extend(utc);

dayjs.locale("ko"); // 한글로 표시하기 위함(ex. 하루 전)

export const timeAgo = (utcDate: string): string => {
  return dayjs.utc(utcDate).local().fromNow();
};

export const timeFormat = (utcDate: string): string => {
  return dayjs.utc(utcDate).format("YYYY.MM.DD");
};
