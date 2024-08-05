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
