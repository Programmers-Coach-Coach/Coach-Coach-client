import { filterList } from "@/data/sportsList";
import { FilterButton, Filters } from "./FilterPicker.css";

interface Props {
  sort: string;
  singleFilter: (id: number) => void;
}
const SortFilterList = ({ sort, singleFilter }: Props) => {
  return (
    <Filters $numColumns={2}>
      {filterList.map((filter) => (
        <FilterButton
          key={filter.id}
          $active={filter.parameter === sort}
          onClick={() => singleFilter(filter.id)}
          className="bold__font"
        >
          {filter.name}
        </FilterButton>
      ))}
    </Filters>
  );
};

export default SortFilterList;
