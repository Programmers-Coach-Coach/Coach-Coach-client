export interface ISports {
  sportsId: number;
  sportsName: string;
  sportsImageUrl: string;
}

export interface IPopularCoach {
  coachId: number;
  coachName: string;
  coachImageUrl: string;
  description: string;
  likes: number;
  coachingSports: {
    sportsId: number;
    sportsName: string;
  }[];
}
