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

export interface ILogin {
  email: string;
  password: string;
}

export interface ISignup {
  nickname: string;
  email: string;
  password: string;
  passwordCheck?: string;
}

export interface ICheckEmailDuplication {
  email: string;
}

export interface ICheckNicknameDuplication {
  nickname: string;
}
