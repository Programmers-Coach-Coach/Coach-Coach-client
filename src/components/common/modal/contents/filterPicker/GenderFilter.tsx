import SvgIcon from "@/components/Icon/SvgIcon";
import { GENDER_VALUES } from "@/constants/filter";
import useCoachFilter from "@/hooks/useCoachFilter";
import { GenderSelectButton } from "./FilterPicker.css";

interface Props {
  onChangeModal: () => void;
}

const GenderFilter = ({ onChangeModal }: Props) => {
  const { gender } = useCoachFilter();
  return (
    <GenderSelectButton onClick={onChangeModal}>
      {GENDER_VALUES[gender]}
      <SvgIcon
        name="arrow"
        stroke="#0075FF"
        width="20px"
        height="20px"
        onClick={onChangeModal}
      />
    </GenderSelectButton>
  );
};

export default GenderFilter;
