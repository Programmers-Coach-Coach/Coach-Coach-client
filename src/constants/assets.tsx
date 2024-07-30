import { HiChartBar } from "react-icons/hi2";
import { IoMdPerson } from "react-icons/io";
import { FaPeoplePulling } from "react-icons/fa6";
import { IoLogOutOutline } from "react-icons/io5";
import { PiSunglassesBold } from "react-icons/pi";
import { IoIosArrowBack } from "react-icons/io";
import { GrHomeRounded } from "react-icons/gr";
import { CiDumbbell } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { RxPerson } from "react-icons/rx";

export const ICONS = {
  human: {
    one: <IoMdPerson />,
    two: <FaPeoplePulling />,
    coach: <PiSunglassesBold />,
    profile: <RxPerson />
  },
  record: <HiChartBar />,
  logout: <IoLogOutOutline />,
  back: <IoIosArrowBack />,
  home: <GrHomeRounded />,
  routine: <CiDumbbell />,
  alarm: <CiBellOn />
};
