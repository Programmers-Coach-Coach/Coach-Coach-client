import { SPORT_MAP } from "@/constants/filter";
import { FilterButton, Filters } from "@/style/Filter.css.ts";

interface Props {
  pickSportOptions: (id: number) => void;
  idListSports: number[];
}
const SportsFilterList = ({ pickSportOptions, idListSports }: Props) => {
  return (
    <Filters $numColumns={4}>
      {SPORT_MAP.map((sport, i) => (
        <FilterButton
          key={i}
          $active={
            idListSports.includes(i) || (idListSports.length === 0 && i === 0)
          }
          $isTotalSelector={i === 0}
          onClick={() => pickSportOptions(i)}
          className="medium__font"
        >
          {sport.screenName}
        </FilterButton>
      ))}
    </Filters>
  );
};

export default SportsFilterList;
