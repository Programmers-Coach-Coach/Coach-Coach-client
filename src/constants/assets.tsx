import { FaRegStar } from "react-icons/fa";
import { FaPeoplePulling, FaStar } from "react-icons/fa6";
import { HiChartBar } from "react-icons/hi2";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosHeart,
  IoIosHeartEmpty,
  IoMdMore
} from "react-icons/io";
import { IoClose, IoLogOutOutline, IoSearch } from "react-icons/io5";
import { LuPencilLine } from "react-icons/lu";
import { PiSunglassesBold } from "react-icons/pi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TbArrowsExchange2 } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa6";
import {
  BiDumbbell,
  BiSolidUser,
  BiSolidBell,
  BiSolidHome
} from "react-icons/bi";

export const ICONS = {
  profile: BiSolidUser,
  alarm: BiSolidBell,
  routine: BiDumbbell,
  home: BiSolidHome,
  person: FaRegUser,
  twins: FaPeoplePulling,
  coach: PiSunglassesBold,
  record: HiChartBar,
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
  heart: IoIosHeart,
  emptyHeart: IoIosHeartEmpty
};
