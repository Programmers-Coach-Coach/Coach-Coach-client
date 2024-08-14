import { API_PATH } from "@/constants/apiPath";
import { popularCoaches } from "@/data/coach";
import { sportsList } from "@/data/sportsList";
import { http, HttpResponse } from "msw";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_V1 = "/api/v1";

const getHomeData = http.get(`${BASE_URL}${API_V1}${API_PATH.main}`, () => {
  return HttpResponse.json({
    sports: sportsList,
    coaches: popularCoaches
  });
});

export const handlers = [getHomeData];
