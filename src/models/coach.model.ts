import { ICoachingSports } from "./sports.model";

export interface IPopularCoach {
  coachId: number;
  coachName: string;
  coachImageUrl: string;
  description: string;
  countOfLikes: number;
  liked: boolean;
  coachingSports: ICoachingSports[];
}

export interface ISimpleCoach {
  coachId: number;
  coachName: string;
  profileImageUrl: string | null;
}

export interface ICoach extends ISimpleCoach {
  localInfo: string; // localAddress로 변경
  coachIntroduction: string;
  coachingSports: ICoachingSports[];
  countOfReviews: number;
  rating: number;
  liked: boolean;
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
    filterId: number; // 정렬 필터
    sportsIdList?: number[]; // 종목 필터
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

export interface ICoachDetail {
  coachName: string;
  coachGender: "M" | "W";
  localInfo: string;
  profileImageUrl: string;
  createdAt: string;
  coachIntroduction: string;
  coachingSports: string[];
  activeCenter: string | null;
  activeCenterDetail: string | null;
  activeHours: string;
  chattingUrl: string;
  reviews: {
    userId: number;
    userName: string;
    contents: string;
    stars: number;
    createdAt: string;
  }[];
  isOpen: boolean;
  countOfReviews: number;
  rating: number;
  liked: boolean;
  countOfLikes: number;
}
