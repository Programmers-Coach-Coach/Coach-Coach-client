import { ISimpleCoach } from "@/models/coach.model";
import * as faker from "@/utils/faker";

export const myCoaches: ISimpleCoach[] = Array.from({ length: 7 }).map(
  (_, i) => ({
    coachId: i,
    coachName: faker.fullname(),
    profileImageUrl: faker.imageUrl()
  })
);
