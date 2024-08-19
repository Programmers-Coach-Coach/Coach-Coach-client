import { handlers as coachHandlers } from "./coach";
import { handlers as profileHandlers } from "./profile";
import { handlers as routineHandlers } from "./routine";

export const handlers = [
  ...coachHandlers,
  ...profileHandlers,
  ...routineHandlers
];
