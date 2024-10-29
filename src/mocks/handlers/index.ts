import { handlers as coachHandlers } from "./coach";
import { handlers as routineHandlers } from "./routine";

export const handlers = [...coachHandlers, ...routineHandlers];
