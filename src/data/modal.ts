import { ICONS } from "../constants/assets"; // 수정된 import 경로

export type TModal =
  | "star-enroll"
  | "routine-enroll"
  | "routine-modify"
  | "coach-switch"
  | "category-enroll"
  | "category-modify"
  | "sports-enroll"
  | "sports-modify";

export type TFooterPicker = "profile" | "routine";
export type TRoutinePicker = "write";

export interface IModalData {
  button: string;
  onClick: () => void;
}

export interface IFooterPickerData {
  name: string;
  link: string;
  icon: JSX.Element;
}

export interface IRoutinePickerData {
  name: string;
  onClick: () => void;
}

export const modal: Record<TModal, IModalData> = {
  "star-enroll": {
    button: "등록하기",
    onClick: () => {}
  },
  "routine-enroll": {
    button: "등록하기",
    onClick: () => {}
  },
  "routine-modify": {
    button: "수정하기",
    onClick: () => {}
  },
  "coach-switch": {
    button: "전환하기",
    onClick: () => {}
  },
  "category-enroll": {
    button: "등록하기",
    onClick: () => {}
  },
  "category-modify": {
    button: "수정하기",
    onClick: () => {}
  },
  "sports-enroll": {
    button: "등록하기",
    onClick: () => {}
  },
  "sports-modify": {
    button: "수정하기",
    onClick: () => {}
  }
};

export const footerPicker: Record<TFooterPicker, IFooterPickerData[]> = {
  profile: [
    { name: "내 프로필", link: "/", icon: ICONS.human.one },
    {
      name: "매칭 회원 리스트",
      link: "",
      icon: ICONS.human.two
    },
    { name: "내 기록", link: "/", icon: ICONS.record },
    { name: "로그아웃", link: "/", icon: ICONS.logout }
  ],
  routine: [
    { name: "내 루틴", link: "/", icon: ICONS.human.one },
    {
      name: "내 코치 루틴",
      link: "/",
      icon: ICONS.human.coach
    }
  ]
};

export const routinePicker: Record<TRoutinePicker, IRoutinePickerData[]> = {
  write: [
    { name: "루틴 작성", onClick: () => {} },
    { name: "삭제", onClick: () => {} }
  ]
};
