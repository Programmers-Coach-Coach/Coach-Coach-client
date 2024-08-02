export interface IPopularCoach {
  coachId: number;
  coachName: string;
  coachImageUrl: string;
  description: string;
  countOfLikes: number;
  liked: boolean;
  coachingSports: {
    sportId: number;
    sportName: string;
  }[];
}
