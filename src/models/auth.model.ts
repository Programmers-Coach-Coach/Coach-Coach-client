export interface IUserProfile {
  email: string;
  nickname: string;
  profileImageUrl: string;
  gender: string;
  address: string;
  addressDetail: string;
  introduction: string;
  interestedSports: string[];
}

export interface IMyPageFormValues {
  nickname: string;
  profileImageUrl: string;
  address: string;
  addressDetail: string;
  interestedSports: string[];
  introduction: string;
  gender: string;
}
