import { IPopularCoach } from "@/models/home.model";

export const popularCoaches: IPopularCoach[] = [
  {
    coachId: 0,
    coachName: "김코치",
    coachImageUrl:
      "https://res.heraldm.com/content/image/2024/04/12/20240412050389_0.jpg",
    description:
      "몸은 거짓말을 하지 않는다. 1회당 100만원으로 싸게 모시겠습니다.",
    likes: 1,
    coachingSports: [
      { sportsId: 0, sportsName: "헬스" },
      { sportsId: 9, sportsName: "크로스핏" }
    ]
  },
  {
    coachId: 1,
    coachName: "이코치",
    coachImageUrl:
      "https://res.heraldm.com/content/image/2024/04/12/20240412050389_0.jpg",
    description:
      "몸은 거짓말을 하지 않는다. 1회당 100만원으로 싸게 모시겠습니다. 사실 구라고요. 1회당 300만원으로 모시겠습니다.",
    likes: 100,
    coachingSports: [{ sportsId: 2, sportsName: "요가" }]
  },
  {
    coachId: 2,
    coachName: "박코치코치코치야",
    coachImageUrl:
      "https://res.heraldm.com/content/image/2024/04/12/20240412050389_0.jpg",
    description:
      "몸은 거짓말을 하지 않는다. 1회당 100만원으로 싸게 모시겠습니다. 사실 구라고요. 1회당 300만원으로 모시겠습니다.",
    likes: 20,
    coachingSports: [
      { sportsId: 10, sportsName: "배드민턴" },
      { sportsId: 9, sportsName: "크로스핏" },
      { sportsId: 7, sportsName: "테니스" }
    ]
  }
];
