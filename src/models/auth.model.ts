interface Sport {
  sportId: number;
  sportName: string;
}
export interface IUserProfile {
  email: string;
  nickname: string;
  profileImageUrl: File;
  gender: "M" | "W";
  localAddress: string;
  localAddressDetail: string;
  introduction: string;
  interestedSports: Sport[];
} // 타입 정의

export interface IMyPageFormValues {
  nickname: string;
  profileImageUrl: File | string;
  localAddress: string;
  localAddressDetail: string;
  interestedSports: string[]; // 수정된 타입
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

export interface ICheckPassword {
  password: string;
}
