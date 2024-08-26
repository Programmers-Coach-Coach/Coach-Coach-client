import { FaRegStar } from "react-icons/fa";
import { FaPeoplePulling, FaRegUser, FaStar } from "react-icons/fa6";
import { HiChartBar } from "react-icons/hi2";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosHeart,
  IoIosHeartEmpty,
  IoMdMore
} from "react-icons/io";
import {
  IoBarbell,
  IoClose,
  IoHomeOutline,
  IoListOutline,
  IoLogOutOutline,
  IoNotificationsOutline,
  IoPersonOutline,
  IoSearch
} from "react-icons/io5";
import { LuPencilLine } from "react-icons/lu";
import { PiSunglassesBold } from "react-icons/pi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TbArrowsExchange2 } from "react-icons/tb";

export const ICONS = {
  profile: IoPersonOutline,
  alarm: IoNotificationsOutline,
  routine: IoBarbell,
  home: IoHomeOutline,
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
  emptyHeart: IoIosHeartEmpty,
  list: IoListOutline
};
