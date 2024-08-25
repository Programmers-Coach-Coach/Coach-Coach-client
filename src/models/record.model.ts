import { IAction } from "./routine.model";

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
  routineName: string;
  completedCategories: IExerciseCategory[];
}

export interface IDetailRecords extends IDetailPhysicalMetrics {
  records: IExerciseRoutine[];
}

export interface IExerciseCategory {
  categoryId: number;
  categoryName: string;
  actions: IAction[];
}

// export interface IAction {
//   actionId: number;
//   actionName: string;
//   countOrMinutes: string | null;
//   sets: number | null;
//   description: string | null;
// }
