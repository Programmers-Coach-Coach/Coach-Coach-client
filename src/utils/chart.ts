import { IDataPoint, TChartType } from "@/models/record.model";
import dayjs from "dayjs";

export const getChartType = (id: number): TChartType => {
  switch (id) {
    case 0:
      return "weight";
    case 1:
      return "skeletalMuscle";
    case 2:
      return "fatPercentage";
    default:
      return "bmi";
  }
};

export const getUnit = (id: number) => {
  switch (id) {
    case 0:
      return "kg";
    case 1:
      return "kg";
    case 2:
      return "%";
    default:
      return "";
  }
};

export const getChartSorted = (data: IDataPoint[]): IDataPoint[] => {
  return data.slice().sort((a, b) => {
    return dayjs(a.recordDate).isBefore(dayjs(b.recordDate)) ? -1 : 1;
  });
};
