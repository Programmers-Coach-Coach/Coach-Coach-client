import { ICoachList, IPopularCoach, ISimpleCoach } from "@/models/coach.model";
import * as faker from "@/utils/faker";

export const popularCoaches: IPopularCoach[] = Array.from({ length: 3 }).map(
  (_, i) => ({
    coachId: i,
    coachName: faker.fullname(),
    coachImageUrl: faker.imageUrl(),
    description: faker.paragraph(),
    countOfLikes: faker.randomNumber(1000),
    liked: faker.boolean(),
    coachingSports: [
      { sportId: faker.randomNumber(1000), sportName: "헬스" },
      { sportId: faker.randomNumber(1000), sportName: "크로스핏" }
    ]
  })
);

const LEN = 10;
export const coachList: ICoachList = {
  data: Array.from({ length: LEN }).map((_, i) => ({
    coachId: i,
    coachName: faker.fullname(),
    localInfo: faker.local(),
    profileImageUrl: faker.imageUrl(),
    coachIntroduction: faker.paragraph(),
    coachingSports: [
      { sportId: faker.randomNumber(1000), sportName: "배드민턴" },
      { sportId: faker.randomNumber(1000), sportName: "크로스핏" },
      { sportId: faker.randomNumber(1000), sportName: "테니스" }
    ],
    countOfReviews: faker.randomNumber(1000),
    rating: faker.rating(),
    liked: faker.boolean(),
    countOfLikes: faker.randomNumber(1000)
  })),
  totalCount: LEN,
  currentPage: 1
};

export const PER_PAGE = 20;
const TOTAL_PAGE = 3;

export const coachPagination: ICoachList[] = Array.from({
  length: TOTAL_PAGE
}).map((_, i) => ({
  data: Array.from({ length: PER_PAGE }).map((_, j) => ({
    coachId: (i + 1) * 100 + j, // 중복되지 않도록 설정
    coachName: faker.fullname(),
    localInfo: faker.local(),
    profileImageUrl: faker.imageUrl(),
    coachIntroduction: faker.paragraph(),
    coachingSports: [
      { sportId: faker.randomNumber(1000), sportName: "배드민턴" },
      { sportId: faker.randomNumber(1000), sportName: "크로스핏" },
      { sportId: faker.randomNumber(1000), sportName: "테니스" }
    ],
    countOfReviews: faker.randomNumber(1000),
    rating: faker.rating(),
    liked: faker.boolean(),
    countOfLikes: faker.randomNumber(1000)
  })),
  totalCount: TOTAL_PAGE * PER_PAGE,
  currentPage: i + 1
}));

export const myCoaches: ISimpleCoach[] = Array.from({ length: 7 }).map(
  (_, i) => ({
    coachId: i,
    coachName: faker.fullname(),
    profileImageUrl: faker.imageUrl()
  })
);
