import { API_PATH } from "@/constants/apiPath";
import { responseMessage } from "@/data/responseMessage";
import { http, HttpResponse } from "msw";
import { IPostPatchRoutine } from "@/models/routine.model";
import { getRoutines } from "@/data/routine";
import { sportList } from "@/data/sportsList";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_V = "/api/v2";

const getRoutinesData = http.get(
  `${BASE_URL}${API_V}${API_PATH.routine}`,
  () => {
    return HttpResponse.json(getRoutines);
  }
);

const getSportNameById = (id: number): string => {
  const sport = sportList.find((sport) => sport.sportId === id);
  return sport ? sport.sportName : "Unknown Sport";
};

const postRoutineData = http.post(
  `${BASE_URL}${API_V}${API_PATH.routine}`,
  async ({ request }) => {
    const newRoutine = (await request.json()) as IPostPatchRoutine;

    const createdActions = newRoutine.actions.map((action) => ({
      ...action,
      actionId: Math.random()
    }));

    const createdRoutine = {
      routineId: ++getRoutines.routines.length,
      routineName: newRoutine.routineName,
      sportName: getSportNameById(newRoutine.sportId),
      isCompleted: false,
      actions: createdActions
    };

    getRoutines.routines.push(createdRoutine);

    return HttpResponse.json({
      responseMessage
    });
  }
);

const patchRoutineData = http.patch(
  `${BASE_URL}${API_V}${API_PATH.routine}/:id`,
  async ({ request, params }) => {
    const { id } = params;

    // 명시적으로 타입을 지정
    const updatedData = (await request.json()) as IPostPatchRoutine;

    const routineIndex = getRoutines.routines.findIndex(
      (routine) => routine.routineId === Number(id)
    );

    if (routineIndex !== -1) {
      getRoutines.routines[routineIndex] = {
        ...getRoutines.routines[routineIndex],
        routineName: updatedData.routineName,
        sportName: getSportNameById(updatedData.sportId)
      };
    }

    return HttpResponse.json({
      responseMessage
    });
  }
);

const deleteRoutineData = http.delete(
  `${BASE_URL}${API_V}${API_PATH.routine}/:id`,
  ({ params }) => {
    const { id } = params;

    const routineIndex = getRoutines.routines.findIndex(
      (routine) => routine.routineId === Number(id)
    );
    if (routineIndex !== -1) {
      getRoutines.routines.splice(routineIndex, 1); // 루틴 삭제
    }

    return HttpResponse.json({
      responseMessage
    });
  }
);

export const handlers = [
  getRoutinesData,
  postRoutineData,
  patchRoutineData,
  deleteRoutineData
];
