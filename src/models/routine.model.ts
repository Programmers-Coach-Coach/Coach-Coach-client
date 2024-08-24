interface IRoutine {
  routineId: number;
  routineName: string;
}

export interface IGetRoutine extends IRoutine {
  sportName: string;
}

export interface IPostRoutine extends IRoutine {
  userId?: number;
  sportId: number;
}

export interface IGetQuery {
  coachId?: number;
  userId?: number;
}

export interface IAction {
  actionId: number;
  actionName: string;
  sets: number;
  countOrMinutes: string;
  description?: string;
}

export interface ICategoryName {
  categoryName: string;
}

export interface ICategory extends ICategoryName {
  categoryId: number;
  isCompleted?: boolean;
}

export interface ICategoryList extends ICategory {
  actionList: IAction[];
}

export interface IRoutineDetails {
  routineName: string;
  categoryList: ICategoryList[];
}

export interface ICompletedCategory {
  completedCategoryId: number;
}
