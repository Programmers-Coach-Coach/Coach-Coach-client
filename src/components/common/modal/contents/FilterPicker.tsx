import { filterList } from "@/data/sportsList";
import { ICoachingSports } from "@/models/sports.model";
import styled from "styled-components";

interface Props {
  filterId: number;
  sportsIdList: number[];
  sportListWithTotal: ICoachingSports[]; // "전체"를 포함한 종목 필터
  singleFilter: (id: number) => void;
  multiFilter: (id: number) => void;
}

const FilterPicker = ({
  filterId,
  sportsIdList,
  sportListWithTotal,
  singleFilter,
  multiFilter
}: Props) => {
  return (
    <FilterPickerStyle>
      <Text>
        <h1>정렬</h1>
        <p className="b2">*한 개만 선택할 수 있어요</p>
      </Text>
      <Filters>
        {filterList.map((filter) => (
          <Filter
            key={filter.id}
            $active={filter.id === filterId}
            onClick={() => singleFilter(filter.id)}
          >
            {filter.name}
          </Filter>
        ))}
      </Filters>
      <Text>
        <h1>종목</h1>
        <p className="b2">*여러 개 선택할 수 있어요</p>
      </Text>
      <Filters>
        {sportListWithTotal.map((sport) => (
          <Filter
            key={sport.sportId}
            $active={sportsIdList.includes(sport.sportId)}
            onClick={() => multiFilter(sport.sportId)}
          >
            {sport.sportName}
          </Filter>
        ))}
      </Filters>
    </FilterPickerStyle>
  );
};

const FilterPickerStyle = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Text = styled.div`
  padding: 16px 20px;
  position: relative;
  h1 {
    text-align: left;
  }

  p {
    position: absolute;
    top: 20px;
    right: 0;
  }
`;

const Filters = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const Filter = styled.button<{ $active: boolean }>`
  font-weight: 800;
  padding: 0.5rem;
  color: ${({ theme }) => theme.color.background};
  background-color: ${({ $active, theme }) =>
    $active ? theme.color.primary : theme.color.gray3};
  border-radius: ${({ theme }) => theme.borderRadius.default};
`;

export default FilterPicker;
