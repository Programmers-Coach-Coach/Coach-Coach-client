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
