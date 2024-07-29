export type TModal =
  | "star-enroll"
  | "routine-enroll"
  | "routine-modify"
  | "coach-switch"
  | "category-enroll"
  | "category-modify"
  | "sports-enroll"
  | "sports-modify";

export const modal: Record<TModal, { button: string }> = {
  "star-enroll": {
    button: "등록하기"
  },
  "routine-enroll": {
    button: "등록하기"
  },
  "routine-modify": {
    button: "수정하기"
  },
  "coach-switch": {
    button: "전환하기"
  },
  "category-enroll": {
    button: "등록하기"
  },
  "category-modify": {
    button: "수정하기"
  },
  "sports-enroll": {
    button: "등록하기"
  },
  "sports-modify": {
    button: "수정하기"
  }
};

export type TFooterPicker = "profile" | "routine";

export const footerPicker: Record<
  TFooterPicker,
  { name: string; link: string }[]
> = {
  profile: [
    { name: "내 프로필", link: "" },
    { name: "매칭 회원 리스트", link: "" },
    { name: "내기록", link: "" },
    { name: "로그아웃", link: "" }
  ],
  routine: [
    { name: "내 루틴", link: "" },
    { name: "내 코치 루틴", link: "" }
  ]
};
