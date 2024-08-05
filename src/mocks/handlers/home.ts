import { popularCoaches } from "@/data/coach";
import { sportsList } from "@/data/sportsList";
import { http, HttpResponse } from "msw";
import { API_PATH } from "@/constants/apiPath";

// const BASE_URL = import.meta.env.VITE_BASE_URL;
const BASE_URL = "https://api.coach-coach.site";
const API_V1 = "/api/v1";

const getHomeData = http.get(`${BASE_URL}${API_V1}${API_PATH.main}`, () => {
  return HttpResponse.json({
    sports: sportsList,
    coaches: popularCoaches
  });
});

export const handlers = [getHomeData];
