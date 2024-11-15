import RadioContent from "../RadioContent";

export type ReviewFilter = "latest" | "rating_desc" | "rating_asc";

interface Props {
  activeFilter: number;
  onPick: (id: number) => void;
  onClose: () => void;
}

export const FILTER_VALUES = ["최신순", "별점 높은 순", "별점 낮은 순"];

const ReviewFilter = ({ activeFilter, onPick, onClose }: Props) => {
  const handleSubmit = () => {
    onClose();
  };
  return (
    <RadioContent
      title="리뷰 정렬"
      items={FILTER_VALUES}
      onPickNumber={onPick}
      activeNumber={activeFilter}
      onSubmit={handleSubmit}
    />
  );
};

export default ReviewFilter;
