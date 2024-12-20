import SendButton from "@/assets/images/SendButton.svg?react";
import AddRoutine from "@/assets/images/add-routine.svg?react";
import Alarm from "@/assets/images/alarm.svg?react";
import ArrowDown from "@/assets/images/arrow-down.svg?react";
import Delete from "@/assets/images/delete.svg?react";
import Dumbbell from "@/assets/images/dumbbell.svg?react";
import EmptyHeart from "@/assets/images/empty-heart.svg?react";
import Filter from "@/assets/images/filter.svg?react";
import FullHeart from "@/assets/images/full-heart.svg?react";
import FullStar from "@/assets/images/full-star.svg?react";
import Modify from "@/assets/images/modify.svg?react";
import NoLocation from "@/assets/images/no-location.svg?react";
import Notification from "@/assets/images/notification.svg?react";
import Search from "@/assets/images/search.svg?react";
import StarRounded from "@/assets/images/star-rounded.svg?react";
import Star from "@/assets/images/star.svg?react";
import Warning from "@/assets/images/warning.svg?react";
import XCircle from "@/assets/images/x-circle.svg?react";
import X from "@/assets/images/x.svg?react";
import { CgDetailsMore } from "react-icons/cg";
import { FaCheck, FaRegStar } from "react-icons/fa";
import { IoIosArrowBack, IoMdMore } from "react-icons/io";

import {
  // IoBarbellOutline,
  IoChatbubbleEllipsesSharp,
  IoCloseCircle,
  IoGlasses,
  IoHomeOutline,
  IoListOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoTrendingDown
} from "react-icons/io5";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

export const ICONS = {
  profile: IoPersonOutline,
  alarm: Alarm,
  home: IoHomeOutline,
  person: IoPersonOutline,
  twins: IoPeopleOutline,
  coach: IoGlasses,
  record: IoTrendingDown,
  logout: IoLogOutOutline,
  back: IoIosArrowBack,
  modify: Modify,
  delete: Delete,
  filter: Filter,
  x: X,
  xCircle: XCircle,
  search: Search,
  dots: IoMdMore,
  star: Star,
  emptyStar: FaRegStar,
  fullStar: FullStar,
  starRounded: StarRounded,
  heart: FullHeart,
  emptyHeart: EmptyHeart,
  list: IoListOutline,
  addRoutine: AddRoutine,
  close: IoCloseCircle,
  chat: IoChatbubbleEllipsesSharp,
  more: CgDetailsMore,
  dropUp: MdOutlineArrowDropUp,
  dropDown: MdOutlineArrowDropDown,
  check: FaCheck,
  dumbbell: Dumbbell,
  arrow: ArrowDown,
  noLocation: NoLocation,
  warning: Warning,
  notification: Notification,
  send: SendButton
};
