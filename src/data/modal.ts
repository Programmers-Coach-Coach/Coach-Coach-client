import { ICONS } from "../constants/assets"; // 수정된 import 경로

export type TFooterPicker = "profile";

export interface IFooterPickerData {
  name: string;
  link: string;
  icon: keyof typeof ICONS;
}

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
  ]
};
