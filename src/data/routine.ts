import { IResponseMessage, IRoutine } from "@/models/routine.model";
import * as faker from "@/utils/faker";

export let routines: IRoutine[] = Array.from({ length: 3 }).map((_, i) => ({
  routineId: i,
  routineName: "3대 500",
  sportId: 0
}));

export const responseMessage: IResponseMessage = {
  statusCode: 201,
  message: "성공"
};

export const routineDB = {
  create: (data: Omit<IRoutine, "routineId">) => {
    const newData = {
      routineId: faker.randomNumber(1000),
      routineName: data.routineName,
      sportId: data.sportId
    };
    routines.push(newData);
  },
  update: (id: number, data: Omit<IRoutine, "routineId">) => {
    const findData = routines.find((r) => r.routineId === id);
    if (findData) {
      findData.routineName = data.routineName;
      findData.sportId = data.sportId;
      return "루틴이 수정되었습니다.";
    } else {
      return "존재하지 않는 루틴입니다.";
    }
  },
  delete: (id: number) => {
    routines = routines.filter((routine) => routine.routineId !== id);
  }
};
