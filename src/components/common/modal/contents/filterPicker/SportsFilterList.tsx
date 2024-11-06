import { sportsList } from "@/data/sportsList";
import { FilterButton, Filters } from "./FilterPicker.css";

interface Props {
  multiFilter: (id: number) => void;
  idListSports: number[];
}
const SportsFilterList = ({ multiFilter, idListSports }: Props) => {
  return (
    <Filters $numColumns={4}>
      <FilterButton
        $active={idListSports.length === 0}
        onClick={() => multiFilter(0)}
        className="total__selector bold__font"
      >
        전체 선택
      </FilterButton>
      {sportsList.map((sport) => (
        <FilterButton
          key={sport.sportId}
          $active={
            idListSports.includes(sport.sportId) ||
            (idListSports.length === 0 && sport.sportId === 0)
          }
          onClick={() => multiFilter(sport.sportId)}
          className="medium__font"
        >
          {sport.sportName}
        </FilterButton>
      ))}
    </Filters>
  );
};

export default SportsFilterList;
