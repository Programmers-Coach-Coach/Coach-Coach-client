import { API_PATH } from "@/constants/apiPath";
import { matchMembers } from "@/data/member";
import { responseMessage } from "@/data/responseMessage";
import { http, HttpResponse } from "msw";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_V1 = "/api/v1";

const getMatchMembers = http.get(
  `${BASE_URL}${API_V1}${API_PATH.matchMembers}`,
  () => {
    return HttpResponse.json(matchMembers);
  }
);

const deleteMatchMember = http.delete(
  `${BASE_URL}${API_V1}${API_PATH.matchMember}`,
  async ({ params }) => {
    const { userId } = params;

    const index = matchMembers.findIndex(
      (member) => member.userId === Number(userId)
    );

    if (index !== -1) {
      matchMembers.splice(index, 1);
    }

    return HttpResponse.json({
      responseMessage
    });
  }
);

export const handlers = [getMatchMembers, deleteMatchMember];
