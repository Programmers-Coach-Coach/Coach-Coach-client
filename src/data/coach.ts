import { ICoachList, IPopularCoach } from "@/models/coach.model";

export const popularCoaches: IPopularCoach[] = [
  {
    coachId: 0,
    coachName: "김코치",
    coachImageUrl:
      "https://res.heraldm.com/content/image/2024/04/12/20240412050389_0.jpg",
    description:
      "몸은 거짓말을 하지 않는다. 1회당 100만원으로 싸게 모시겠습니다.",
    countOfLikes: 1,
    liked: false,
    coachingSports: [
      { sportId: 0, sportName: "헬스" },
      { sportId: 9, sportName: "크로스핏" }
    ]
  },
  {
    coachId: 1,
    coachName: "이코치",
    coachImageUrl:
      "https://res.heraldm.com/content/image/2024/04/12/20240412050389_0.jpg",
    description:
      "몸은 거짓말을 하지 않는다. 1회당 100만원으로 싸게 모시겠습니다. 사실 구라고요. 1회당 300만원으로 모시겠습니다.",
    countOfLikes: 1,
    liked: true,
    coachingSports: [{ sportId: 2, sportName: "요가" }]
  },
  {
    coachId: 2,
    coachName: "박코치코치코치야",
    coachImageUrl:
      "https://res.heraldm.com/content/image/2024/04/12/20240412050389_0.jpg",
    description:
      "몸은 거짓말을 하지 않는다. 1회당 100만원으로 싸게 모시겠습니다. 사실 구라고요. 1회당 300만원으로 모시겠습니다.",
    countOfLikes: 1,
    liked: false,
    coachingSports: [
      { sportId: 10, sportName: "배드민턴" },
      { sportId: 9, sportName: "크로스핏" },
      { sportId: 7, sportName: "테니스" }
    ]
  }
];

export const coachList: ICoachList = {
  data: [
    {
      coachId: 0,
      coachName: "김코치",
      localInfo: "서울 도봉구 마들로",
      profileImageUrl:
        "https://res.heraldm.com/content/image/2024/04/12/20240412050389_0.jpg",
      coachIntroduction:
        "몸은 거짓말을 하지 않는다. 1회당 100만원으로 싸게 모시겠습니다. 사실 구라고요. 1회당 300만원으로 모시겠습니다.",
      coachingSports: [
        { sportId: 10, sportName: "배드민턴" },
        { sportId: 9, sportName: "크로스핏" },
        { sportId: 7, sportName: "테니스" }
      ],
      countOfReviews: 10,
      rating: 4.9,
      liked: true,
      countOfLikes: 100
    },
    {
      coachId: 1,
      coachName: "이코치",
      localInfo: "서울 도봉구 마들로",
      profileImageUrl:
        "https://res.heraldm.com/content/image/2024/04/12/20240412050389_0.jpg",
      coachIntroduction:
        "몸은 거짓말을 하지 않는다. 1회당 100만원으로 싸게 모시겠습니다. 사실 구라고요. 1회당 300만원으로 모시겠습니다.",
      coachingSports: [
        { sportId: 10, sportName: "배드민턴" },
        { sportId: 9, sportName: "크로스핏" },
        { sportId: 7, sportName: "테니스" }
      ],
      countOfReviews: 10,
      rating: 4.9,
      liked: true,
      countOfLikes: 100
    }
  ],
  totalCount: 100,
  currentPage: 1
};
