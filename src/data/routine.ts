import { IRoutine, IRoutines } from "@/models/routine.model";
import * as faker from "@/utils/faker";

export const PER_PAGE = 10;

const routines: IRoutine[] = Array.from({ length: 48 }).map((_, i) => ({
  routineId: i + 1,
  routineName: faker.fullname(),
  sportId: Math.floor(Math.random() * 12)
}));

export const responseRoutines: IRoutines[] = [];
for (let i = 0; i < routines.length; i += PER_PAGE) {
  const chunk = routines.slice(i, i + PER_PAGE);
  const chunkData = {
    routineList: chunk,
    totalCount: routines.length,
    currentPage: Math.floor(i / PER_PAGE) + 1
  };
  responseRoutines.push(chunkData);
}
