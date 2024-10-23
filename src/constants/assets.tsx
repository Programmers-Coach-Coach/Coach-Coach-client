import ArrowDown from "@/assets/images/arrow-down.svg?react";
import EmptyHeart from "@/assets/images/empty-heart.svg?react";
import FullHeart from "@/assets/images/full-heart.svg?react";
import FullStar from "@/assets/images/full-star.svg?react";
import Star from "@/assets/images/star.svg?react";
import Dumbbell from "@/assets/images/dumbbell.svg?react";
import Delete from "@/assets/images/delete.svg?react";
import Modify from "@/assets/images/modify.svg?react";
import AddRoutine from "@/assets/images/add-routine.svg?react";
import { CgDetailsMore } from "react-icons/cg";
import { FaCheck, FaRegStar } from "react-icons/fa";
import { IoIosArrowBack, IoMdMore } from "react-icons/io";
import {
  // IoBarbellOutline,
  IoChatbubbleEllipsesSharp,
  IoClose,
  IoCloseCircle,
  IoGlasses,
  IoHomeOutline,
  IoListOutline,
  IoLogOutOutline,
  IoNotificationsOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearch,
  IoTrendingDown
} from "react-icons/io5";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { TbArrowsExchange2 } from "react-icons/tb";

export const ICONS = {
  profile: IoPersonOutline,
  alarm: IoNotificationsOutline,
  // routine: IoBarbellOutline,
  home: IoHomeOutline,
  person: IoPersonOutline,
  twins: IoPeopleOutline,
  coach: IoGlasses,
  record: IoTrendingDown,
  logout: IoLogOutOutline,
  back: IoIosArrowBack,
  modify: Modify,
  delete: Delete,
  filter: TbArrowsExchange2,
  x: IoClose,
  search: IoSearch,
  dots: IoMdMore,
  star: Star,
  emptyStar: FaRegStar,
  fullStar: FullStar,
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
  arrow: ArrowDown
};
