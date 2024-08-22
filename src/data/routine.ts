import { IRoutine, IRoutineDetails } from "@/models/routine.model";
import * as faker from "@/utils/faker";

export const PER_PAGE = 10;

export const routines: IRoutine[] = Array.from({ length: 12 }).map((_, i) => ({
  routineId: i + 1,
  routineName: faker.fullname(),
  sportId: Math.floor(Math.random() * 12)
}));

export const routineDetail: Omit<IRoutineDetails, "routineName"> = {
  categoryList: Array.from({ length: 3 }).map((_, i) => ({
    categoryId: i + 1,
    categoryName: faker.fullname(),
    isCompleted: false,
    actionList: Array.from({ length: 4 }).map((_, j) => ({
      actionId: i * 100 + j * 100 + 1,
      actionName: faker.fullname(),
      sets: faker.fullname(),
      countOrMinutes: Math.floor(Math.random() * 12) + " minutes",
      description: faker.fullname()
    }))
  }))
};
