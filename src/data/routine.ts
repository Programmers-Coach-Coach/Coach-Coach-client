import { IGetRoutineList } from "@/models/routine.model";
import * as faker from "@/utils/faker";
import { sportList } from "./sportsList";

const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

// 랜덤한 요일 배열 생성 함수
const getRandomDays = (): string[] => {
  const numberOfDays = Math.floor(Math.random() * DAYS.length) + 1;
  const shuffledDays = [...DAYS].sort(() => 0.5 - Math.random());
  return shuffledDays.slice(0, numberOfDays);
};

export const getRoutines: IGetRoutineList = {
  completionPercentage: 0,
  routines: Array.from({ length: 5 }).map((_, i) => ({
    routineId: i + 1,
    routineName: faker.fullname(),
    sportName: sportList[Math.floor(Math.random() * 12)].sportName,
    repeats: getRandomDays(),
    isCompleted: Math.random() < 0.5,
    actions: Array.from({ length: 3 }).map((_, j) => ({
      actionId: i * 100 + j * 100 + 1,
      actionName: faker.fullname(),
      sets: 3,
      countsOrMinutes: Math.floor(Math.random() * 60)
    }))
  }))
};
