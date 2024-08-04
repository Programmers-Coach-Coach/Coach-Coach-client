import { popularCoaches } from "@/data/coach";
import { sportsList } from "@/data/sportsList";
import { http, HttpResponse } from "msw";
import { API_PATH } from "@/constants/apiPath";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_V1 = "/api/v1";

export const handlers = [
  http.get(`${BASE_URL}${API_V1}${API_PATH.main}`, () => {
    return HttpResponse.json({
      sports: sportsList,
      coaches: popularCoaches
    });
  })
];