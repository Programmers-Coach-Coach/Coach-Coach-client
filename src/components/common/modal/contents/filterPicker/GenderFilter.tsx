import SvgIcon from "@/components/Icon/SvgIcon";
import { GenderSelectButton } from "./FilterPicker.css";

const GenderFilter = () => {
  return (
    <GenderSelectButton onClick={() => {}}>
      여성
      <SvgIcon name="arrow" stroke="#0075FF" width="20px" height="20px" />
    </GenderSelectButton>
  );
};

export default GenderFilter;
