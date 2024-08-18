import { API_PATH } from "@/constants/apiPath";
import { coachPagination, myCoaches } from "@/data/coach";
import { http, HttpResponse } from "msw";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_V1 = "/api/v1";

const getCoachAll = http.get(
  `${BASE_URL}${API_V1}${API_PATH.getCoachAll}`,
  ({ request }) => {
    const url = new URL(request.url);

    const pageParams = url.searchParams.get("page");

    const pageParamsInt = Number(pageParams);

    const responseData = coachPagination[pageParamsInt - 1];

    if (!responseData) {
      return HttpResponse.json({ error: "No data found" }, { status: 404 });
    }

    return HttpResponse.json(responseData);
  }
);

const getMyCoaches = http.get(
  `${BASE_URL}${API_V1}${API_PATH.myCoaches}`,
  () => {
    return HttpResponse.json(myCoaches);
  }
);

export const handlers = [getCoachAll, getMyCoaches];
