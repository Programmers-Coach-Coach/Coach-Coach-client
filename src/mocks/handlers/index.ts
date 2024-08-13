import { handlers as homeHandlers } from "./home";
import { handlers as routineHandlers } from "./routine";

export const handlers = [...homeHandlers, ...routineHandlers];
