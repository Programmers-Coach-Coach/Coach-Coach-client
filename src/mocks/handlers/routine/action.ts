import { API_PATH } from "@/constants/apiPath";
import { routineDetail } from "@/data/routine";
import { IAction } from "@/models/routine.model";
import { responseMessage } from "@/data/responseMessage";
import { http, HttpResponse } from "msw";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_V1 = "/api/v1";

const postActionData = http.post(
  `${BASE_URL}${API_V1}${API_PATH.routine}/:routineId/:categoryId`,
  async ({ request, params }) => {
    const newAction = (await request.json()) as Omit<IAction, "actionId">;
    const { categoryId } = params;

    const categoryIndex = routineDetail.categoryList.findIndex(
      (category) => category.categoryId === Number(categoryId)
    );

    if (categoryIndex !== -1) {
      let actionIdCounter = routineDetail.categoryList[
        categoryIndex
      ].actionList.reduce((max, action) => Math.max(max, action.actionId), 0);

      const createdAction: IAction = {
        actionId: ++actionIdCounter,
        ...newAction
      };

      routineDetail.categoryList[categoryIndex].actionList.push(createdAction);
    }

    return HttpResponse.json({
      responseMessage: "Action added successfully"
    });
  }
);

const patchActionData = http.patch(
  `${BASE_URL}${API_V1}${API_PATH.routine}/:routineId/:categoryId/:actionId`,
  async ({ request, params }) => {
    const updateAction = (await request.json()) as Omit<IAction, "actionId">;
    const { categoryId, actionId } = params;

    const categoryIndex = routineDetail.categoryList.findIndex(
      (category) => category.categoryId === Number(categoryId)
    );

    if (categoryIndex !== -1) {
      const actionIndex = routineDetail.categoryList[
        categoryIndex
      ].actionList.findIndex((action) => action.actionId === Number(actionId));

      if (actionIndex !== -1) {
        routineDetail.categoryList[categoryIndex].actionList[actionIndex] = {
          ...routineDetail.categoryList[categoryIndex].actionList[actionIndex],
          ...updateAction
        };
      }
    }

    return HttpResponse.json({
      responseMessage
    });
  }
);

const deleteActionData = http.delete(
  `${BASE_URL}${API_V1}${API_PATH.routine}/:routineId/:categoryId/:actionId`,
  ({ params }) => {
    const { categoryId, actionId } = params;

    const categoryIndex = routineDetail.categoryList.findIndex(
      (category) => category.categoryId === Number(categoryId)
    );

    if (categoryIndex !== -1) {
      const actionIndex = routineDetail.categoryList[
        categoryIndex
      ].actionList.findIndex((action) => action.actionId === Number(actionId));

      if (actionIndex !== -1) {
        routineDetail.categoryList[categoryIndex].actionList.splice(
          actionIndex,
          1
        );
      }
    }

    return HttpResponse.json({
      responseMessage
    });
  }
);

export const handlers = [postActionData, patchActionData, deleteActionData];
