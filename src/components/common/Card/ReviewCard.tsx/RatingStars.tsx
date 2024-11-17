import SvgIcon from "@/components/Icon/SvgIcon";

const STAR_RATING = [1, 2, 3, 4, 5];

interface Props {
  stars: number;
  onClick?: (cnt: number) => void;
}

// TODO: size 삭제
const RatingStars = ({ stars, onClick }: Props) => {
  return (
    <>
      {STAR_RATING.map((cnt) => (
        <SvgIcon
          key={cnt}
          name="starRounded"
          fill={cnt <= stars ? "#FFC700" : "#7C7C7C"}
          color="review"
          onClick={onClick ? () => onClick(cnt) : undefined}
        />
      ))}
    </>
  );
};

export default RatingStars;
