import RadioContent from "@/components/common/modal/contents/RadioContent";
import { GENDER_VALUES } from "@/constants/filter";
import useCoachFilter from "@/hooks/useCoachFilter";

interface Props {
  onClose: () => void;
}
const GenderRadio = ({ onClose }: Props) => {
  const { pickGender, gender, reflectChangesToUrl } = useCoachFilter();

  const handleSubmit = () => {
    reflectChangesToUrl();
    onClose();
  };

  return (
    <RadioContent
      title="성별"
      items={GENDER_VALUES}
      onPickNumber={pickGender}
      activeNumber={gender}
      onSubmit={handleSubmit}
    />
  );
};

export default GenderRadio;
