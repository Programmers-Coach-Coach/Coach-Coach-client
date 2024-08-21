import { IMatchMembers } from "@/models/member.model";
import * as faker from "@/utils/faker";

export const matchMembers: IMatchMembers[] = Array.from({ length: 10 }).map(
  (_, i) => ({
    userId: i,
    userName: faker.fullname(),
    profileImageUrl: faker.imageUrl(),
    isMatching: faker.boolean()
  })
);
