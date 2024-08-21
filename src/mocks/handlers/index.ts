import { handlers as coachHandlers } from "./coach";
import { handlers as homeHandlers } from "./home";
import { handlers as routineHandlers } from "./routine";

export const handlers = [...homeHandlers, ...coachHandlers, ...routineHandlers];
