import { ICoachingSports } from "./sports.model";

export interface IPopularCoach {
  coachId: number;
  coachName: string;
  profileImageUrl: string;
  description: string;
  countOfLikes: number;
  isLiked: boolean;
  coachingSports: ICoachingSports[];
}

export interface ISimpleCoach {
  coachId: number;
  coachName: string;
  profileImageUrl: string | null;
  isMatching: boolean;
}

export interface ICoach extends ISimpleCoach {
  localAddress: string;
  coachIntroduction: string;
  coachingSports: ICoachingSports[];
  countOfReviews: number;
  reviewRating: number;
  isLiked: boolean;
  countOfLikes: number;
}

export interface ICoachList {
  data: ICoach[];
  totalCount: number;
  currentPage: number;
}

export interface IAllCoachList {
  filter: {
    search?: string; // 검색어
  };
  page: number;
}

export interface IMyPageCoachFormValues {
  coachIntroduction: string;
  activeCenter: string;
  activeCenterDetail: string;
  coachingSports: string[];
  activeHours: string;
  chattingUrl: string;
  isOpen: boolean;
}
export type IMyPageCoachFormWithSports = Omit<
  IMyPageCoachFormValues,
  "coachingSports"
> & {
  coachingSports: { sportName: string }[];
};
export interface ICoachDetail {
  coachId: number;
  coachName: string;
  coachGender: "M" | "W";
  localAddress: string;
  profileImageUrl: string | null;
  createdAt: string;
  coachIntroduction: string;
  coachingSports: ICoachingSports[];
  activeCenter: string | null;
  activeCenterDetail: string | null;
  activeHours: string;
  chattingUrl: string;
  // reviews: IReview[];
  isOpen: boolean;
  isContacted: boolean;
  isMatched: boolean;
  countOfReviews: number;
  reviewRating: number;
  isLiked: boolean;
  countOfLikes: number;
}

export interface IReview {
  reviewId: number;
  userId: number;
  userName: string;
  contents: string;
  stars: number;
  createdAt: string;
  isMyReview: boolean; // 내가 쓴 리뷰인지
}

export interface IGetMyCoach {
  coachId: number;
  coachName: string;
  profileImageUrl: string | null;
  localAddress: string | null;
  coachingSports: {
    sportId: number;
    sportName: string;
  }[];
  isLiked: boolean;
  isMatching: boolean;
}
