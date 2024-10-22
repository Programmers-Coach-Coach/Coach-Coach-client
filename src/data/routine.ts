import { IGetRoutineList } from "@/models/routine.model";
import * as faker from "@/utils/faker";
import { sportList } from "./sportsList";

export const getRoutines: IGetRoutineList = {
  completionPercentage: 0,
  routines: Array.from({ length: 5 }).map((_, i) => ({
    routineId: i + 1,
    routineName: faker.fullname(),
    sportName: sportList[Math.floor(Math.random() * 12)].sportName,
    isCompleted: Math.random() < 0.5,
    actions: Array.from({ length: 3 }).map((_, j) => ({
      actionId: i * 100 + j * 100 + 1,
      actionName: faker.fullname(),
      sets: 3,
      countsOrMinutes: Math.floor(Math.random() * 60)
    }))
  }))
};

getRoutines.completionPercentage = Math.floor(
  (getRoutines.routines.filter((routine) => routine.isCompleted).length /
    getRoutines.routines.length) *
    100
);
