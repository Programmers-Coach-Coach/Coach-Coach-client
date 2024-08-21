import { handlers as coachHandlers } from "./coach";
import { handlers as routineHandlers } from "./routine";
import { handlers as memberHandler } from "./member";
import { handlers as profileHandlers } from "./profile";

export const handlers = [
  ...coachHandlers,
  ...profileHandlers,
  ...routineHandlers,
  ...memberHandler
];