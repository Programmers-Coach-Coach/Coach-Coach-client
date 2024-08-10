import { handlers as homeHandlers } from "./home";
import { handlers as coachHandlers } from "./coach.js";

export const handlers = [...homeHandlers, ...coachHandlers];
