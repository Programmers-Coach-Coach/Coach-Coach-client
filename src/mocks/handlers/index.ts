import { handlers as homeHandlers } from "./home";
import { handlers as profileHandlers } from "./myDetail";
import { handlers as getCoachProfileData } from "./myCoachDetail";
export const handlers = [
  ...homeHandlers,
  ...profileHandlers,
  ...getCoachProfileData
];
