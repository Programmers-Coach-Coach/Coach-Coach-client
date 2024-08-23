import { API_PATH } from "@/constants/apiPath";
import { routineDetail, routines } from "@/data/routine";
import { responseMessage } from "@/data/responseMessage";
import { http, HttpResponse } from "msw";
import { IPostRoutine } from "@/models/routine.model";
import { SPORTS_NAMES } from "@/constants/sportsConstants";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_V1 = "/api/v1";

const getRoutinesData = http.get(
  `${BASE_URL}${API_V1}${API_PATH.routine}`,
  () => {
    return HttpResponse.json(routines);
  }
);

const getRoutineData = http.get(
  `${BASE_URL}${API_V1}${API_PATH.routine}/:routineId`,
  ({ params }) => {
    const { routineId } = params;

    const routine = routines.find(
      (routine) => routine.routineId === Number(routineId)
    );

    const routineName = routine ? routine.routineName : "";

    const newRoutineDetail = {
      ...routineDetail,
      routineName: routineName
    };

    return HttpResponse.json(newRoutineDetail);
  }
);

let routineIdCounter = routines.reduce(
  (max, routine) => Math.max(max, routine.routineId),
  0
);

const postRoutineData = http.post(
  `${BASE_URL}${API_V1}${API_PATH.routine}`,
  async ({ request }) => {
    const newRoutine = (await request.json()) as Omit<
      IPostRoutine,
      "routineId"
    >;
    const createdRoutine = {
      routineId: ++routineIdCounter,
      routineName: newRoutine.routineName,
      sportName: SPORTS_NAMES[newRoutine.sportId - 1]
    };

    routines.push(createdRoutine);

    return HttpResponse.json({
      responseMessage
    });
  }
);

const patchRoutineData = http.patch(
  `${BASE_URL}${API_V1}${API_PATH.routine}/:id`,
  async ({ request, params }) => {
    const { id } = params;

    // 명시적으로 타입을 지정
    const updatedData = (await request.json()) as Omit<
      IPostRoutine,
      "routineId"
    >;

    const routineIndex = routines.findIndex(
      (routine) => routine.routineId === Number(id)
    );
    if (routineIndex !== -1) {
      routines[routineIndex] = {
        ...routines[routineIndex],
        routineName: updatedData.routineName,
        sportName: SPORTS_NAMES[updatedData.sportId - 1]
      };
    }

    return HttpResponse.json({
      responseMessage
    });
  }
);

const deleteRoutineData = http.delete(
  `${BASE_URL}${API_V1}${API_PATH.routine}/:id`,
  ({ params }) => {
    const { id } = params;

    const routineIndex = routines.findIndex(
      (routine) => routine.routineId === Number(id)
    );
    if (routineIndex !== -1) {
      routines.splice(routineIndex, 1); // 루틴 삭제
    }

    return HttpResponse.json({
      responseMessage
    });
  }
);

export const handlers = [
  getRoutinesData,
  getRoutineData,
  postRoutineData,
  patchRoutineData,
  deleteRoutineData
];
