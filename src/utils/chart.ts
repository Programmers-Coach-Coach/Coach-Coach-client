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
