import { handlers as coachHandlers } from "./coach";
import { handlers as routineHandlers } from "./routine";
import { handlers as memberHandler } from "./member";

export const handlers = [
  ...coachHandlers,
  ...routineHandlers,
  ...memberHandler
];
