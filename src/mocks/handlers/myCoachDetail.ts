import { coachProfile } from "@/data/coachProfile";
import { http, HttpResponse } from "msw";

// const BASE_URL = import.meta.env.VITE_BASE_URL;
const BASE_URL = "https://api.coach-coach.site";
const API_V1 = "/api/v1";

const getCoachProfileData = http.get(`${BASE_URL}${API_V1}/coaches`, () => {
  return HttpResponse.json(coachProfile);
});

export const handlers = [getCoachProfileData];
