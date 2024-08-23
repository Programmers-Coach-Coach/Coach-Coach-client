import { CiBellOn, CiDumbbell } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { FaPeoplePulling, FaStar } from "react-icons/fa6";
import { GrHomeRounded } from "react-icons/gr";
import { HiChartBar } from "react-icons/hi2";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosHeart,
  IoIosHeartEmpty,
  IoMdMore,
  IoMdPerson
} from "react-icons/io";
import { IoClose, IoLogOutOutline, IoSearch } from "react-icons/io5";
import { LuPencilLine } from "react-icons/lu";
import { PiSunglassesBold } from "react-icons/pi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { RxPerson } from "react-icons/rx";
import { TbArrowsExchange2 } from "react-icons/tb";

export const ICONS = {
  person: IoMdPerson,
  twins: FaPeoplePulling,
  coach: PiSunglassesBold,
  profile: RxPerson,
  record: HiChartBar,
  logout: IoLogOutOutline,
  back: IoIosArrowBack,
  home: GrHomeRounded,
  routine: CiDumbbell,
  alarm: CiBellOn,
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
