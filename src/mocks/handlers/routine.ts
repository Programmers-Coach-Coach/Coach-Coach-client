import { http, HttpResponse } from "msw";
import { API_PATH } from "@/constants/apiPath";
import { responseMessage, routines } from "@/data/routine";

// const BASE_URL = import.meta.env.VITE_BASE_URL;
const BASE_URL = "https://api.coach-coach.site";
const API_V1 = "/api/v1";

const getRoutineData = http.get(
  `${BASE_URL}${API_V1}${API_PATH.routine}`,
  () => {
    return HttpResponse.json({
      routineList: routines
    });
  }
);

const postRoutineData = http.post(
  `${BASE_URL}${API_V1}${API_PATH.routine}`,
  () => {
    return HttpResponse.json({
      responseMessage
    });
  }
);

const patchRoutineData = http.patch(
  `${BASE_URL}${API_V1}${API_PATH.routine}:id`,
  () => {
    return HttpResponse.json({
      responseMessage
    });
  }
);

const deleteRoutineData = http.delete(
  `${BASE_URL}${API_V1}${API_PATH.routine}:id`,
  () => {
    return HttpResponse.json({
      responseMessage
    });
  }
);

export const handlers = [
  getRoutineData,
  postRoutineData,
  patchRoutineData,
  deleteRoutineData
];
