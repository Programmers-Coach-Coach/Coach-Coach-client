import { SORT_MAP } from "@/constants/filter";
import { FilterButton, Filters } from "@/style/Filter.css.ts";

interface Props {
  sort: number;
  pickSortFilter: (id: number) => void;
}
const SortFilterList = ({ sort, pickSortFilter }: Props) => {
  return (
    <Filters $numColumns={2}>
      {SORT_MAP.map((filter, i) => (
        <FilterButton
          key={i}
          $active={i === sort}
          onClick={() => pickSortFilter(i)}
          className="bold__font"
        >
          {filter.screenName}
        </FilterButton>
      ))}
    </Filters>
  );
};

export default SortFilterList;
