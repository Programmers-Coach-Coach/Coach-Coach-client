import { http, HttpResponse } from "msw";
import { API_PATH } from "@/constants/apiPath";
import { responseRoutines } from "@/data/routine";
import { IRoutine } from "@/models/routine.model";
import { responseMessage } from "@/data/responseMessage";

// const BASE_URL = import.meta.env.VITE_BASE_URL;
const BASE_URL = "https://api.coach-coach.site";
const API_V1 = "/api/v1";

const getRoutineData = http.get(
  `${BASE_URL}${API_V1}${API_PATH.routine}`,
  ({ request }) => {
    const url = new URL(request.url);

    const pageParams = url.searchParams.get("page");

    const pageParamsInt = Number(pageParams);

    const responseRoutine = responseRoutines[pageParamsInt - 1];

    if (!responseRoutine) {
      return HttpResponse.json({ responseMessage });
    } else {
      return HttpResponse.json(responseRoutine);
    }
  }
);

let routineIdCounter = responseRoutines.reduce((maxId, page) => {
  // 각 페이지의 routineList를 순회하며 최대 routineId 값을 찾음
  const maxIdOnPage = page.routineList.reduce(
    (max, routine) => Math.max(max, routine.routineId),
    0
  );
  return Math.max(maxId, maxIdOnPage);
}, 0);

const postRoutineData = http.post(
  `${BASE_URL}${API_V1}${API_PATH.routine}`,
  async ({ request }) => {
    const newRoutine = (await request.json()) as Omit<IRoutine, "routineId">;
    const createdRoutine = {
      ...newRoutine,
      routineId: ++routineIdCounter
    };

    // 마지막 페이지 가져오기
    const lastPage = responseRoutines[responseRoutines.length - 1];

    // 마지막 페이지에 루틴이 10개 이상이면 새로운 페이지 생성
    if (lastPage.routineList.length >= 10) {
      const newPage = {
        routineList: [createdRoutine],
        totalCount: lastPage.totalCount + 1,
        currentPage: lastPage.currentPage + 1
      };
      responseRoutines.push(newPage);
    } else {
      // 기존 마지막 페이지에 새로운 루틴 추가
      lastPage.routineList.push(createdRoutine);
      lastPage.totalCount += 1;
    }

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
    const updatedData = (await request.json()) as Omit<IRoutine, "routineId">;
    // 모든 페이지에서 해당 루틴을 찾아 업데이트
    responseRoutines.forEach((page) => {
      const routineIndex = page.routineList.findIndex(
        (routine) => routine.routineId === Number(id)
      );
      if (routineIndex !== -1) {
        page.routineList[routineIndex] = {
          ...page.routineList[routineIndex],
          ...updatedData
        };
      }
    });
    return HttpResponse.json({
      responseMessage
    });
  }
);

const deleteRoutineData = http.delete(
  `${BASE_URL}${API_V1}${API_PATH.routine}/:id`,
  ({ params }) => {
    const { id } = params;

    // 모든 페이지에서 해당 루틴을 찾아 삭제
    responseRoutines.forEach((page, pageIndex) => {
      const routineIndex = page.routineList.findIndex(
        (routine) => routine.routineId === Number(id)
      );
      if (routineIndex !== -1) {
        page.routineList.splice(routineIndex, 1); // 루틴 삭제
        page.totalCount -= 1;

        // 페이지가 빈 배열이 되었을 때 해당 페이지 제거
        if (page.routineList.length === 0) {
          responseRoutines.splice(pageIndex, 1);
        }
      }
    });
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
