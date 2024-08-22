import { API_PATH } from "@/constants/apiPath";
import { routineDetail } from "@/data/routine";
import { ICategoryList } from "@/models/routine.model";
import { responseMessage } from "@/data/responseMessage";
import { http, HttpResponse } from "msw";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_V1 = "/api/v1";

let categoryIdCounter = routineDetail.categoryList.reduce(
  (max, category) => Math.max(max, category.categoryId),
  0
);

const postCategoryData = http.post(
  `${BASE_URL}${API_V1}${API_PATH.routine}/:routineId`,
  async ({ request }) => {
    const newCategory = (await request.json()) as string;

    const createdRoutine: ICategoryList = {
      categoryId: ++categoryIdCounter,
      categoryName: newCategory,
      isCompleted: false,
      actionList: []
    };

    routineDetail.categoryList.push(createdRoutine);

    return HttpResponse.json({
      responseMessage
    });
  }
);

const patchCategoryData = http.patch(
  `${BASE_URL}${API_V1}${API_PATH.routine}/:routineId/:categoryId`,
  async ({ request, params }) => {
    const { categoryId } = params;

    // 명시적으로 타입을 지정
    const updateCategory = (await request.json()) as string;

    const categoryIndex = routineDetail.categoryList.findIndex(
      (category) => category.categoryId === Number(categoryId)
    );
    if (categoryIndex !== -1) {
      routineDetail.categoryList[categoryIndex] = {
        ...routineDetail.categoryList[categoryIndex],
        categoryName: updateCategory
      };
    }

    return HttpResponse.json({
      responseMessage
    });
  }
);

const deleteCategoryData = http.delete(
  `${BASE_URL}${API_V1}${API_PATH.routine}/:routineId/:categoryId`,
  ({ params }) => {
    const { categoryId } = params;

    const categoryIndex = routineDetail.categoryList.findIndex(
      (category) => category.categoryId === Number(categoryId)
    );
    if (categoryIndex !== -1) {
      routineDetail.categoryList.splice(categoryIndex, 1); // 루틴 삭제
    }

    return HttpResponse.json({
      responseMessage
    });
  }
);

const postCompletedCategoryData = http.post(
  `${BASE_URL}${API_V1}${API_PATH.routine}/:routineId/:categoryId/completed`,
  ({ params }) => {
    const { categoryId } = params;

    const categoryIndex = routineDetail.categoryList.findIndex(
      (category) => category.categoryId === Number(categoryId)
    );
    if (categoryIndex !== -1) {
      routineDetail.categoryList[categoryIndex] = {
        ...routineDetail.categoryList[categoryIndex],
        isCompleted: !routineDetail.categoryList[categoryIndex].isCompleted
      };
    }

    return HttpResponse.json({
      responseMessage
    });
  }
);

export const handlers = [
  postCategoryData,
  patchCategoryData,
  deleteCategoryData,
  postCompletedCategoryData
];
