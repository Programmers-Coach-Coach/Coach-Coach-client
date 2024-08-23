export interface IPhysicalMetrics {
  weight?: number;
  skeletalMuscle?: number;
  fatPercentage?: number;
  bmi?: number;
}

export interface ICalendarStamp {
  recordId: number;
  recordDate: string;
  isCompleted: boolean; // isCompleted 가 true일 때만 스탬프 찍기
}
