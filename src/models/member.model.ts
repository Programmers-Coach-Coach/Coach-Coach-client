export interface IGetMyMember {
  userId: number;
  userName: string;
  profileImageUrl: string | null;
  isMatching: boolean;
  localAddress: string | null;
  coachingSports: {
    sportId: number;
    sportName: string;
  }[];
  startDate: string;
}
