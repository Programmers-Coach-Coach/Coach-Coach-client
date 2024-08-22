export interface IRoutine {
  routineId: number;
  routineName: string;
  sportId: number;
}

export interface IGetRoutine {
  coachId?: number;
  userId?: number;
}

export interface IAction {
  actionId: number;
  actionName: string;
  sets: string;
  countOrMinutes: string;
  description: string;
}

export interface ICategory {
  categoryId: number;
  categoryName: string;
  isCompleted: boolean;
}

export interface ICategoryList extends ICategory {
  actionList: IAction[];
}

export interface IRoutineDetails {
  routineName: string;
  categoryList: ICategoryList[];
}
