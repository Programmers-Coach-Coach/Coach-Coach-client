interface IUserInfoForRoutineList {
  userId: number;
  nickname: string;
  profileImageUrl: string;
}

export interface IProfile {
  UserInfoForRoutineList: IUserInfoForRoutineList;
}
