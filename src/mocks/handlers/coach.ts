import { http, HttpResponse } from "msw";
import { API_PATH } from "@/constants/apiPath";
import { coachPagination } from "@/data/coach";

const BASE_URL = "https://api.coach-coach.site";
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

export const handlers = [getCoachAll];
