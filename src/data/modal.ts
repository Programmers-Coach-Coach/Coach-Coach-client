import { ICONS } from "../constants/assets"; // 수정된 import 경로

export type TModal =
  | "star-enroll"
  | "routine-enroll"
  | "routine-modify"
  | "coach-switch"
  | "category-enroll"
  | "category-modify"
  | "action-enroll"
  | "action-modify";

export type TFooterPicker = "profile" | "routine";
export type TRoutinePicker =
  | "delete"
  | "matching"
  | "inquiry"
  | "category"
  | "action";

export interface IModalData {
  primaryButton: string;
  secondaryButton: string;
  onClick: () => void;
}

export interface IFooterPickerData {
  name: string;
  link: string;
  icon: keyof typeof ICONS;
}

export interface IRoutinePickerData {
  name: string;
  onClick: () => void;
}

export const modal: Record<TModal, IModalData> = {
  "star-enroll": {
    primaryButton: "등록하기",
    secondaryButton: "취소",
    onClick: () => {}
  },
  "routine-enroll": {
    primaryButton: "등록하기",
    secondaryButton: "취소",
    onClick: () => {}
  },
  "routine-modify": {
    primaryButton: "수정하기",
    secondaryButton: "취소",
    onClick: () => {}
  },
  "coach-switch": {
    primaryButton: "전환하기",
    secondaryButton: "취소",
    onClick: () => {}
  },
  "category-enroll": {
    primaryButton: "등록하기",
    secondaryButton: "취소",
    onClick: () => {}
  },
  "category-modify": {
    primaryButton: "수정하기",
    secondaryButton: "취소",
    onClick: () => {}
  },
  "action-enroll": {
    primaryButton: "등록하기",
    secondaryButton: "취소",
    onClick: () => {}
  },
  "action-modify": {
    primaryButton: "수정하기",
    secondaryButton: "취소",
    onClick: () => {}
  }
};

export const footerPicker: Record<TFooterPicker, IFooterPickerData[]> = {
  profile: [
    { name: "내 프로필", link: "/mypage", icon: "person" },
    {
      name: "매칭 회원 리스트",
      link: "/manage",
      icon: "twins"
    },
    { name: "내 기록", link: "/record-list", icon: "record" },
    { name: "로그아웃", link: "/login", icon: "logout" }
  ],
  routine: [
    { name: "내 루틴", link: "/routine", icon: "person" },
    {
      name: "내 코치 루틴",
      link: "/routine/my-coach",
      icon: "coach"
    }
  ]
};

export const routinePicker: Record<TRoutinePicker, IRoutinePickerData[]> = {
  delete: [
    { name: "루틴 삭제", onClick: () => {} },
    { name: "취소", onClick: () => {} }
  ],
  matching: [
    { name: "루틴 작성", onClick: () => {} },
    { name: "삭제", onClick: () => {} }
  ],
  inquiry: [
    { name: "회원 추가", onClick: () => {} },
    { name: "거절", onClick: () => {} }
  ],
  category: [
    { name: "카테고리 수정", onClick: () => {} },
    { name: "카테고리 삭제", onClick: () => {} },
    { name: "운동 추가", onClick: () => {} }
  ],
  action: [
    { name: "운동 수정", onClick: () => {} },
    { name: "운동 삭제", onClick: () => {} }
  ]
};
