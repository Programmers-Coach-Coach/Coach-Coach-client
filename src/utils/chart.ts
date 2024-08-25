import { TChartType } from "@/models/record.model";

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
