import EmptyHeart from "@/assets/images/empty-heart.svg?react";
import FullHeart from "@/assets/images/full-heart.svg?react";
import { CgDetailsMore } from "react-icons/cg";
import { FaCheck, FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowDown, IoMdMore } from "react-icons/io";
import {
  IoAddCircleSharp,
  IoBarbellOutline,
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
import { LuPencilLine } from "react-icons/lu";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TbArrowsExchange2 } from "react-icons/tb";

export const ICONS = {
  profile: IoPersonOutline,
  alarm: IoNotificationsOutline,
  routine: IoBarbellOutline,
  home: IoHomeOutline,
  person: IoPersonOutline,
  twins: IoPeopleOutline,
  coach: IoGlasses,
  record: IoTrendingDown,
  logout: IoLogOutOutline,
  back: IoIosArrowBack,
  modify: LuPencilLine,
  delete: RiDeleteBin5Line,
  filter: TbArrowsExchange2,
  x: IoClose,
  search: IoSearch,
  arrowDown: IoIosArrowDown,
  dots: IoMdMore,
  emptyStar: FaRegStar,
  fullStar: FaStar,
  heart: FullHeart,
  emptyHeart: EmptyHeart,
  list: IoListOutline,
  add: IoAddCircleSharp,
  close: IoCloseCircle,
  chat: IoChatbubbleEllipsesSharp,
  more: CgDetailsMore,
  dropUp: MdOutlineArrowDropUp,
  dropDown: MdOutlineArrowDropDown,
  check: FaCheck
};
