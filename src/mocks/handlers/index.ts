import { handlers as coachHandlers } from "./coach";
import { handlers as homeHandlers } from "./home";
import { handlers as profileHandlers } from "./profile";

export const handlers = [...homeHandlers, ...coachHandlers, ...profileHandlers];
