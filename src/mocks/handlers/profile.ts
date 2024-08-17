import { API_PATH } from "@/constants/apiPath";
import { coachProfile } from "@/data/coachProfile";
import { profile } from "@/data/profile";
import { http, HttpResponse } from "msw";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_V1 = "/api/v1";

const getProfileData = http.get(
  `${BASE_URL}${API_V1}${API_PATH.mypage}`,
  () => {
    return HttpResponse.json(profile);
  }
);

const getCoachProfileData = http.get(
  `${BASE_URL}${API_V1}${API_PATH.coachMypage}`,
  () => {
    return HttpResponse.json(coachProfile);
  }
);

export const handlers = [getProfileData, getCoachProfileData];
