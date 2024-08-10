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

export interface ICoach {
  coachId: number;
  coachName: string;
  localInfo: string;
  profileImageUrl: string | null;
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
  coachGender: string;
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
