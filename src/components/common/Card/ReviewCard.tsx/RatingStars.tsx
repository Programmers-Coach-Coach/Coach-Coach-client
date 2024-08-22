import Icon from "@/components/Icon/Icon";

const STAR_RATING = [1, 2, 3, 4, 5];

interface Props {
  stars: number;
  size: string;
  onClick?: (cnt: number) => void;
}

const RatingStars = ({ stars, size, onClick }: Props) => {
  return (
    <>
      {STAR_RATING.map((cnt) => (
        <Icon
          key={cnt}
          name={cnt <= stars ? "fullStar" : "emptyStar"}
          size={size}
          color="review"
          onClick={onClick ? () => onClick(cnt) : undefined}
        />
      ))}
    </>
  );
};

export default RatingStars;
