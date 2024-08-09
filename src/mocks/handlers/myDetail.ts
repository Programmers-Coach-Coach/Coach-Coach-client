import { profile } from "@/data/profile";
import { http, HttpResponse } from "msw";

// const BASE_URL = import.meta.env.VITE_BASE_URL;
const BASE_URL = "https://api.coach-coach.site";
const API_V1 = "/api/v1";

const getProfileData = http.get(`${BASE_URL}${API_V1}/auth/user/me`, () => {
  return HttpResponse.json(profile);
});

export const handlers = [getProfileData];
