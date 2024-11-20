export interface IGetMyMember {
  userId: number;
  userName: string;
  profileImageUrl: string | null;
  isMatching: boolean;
  localAddress: string | null;
  interestedSports: {
    sportId: number;
    sportName: string;
  }[];
  startDate: string;
}
