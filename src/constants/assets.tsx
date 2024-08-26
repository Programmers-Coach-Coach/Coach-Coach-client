import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosHeart,
  IoIosHeartEmpty,
  IoMdMore
} from "react-icons/io";
import {
  IoBarbellOutline,
  IoClose,
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
  heart: IoIosHeart,
  emptyHeart: IoIosHeartEmpty,
  list: IoListOutline
};
