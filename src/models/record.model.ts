import { IGetAction } from "./routine.model";

export interface IPhysicalMetrics {
  weight?: number;
  skeletalMuscle?: number;
  fatPercentage?: number;
  bmi?: number;
}

export interface IPhysicalMetricsWithDate extends IPhysicalMetrics {
  recordDate: string;
}

export interface ICalendarStamp {
  recordId: number;
  recordDate: string;
  isCompleted: boolean; // isCompleted 가 true일 때만 스탬프 찍기
}

export interface ICalendarStamps {
  records: ICalendarStamp[];
}

export interface IDetailPhysicalMetrics {
  weight: number | null;
  skeletalMuscle: number | null;
  fatPercentage: number | null;
  bmi: number | null;
}

export interface IExerciseRoutine {
  coachId: number | null; //null이면 본인이 생성한 루틴
  coachName: string | null;
  coachProfileImageUrl: string | null;
  routineName: string | null; // 추가됨 (삭제한 루틴의 경우 null로 표시)
  completedCategories: IExerciseCategory[];
}

export interface IDetailRecords extends IDetailPhysicalMetrics {
  completedRoutines: ICompletedRoutine[];
}

export interface ICompletedRoutine {
  routineId: number;
  routineName: number;
  sportName: string;
  actions: IGetAction[];
}

export interface IExerciseCategory {
  categoryId: number;
  categoryName: string;
  actions: IGetAction[];
}

// export interface IAction {
//   actionId: number;
//   actionName: string;
//   countOrMinutes: string | null;
//   sets: number | null;
//   description: string | null;
// }

export type TChartType = "weight" | "skeletalMuscle" | "fatPercentage" | "bmi";

export interface Props {
  type: TChartType;
}

export interface IDataPoint {
  recordDate: string;
  value: number;
}
