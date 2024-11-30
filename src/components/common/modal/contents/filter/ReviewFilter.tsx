import { FILTER_VALUES } from "@/constants/filter";
import { useState } from "react";
import RadioContent from "../RadioContent";

interface Props {
  activeFilter: number;
  onSubmit: (id: number) => void;
  onClose: () => void;
}

const ReviewFilter = ({ activeFilter, onSubmit, onClose }: Props) => {
  const [id, setId] = useState(activeFilter);

  const handleSubmit = () => {
    onSubmit(id);
    onClose();
  };
  const handleTemp = (id: number) => setId(id);

  return (
    <RadioContent
      title="리뷰 정렬"
      items={FILTER_VALUES}
      onPickNumber={handleTemp}
      activeNumber={id}
      onSubmit={handleSubmit}
    />
  );
};

export default ReviewFilter;
