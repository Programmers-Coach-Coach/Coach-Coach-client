export interface IRoutine {
  routineId: number;
  routineName: string;
  sportId: number;
}

export interface IRoutines {
  routineList: IRoutine[];
  totalCount: number;
  currentPage: number;
}

export interface IGetRoutine {
  coachId?: number;
  userId?: number;
  page: number;
}
