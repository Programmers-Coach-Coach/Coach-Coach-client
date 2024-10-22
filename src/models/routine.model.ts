export interface IGetAction {
  actionId: number;
  actionName: string;
  sets: number;
  countsOrMinutes: number;
}

interface IPostPatchAction {
  actionName: string;
  sets: number;
  countsOrMinutes: number;
}

export interface IGetRoutine {
  routineId: number;
  routineName: string;
  sportName: string;
  isCompleted: boolean;
  actions: IGetAction[];
}

export interface IPostPatchRoutine {
  userId?: number;
  routineName: string;
  sportId: number;
  actions: IPostPatchAction[];
}

export interface IGetRoutineList {
  completionPercentage: number;
  routines: IGetRoutine[];
}

export interface IRoutineQuery {
  coachId?: number;
  userId?: number;
}

export interface ICompletedRoutine {
  completedRoutineId: number;
}
