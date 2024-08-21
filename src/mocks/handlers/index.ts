import { handlers as coachHandlers } from "./coach";
import { handlers as homeHandlers } from "./home";
import { handlers as profileHandlers } from "./profile";
import { handlers as routineHandlers } from "./routine";
import { handlers as memberHandler } from "./member";

export const handlers = [
  ...homeHandlers,
  ...coachHandlers,
  ...profileHandlers,
  ...routineHandlers,
  ...memberHandler
];
