import { API_PATH } from "@/constants/apiPath";
import { myCoaches } from "@/data/coach";
import { http, HttpResponse } from "msw";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_V1 = "/api/v1";

const getMyCoaches = http.get(
  `${BASE_URL}${API_V1}${API_PATH.myCoaches}`,
  () => {
    return HttpResponse.json(myCoaches);
  }
);

export const handlers = [getMyCoaches];
