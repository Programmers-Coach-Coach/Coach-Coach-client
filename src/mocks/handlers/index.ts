import { handlers as coachHandlers } from "./coach";
import { handlers as routineHandlers } from "./routine/routine";
import { handlers as memberHandler } from "./member";
import { handlers as categoryHandler } from "./routine/category";
import { handlers as actionHandler } from "./routine/action";

export const handlers = [
  ...coachHandlers,
  ...routineHandlers,
  ...memberHandler,
  ...categoryHandler,
  ...actionHandler
];
