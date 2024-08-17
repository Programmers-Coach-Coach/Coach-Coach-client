import { ICoachDetail } from "@/models/coach.model";

export const coachProfile: ICoachDetail = {
  coachName: "이현철코치",
  coachGender: "M",
  localInfo: "경기도 고양시 덕양구 통일로 374",
  profileImageUrl: "asdasd",
  createdAt: "createdAt",
  coachIntroduction: "안녕하세요 이현철 코치입니다.",
  coachingSports: ["축구", "배드민턴", "테니스"],
  activeCenter: "경기도 고양시 덕양구 통일로 374",
  activeCenterDetail: "107-1503",
  activeHours: "오전 10시 ~ 오후 6시",
  chattingUrl: "오픈톡 링크",
  reviews: [
    {
      userId: 1,
      userName: "이현철",
      contents: "참 좋은 코치",
      stars: 5,
      createdAt: "2024-08-15"
    },
    {
      userId: 1,
      userName: "이현철",
      contents: "참 좋은 코치",
      stars: 4,
      createdAt: "2024-08-15"
    },
    {
      userId: 1,
      userName: "이현철",
      contents: "참 좋은 코치",
      stars: 3,
      createdAt: "2024-08-15"
    },
    {
      userId: 1,
      userName: "이현철",
      contents: "참 좋은 코치",
      stars: 3,
      createdAt: "2024-08-15"
    }
  ],
  isOpen: true,
  countOfReviews: 1,
  rating: 1,
  liked: true,
  countOfLikes: 1
};
